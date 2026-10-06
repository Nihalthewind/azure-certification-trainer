import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import { createServer } from 'vite';
import { chromium } from 'playwright';

const key = 'azure-cert-trainer-2026-v3';
const server = await createServer({ server: { host: '127.0.0.1', port: 0 } });
const staticRoot = path.resolve('storybook-static');
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml' };
const stories = http.createServer(async (request, response) => {
  const file = path.resolve(staticRoot, `.${new URL(request.url, 'http://localhost').pathname}`);
  if (!file.startsWith(`${staticRoot}${path.sep}`)) { response.writeHead(403).end(); return; }
  try { response.setHeader('Content-Type', mime[path.extname(file)] || 'application/octet-stream'); response.end(await fs.readFile(file)); }
  catch { response.writeHead(404).end(); }
});
let browser;
try {
  await fs.mkdir('test-results', { recursive: true });
  await server.listen();await new Promise(resolve => stories.listen(0, '127.0.0.1', resolve));
  browser = await chromium.launch({ headless: true });
  for (const theme of ['light', 'dark']) for (const width of [390, 768, 1440]) {
    // Isolated contexts: no user browser or user localStorage is touched.
    const context = await browser.newContext({ viewport: { width, height: 1000 }, colorScheme: theme });
    await context.addInitScript(({ key, theme }) => {
      localStorage.setItem(key, JSON.stringify({ activeTraining: 'az104', theme, states: { az104: {
        answers: { 'T1-Q1': { done: true, correct: true, streak: 2 }, 'T1-Q2': { done: true, correct: false, streak: 0 } },
        notes: { 'T1-Q1': 'Note conservée' }, favorites: { 'T1-Q1': true },
      } } }));
      localStorage.setItem(`${key}-onboarding-v1`, '1');
    }, { key, theme });
    await context.route('https://translate.google.com/translate_a/element.js*', route => route.fulfill({ contentType: 'text/javascript', body: `window.google={translate:{TranslateElement:function(options,target){const select=document.createElement('select');select.className='goog-te-combo';for(const value of ['en','fr']){const option=document.createElement('option');option.value=value;select.append(option);}document.getElementById(target).append(select);}}};window.googleTranslateElementInit();` }));
    const page = await context.newPage(), errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(server.resolvedUrls.local[0]);await page.locator('#dashboard').waitFor({ state: 'visible' });
    await page.evaluate(() => document.fonts.ready);
    const before = await page.evaluate(key => JSON.parse(localStorage.getItem(key)).states.az104, key);
    assert.equal(await page.locator('#dashboardCards .dash-card').count(), 3);
    if (width >= 768) {
      const tops = await page.locator('#dashboardCards .dash-card').evaluateAll(nodes => nodes.map(n => Math.round(n.getBoundingClientRect().top)));
      assert(tops.every(top => top === tops[0]), 'Tablet/desktop summary must stay on one row');
    }
    assert.equal(await page.locator('#domainStats .mini-track').count(), 0);
    assert.equal(await page.locator('#dashboardDetails').getAttribute('open'), null);
    assert.equal(await page.getByRole('button', { name: 'Paramètres', exact: true }).count(), 1);
    assert(!(await page.locator('#mobileSettingsButton').isVisible()));
    assert(await page.locator('.v2-profile #languageToggle').isVisible());
    assert(await page.locator('.v2-profile__avatar').isVisible());
    assert.equal(await page.locator('.domain-stat-copy').first().evaluate(n => getComputedStyle(n).display), 'grid');
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
    await page.screenshot({ path: `test-results/account-app-dashboard-${theme}-${width}.png`, fullPage: true, animations: 'disabled' });
    await page.locator('#dashboardDetails > summary').click();
    assert(await page.locator('#favoritePreview').isVisible());
    await page.locator('#languageToggle').click();
    await page.waitForFunction(key => localStorage.getItem(`${key}-language`) === 'fr', key);
    assert.equal(await page.locator('#languageToggle').getAttribute('aria-pressed'), 'true');
    await page.locator('#languageToggle').click();
    await page.waitForFunction(key => localStorage.getItem(`${key}-language`) === 'en', key);
    await page.locator('#settingsButton').click();
    assert.equal(await page.locator('#settingsPage [role="tabpanel"]:visible').count(), 1);
    assert(await page.locator('#appearanceSettings').isVisible());
    await page.locator('#themeButton').click();
    assert.equal(await page.locator('html').getAttribute('data-theme'), theme === 'dark' ? 'light' : 'dark');
    await page.locator('#themeButton').click();
    await page.screenshot({ path: `test-results/account-app-settings-${theme}-${width}.png`, fullPage: true, animations: 'disabled' });
    await page.locator('[data-settings-target="#appearanceSettings"]').focus();
    await page.keyboard.press('ArrowRight');assert(await page.locator('#trainingSettings').isVisible());
    assert(await page.locator('#settingsTrainingSelect').isVisible());
    await page.keyboard.press('ArrowRight');assert(await page.locator('#dataSettings').isVisible());
    assert(await page.locator('#exportButton').isVisible());assert(await page.locator('#importProgressButton').isVisible());
    await page.keyboard.press('End');assert(await page.locator('#appSettings').isVisible());
    await page.keyboard.press('Home');assert(await page.locator('#appearanceSettings').isVisible());
    const after = await page.evaluate(key => JSON.parse(localStorage.getItem(key)).states.az104, key);
    for (const field of ['answers', 'notes', 'favorites', 'examHistory']) assert.deepEqual(after[field], before[field], `${field} was changed by presentation`);
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
    if (width === 390 && theme === 'light') assert(await page.evaluate(async () => {
      await navigator.serviceWorker.ready;
      return Boolean(await caches.match(new URL('./src/ui/integration/account-clarity.css', location.href))) && Boolean(await caches.match(new URL('./src/ui/patterns/settings-navigation/settings-navigation.js', location.href)));
    }), 'New presentation resources must remain available offline');
    const story = await context.newPage();story.on('pageerror', error => errors.push(error.message));
    for (const [name, kind] of [['accueil', 'dashboard'], ['parametres', 'settings']]) {
      await story.goto(`http://127.0.0.1:${stories.address().port}/iframe.html?id=pages-azure-trainer-v2--${name}-${theme}&viewMode=story&globals=theme:${theme}`);
      await story.locator(`.ui-v2-page--${kind}`).waitFor({ state: 'visible' });await story.evaluate(() => document.fonts.ready);
      assert.equal(await story.getByRole('button', { name: 'Paramètres', exact: true }).count(), 1);
      assert(await story.locator('.ui-app-shell__profile .language-toggle').isVisible());
      assert(await story.locator('.ui-app-shell__avatar').isVisible());
      assert(await story.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${name} story overflow`);
      if (kind === 'settings') {
        assert.equal(await story.locator('[role="tabpanel"]:visible').count(), 1);
        const themeAction = story.locator('#storySettings-appearance .production-setting-row').first().getByRole('button');
        await themeAction.click();
        assert.equal(await story.locator('html').getAttribute('data-theme'), theme === 'dark' ? 'light' : 'dark');
        await themeAction.click();
        await story.getByRole('tab', { name: 'Données', exact: true }).click();assert(await story.locator('#storySettings-data').isVisible());
        await story.getByRole('tab', { name: 'Apparence', exact: true }).click();
      }
      await story.screenshot({ path: `test-results/account-story-${kind}-${theme}-${width}.png`, fullPage: true, animations: 'disabled' });
    }
    assert.deepEqual(errors, []);console.log(`Account clarity OK: ${theme}, ${width}px`);await context.close();
  }
} finally {
  await browser?.close();await server.close();await new Promise(resolve => stories.close(resolve));
}
