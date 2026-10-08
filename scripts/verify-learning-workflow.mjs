import assert from 'node:assert/strict';
import { createServer } from 'vite';
import { chromium } from 'playwright';
import { getLearningTakeaway, mergeLearningNotes } from '../src/ui/components/feedback-panel/feedback-panel.js';

const appKey = 'azure-cert-trainer-2026-v3';
const server = await createServer({ server: { host: '127.0.0.1', port: 0 } });
let browser;
let currentPage;

function storedState(page) {
  return page.evaluate((key) => JSON.parse(localStorage.getItem(key)).states.az104, appKey);
}

async function assertFits(page) {
  assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'Page overflows horizontally');
  for (const selector of ['#topicPill', '#statusPill', '#favoriteButton', '#noteButton', '#reportButton']) {
    const box = await page.locator(selector).boundingBox();
    const width = page.viewportSize().width;
    assert(box && box.x >= 0 && box.x + box.width <= width + 1, `${selector} overflows`);
  }
}

try {
  assert.equal(getLearningTakeaway('Première phrase. Deuxième phrase.'), 'Première phrase.');
  assert.equal(getLearningTakeaway(''), '');
  assert.deepEqual(mergeLearningNotes('Point utile.\n\nPoint utile.', 'Point utile. Une nuance complémentaire.'), ['Point utile.', 'Une nuance complémentaire.']);
  await server.listen();
  browser = await chromium.launch({ headless: true });
  const url = server.resolvedUrls.local[0];
  for (const theme of ['dark', 'light']) {
    for (const width of [390, 768, 1440]) {
      const context = await browser.newContext({ viewport: { width, height: 900 }, colorScheme: theme });
      await context.addInitScript(({ key, theme }) => {
        if (localStorage.getItem(key)) return;
        localStorage.setItem(key, JSON.stringify({ activeTraining: 'az104', theme, states: {} }));
        localStorage.setItem(`${key}-onboarding-v1`, '1');
      }, { key: appKey, theme });
      const page = await context.newPage();
      currentPage = page;
      page.setDefaultTimeout(8000);
      const errors = [];
      page.on('pageerror', (error) => errors.push(error.message));
      await page.goto(url, { waitUntil: 'domcontentloaded' });
      await page.locator('#dashboard').waitFor({ state: 'visible' });
      assert.match(await page.locator('#startWeaknessButton').innerText(), /Commencer.*10/);
      assert.match(await page.locator('.ui-course-hub__coverage').innerText(), /^0 % explorés/);
      assert(!/0\/0|streak/.test(await page.locator('#dashboard').innerText()));
      await page.screenshot({ path: `test-results/ux-dashboard-${theme}-${width}.png` });
      await page.locator('#startWeaknessButton').click();
      await page.locator('#questionCard').waitFor({ state: 'visible' });
      assert.equal((await storedState(page)).studySession.ids.length, 10);
      await assertFits(page);
      await page.screenshot({ path: `test-results/ux-study-${theme}-${width}.png` });
      if (width <= 920) {
        assert(!(await page.locator('#studyFilters').isVisible()), 'Mobile filters start expanded');
        assert.equal(await page.locator('.mobile-nav-label:visible').count(), 4);
        for (const button of await page.locator('.app-shell-primary-nav .rail-link:visible').all()) {
          const box = await button.boundingBox();
          assert(box && box.x >= 0 && box.x + box.width <= width + 1 && box.y >= 0 && box.y + box.height <= 901 && box.height >= 44, 'Mobile navigation target does not fit');
        }
        assert(await page.locator('.ui-training-toolbar').isVisible(), 'Compact filters must be accessible on mobile');
        assert(await page.locator('#filterToggleButton').isHidden(), 'No duplicate mobile filter toggle');
        assert(await page.locator('.ui-training-toolbar .ui-domain-selector').isVisible());
      }
      await page.locator('#choices [data-choice="2"]').click();
      assert.equal((await storedState(page)).drafts['T1-Q1'].selected[0], 2);
      const submit = width <= 920 ? '#mobileSubmitButton' : '#submit';
      await page.locator(submit).click();
      await page.locator('#feedback').waitFor({ state: 'visible' });
      const feedback = (await page.locator('#feedback').innerText()).toLocaleLowerCase('fr');
      assert(feedback.includes('bonne réponse') && feedback.includes('pourquoi') && !feedback.includes('à retenir'), `Unexpected correction: ${feedback}`);
      assert.equal(await page.locator('#feedback .ui-feedback-panel__takeaway').count(),1);
      assert.equal((await storedState(page)).answers['T1-Q1'].correct, true);
      await page.locator('#feedback .ui-feedback-panel__footer button').click();
      assert.equal((await storedState(page)).answers['T1-Q1'].correct, true, 'Retry deleted the stored result');
      await page.locator('#choices [data-choice="2"]').click();
      await page.locator(submit).click();
      assert.equal((await storedState(page)).answers['T1-Q1'].streak, 2);
      assert.match(await page.locator('#statusPill').innerText(), /Maîtrisée/);
      await page.locator(width <= 920 ? '#mobileNextButton' : '#next').click();
      const beforeResume = await storedState(page);
      await page.locator('.rail-link[data-mode="dashboard"]').click();
      assert.equal(await page.locator('#startWeaknessButton').innerText(), 'Reprendre ma session');
      assert.match(await page.locator('#dashboardSessionSummary').innerText(), /T1-Q2/);
      await page.locator('#startWeaknessButton').click();
      assert.equal(await page.locator('#questionId').innerText(), 'T1-Q2');
      assert.deepEqual((await storedState(page)).answers, beforeResume.answers);
      await page.reload({ waitUntil: 'domcontentloaded' });
      await page.locator('#dashboard').waitFor({ state: 'visible' });
      await page.locator('#startWeaknessButton').click();
      assert.equal(await page.locator('#questionId').innerText(), 'T1-Q2', 'Reload lost the saved session position');
      assert.deepEqual((await storedState(page)).answers, beforeResume.answers, 'Reload lost the answers');
      if (width <= 920) {
        await page.locator('#settingsButton').click();
        await page.locator('[data-settings-target="#trainingSettings"]').click();
        assert(await page.locator('#settingsTrainingSelect').isVisible());
        await page.locator('.rail-link[data-mode="study"]').click();
        await page.locator('#focusToggleButton').click();
        assert(!(await page.locator('.app-shell-primary-nav').isVisible()));
        assert(await page.locator('#mobileActionBar').isVisible());
        await page.locator('#focusToggleButton').click();
      }

      await page.locator('#questionNavigatorButton').click();
      const session = (await storedState(page)).studySession;
      assert.equal(await page.locator('[data-jump-id]').count(), 10);
      const lastId = session.ids.at(-1);
      await page.locator(`[data-jump-id="${lastId}"]`).click();
      assert.equal((await storedState(page)).studySession.mode, 'quick');
      const answerIndices = await page.evaluate(id => window.AZ104_QUESTIONS.find(q => q.id === id).answerIndices, lastId);
      for (const index of answerIndices) await page.locator(`#choices [data-choice="${index}"]`).click();
      await page.locator(submit).click();
      await page.locator(width <= 920 ? '#mobileNextButton' : '#next').click();
      assert(await page.locator('#dashboard').isVisible());
      assert.equal((await storedState(page)).studySession.completed, true);
      assert.equal((await storedState(page)).answers['T1-Q1'].streak, 2);
      await page.locator('.rail-link[data-mode="dashboard"]').click();
      await page.locator('#dashboard').waitFor({ state: 'visible' });
      assert.match(await page.locator('#courseHubHeading').innerText(), /AZ-104/);
      const module = page.locator('[data-path-domain]').nth(1);
      const chosenDomain = await module.getAttribute('data-path-domain');
      await module.click();
      const panel=page.locator('.ui-course-hub__panel:not([hidden])');
      assert.equal(await page.locator('.ui-course-hub__topics').count(),0,'Course categories are no longer shown');
      const domainQuestions=await page.evaluate(domain=>window.AZ104_QUESTIONS.filter(q=>q.domain===domain).map(q=>q.id),chosenDomain);
      assert.equal(await panel.locator('[data-course-question-id]').count(),domainQuestions.length,'All questions of this theme are available');
      const directId=domainQuestions.at(-1),filter=panel.locator('input[type=search]');
      await filter.fill(directId);
      assert.equal(await panel.locator('[data-course-question-id]').count(),1);
      await filter.fill('no-question-matches-this');
      assert(await panel.locator('.ui-question-navigator__empty').isVisible());
      await filter.press('Escape');
      assert.equal(await panel.locator('[data-course-question-id]').count(),domainQuestions.length);
      const answersBefore=(await storedState(page)).answers;
      await panel.locator(`[data-course-question-id="${directId}"]`).click();
      assert.equal(await page.locator('#questionId').innerText(),directId);
      assert.equal((await storedState(page)).studySession.domain,chosenDomain);
      assert.deepEqual((await storedState(page)).answers,answersBefore,'Opening a question must preserve existing results');
      await page.locator('.rail-link[data-mode="dashboard"]').click();
      await page.locator('#dashboard').waitFor({state:'visible'});
      assert(await panel.isVisible(),'The opened theme is retained on return');
      await page.screenshot({ path: `test-results/v2-path-${theme}-${width}.png` });
      await page.locator('.ui-course-hub__panel:not([hidden]) .ui-button').click();
      assert.equal((await storedState(page)).studySession.domain, chosenDomain);
      const noteId = await page.locator('#questionId').innerText();
      await page.locator('#quickNote').fill('Note rapide V2 conservée');
      assert.equal((await storedState(page)).notes[noteId], 'Note rapide V2 conservée');
      await page.locator('.rail-link[data-mode="dashboard"]').click();
      await page.locator('#globalSearch').fill('T1-Q1');
      await page.locator('#globalSearch').press('Enter');
      assert.equal(await page.locator('#questionId').innerText(), 'T1-Q1');
      assert.equal((await storedState(page)).studySession.search, 'T1-Q1');
      await page.locator('#settingsButton').click();
      await page.locator('[data-settings-target="#dataSettings"]').click();
      assert(await page.locator('#dataSettings').isVisible());
      assert.equal(await page.locator('[data-settings-target="#dataSettings"]').getAttribute('aria-selected'), 'true');
      await page.locator('[data-settings-target="#trainingSettings"]').click();
      await page.locator('#settingsTrainingSelect').selectOption('az305');
      await page.locator('.rail-link[data-mode="dashboard"]').click();
      assert.match(await page.locator('#courseHubHeading').innerText(), /AZ-305/);
      assert.match(await page.locator('.ui-course-hub__coverage').innerText(), /domaines/);
      assert.equal(await page.evaluate(({ key, id }) => JSON.parse(localStorage.getItem(key)).states.az104.notes[id], { key: appKey, id: noteId }), 'Note rapide V2 conservée');
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
      assert.deepEqual(errors, [], 'Application errors');
      console.log(`Learning workflow OK: ${theme}, ${width}px`);
      await context.close();
    }
  }

  const legacyContext = await browser.newContext({ viewport: { width: 390, height: 900 } });
  const legacy = {
    activeTraining: 'az104', theme: 'dark', states: {
      az104: {
        answers: { 'T1-Q1': { done: true, correct: true, selected: [2], streak: 1, ts: 1000 } },
        drafts: { 'T1-Q2': { selected: [1] } }, lastId: 'T1-Q2',
        favorites: { 'T1-Q1': true }, notes: { 'T1-Q1': 'Note conservée' }, reports: [],
        examHistory: [{ percent: 80, correct: 8, total: 10, completedAt: 1000, domains: [] }],
        customImportedField: 'preserve-me',
      },
      az305: { answers: { sample: { correct: false } }, notes: { sample: 'Autre formation' } },
    },
  };
  await legacyContext.addInitScript(({ key, seed }) => {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(seed));
      localStorage.setItem(`${key}-onboarding-v1`, '1');
    }
  }, { key: appKey, seed: legacy });
  const legacyPage = await legacyContext.newPage();
  currentPage = legacyPage;
  legacyPage.setDefaultTimeout(8000);
  await legacyPage.goto(url, { waitUntil: 'domcontentloaded' });
  await legacyPage.locator('#dashboard').waitFor({ state: 'visible' });
  await legacyPage.locator('#startWeaknessButton').click();
  assert.equal(await legacyPage.locator('#questionId').innerText(), 'T1-Q2');
  let persisted = await storedState(legacyPage);
  for (const field of ['answers', 'drafts', 'notes', 'favorites', 'examHistory', 'customImportedField']) {
    assert.deepEqual(persisted[field], legacy.states.az104[field], `Legacy ${field} was changed`);
  }
  const otherTraining = await legacyPage.evaluate(key => JSON.parse(localStorage.getItem(key)).states.az305, appKey);
  assert.deepEqual(otherTraining, legacy.states.az305);

  await legacyPage.locator('.ui-domain-selector>button').click();
  const storageDomain = legacyPage.locator('.ui-domain-selector [role=option]').nth(2);
  const domain = await storageDomain.getAttribute('data-value');
  await storageDomain.click();
  const filteredId = await legacyPage.locator('#questionId').innerText();
  await legacyPage.locator('#globalSearch').fill(filteredId);
  await legacyPage.reload({ waitUntil: 'domcontentloaded' });
  await legacyPage.locator('#dashboard').waitFor({ state: 'visible' });
  await legacyPage.locator('#startWeaknessButton').click();
  persisted = await storedState(legacyPage);
  assert.equal(persisted.studySession.domain, domain);
  assert.equal(persisted.studySession.search, filteredId);
  assert.equal(await legacyPage.locator('#questionId').innerText(), filteredId);
  console.log('Legacy progression, other training and filtered session preserved across reload.');

  await legacyPage.locator('#globalSearch').fill('');
  await legacyPage.locator('#resetFilter').click();
  const multi = await legacyPage.evaluate(() => {
    const q = window.AZ104_QUESTIONS.find(q => q.multi && q.answerIndices.length && q.options.length > q.answerIndices.length);
    return { id: q.id, good: q.answerIndices[0], wrong: q.options.findIndex((_, i) => !q.answerIndices.includes(i)), count: q.answerIndices.length };
  });
  await legacyPage.locator('#questionNavigatorButton').click();
  await legacyPage.locator(`[data-jump-id="${multi.id}"]`).click();
  await legacyPage.locator(`#choices [data-choice="${multi.good}"]`).click();
  await legacyPage.locator(`#choices [data-choice="${multi.wrong}"]`).click();
  await legacyPage.locator('#mobileSubmitButton').click();
  assert(await legacyPage.locator('.ui-feedback-panel--error').isVisible());
  assert.equal(await legacyPage.locator('#choices .ui-answer-option.is-correct').count(), multi.count);
  assert.equal(await legacyPage.locator('#choices .ui-answer-option.is-incorrect').count(), 1);
  assert(await legacyPage.locator('#choices .ui-answer-option.is-incorrect .ui-icon--close').count());
  await legacyPage.locator('.rail-link[data-mode="exam"]').click();
  await legacyPage.locator('#startExamButton').click();
  await legacyPage.waitForFunction(()=>!!document.querySelector('#sessionClock').textContent);
  const examBefore = (await storedState(legacyPage)).exam;
  assert(examBefore.ids.length > 0);
  assert(!(await legacyPage.locator('#feedback').isVisible()), 'Exam reveals corrections');
  await legacyPage.reload({ waitUntil: 'domcontentloaded' });
  await legacyPage.locator('#startExamButton').click();
  await legacyPage.waitForFunction(()=>document.body.classList.contains('exam-focus')&&!document.querySelector('#examIntroductionBackdrop'));
  await legacyPage.locator('#questionCard').waitFor({ state: 'visible' });
  assert.deepEqual((await storedState(legacyPage)).exam.ids, examBefore.ids, 'Reload replaced the active exam');
  assert.equal((await storedState(legacyPage)).exam.start, examBefore.start, 'Reload restarted the exam timer');
  assert(!(await legacyPage.locator('#feedback').isVisible()));
  console.log('Mixed multiple-choice result states and active exam resumption verified.');
  await legacyContext.close();
} catch (error) {
  if (currentPage && !currentPage.isClosed()) {
    await currentPage.screenshot({ path: 'test-results/ux-failure.png' });
    console.error(await currentPage.locator('.app-shell-primary-nav').evaluate(el => ({
      nav: el.getBoundingClientRect().toJSON(),
      parent: el.parentElement.getBoundingClientRect().toJSON(),
      backdrop: getComputedStyle(el.parentElement).backdropFilter,
    })));
  }
  throw error;
} finally {
  await browser?.close();
  await server.close();
}
