import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';
import { createServer } from 'vite';
import { chromium } from 'playwright';

// All saved data belongs to isolated test contexts, never the user's browser.
const key = 'azure-cert-trainer-2026-v3';
const server = await createServer({ server: { host: '127.0.0.1', port: 0 } });
const staticRoot = path.resolve('storybook-static');
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml' };
const storyServer = http.createServer(async (request, response) => {
  const file = path.resolve(staticRoot, `.${new URL(request.url, 'http://localhost').pathname}`);
  if (!file.startsWith(`${staticRoot}${path.sep}`)) { response.writeHead(403).end(); return; }
  try { response.setHeader('Content-Type', mime[path.extname(file)] || 'application/octet-stream'); response.end(await fs.readFile(file)); }
  catch { response.writeHead(404).end(); }
});
let browser;
try {
  await fs.mkdir('test-results', { recursive: true });
  await server.listen();
  await new Promise(resolve => storyServer.listen(0, '127.0.0.1', resolve));
  browser = await chromium.launch({ headless: true });
  for (const theme of ['light', 'dark']) for (const width of [390, 768, 1000, 1440]) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, colorScheme: theme });
    await context.addInitScript(({ key, theme }) => {
      localStorage.setItem(key, JSON.stringify({ activeTraining: 'az104', theme, states: {} }));
      localStorage.setItem(`${key}-onboarding-v1`, '1');
    }, { key, theme });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(server.resolvedUrls.local[0]);
    await page.locator('#startWeaknessButton').click();
    await page.locator('#questionCard').waitFor({ state: 'visible' });
    await page.evaluate(() => document.fonts.ready);
    if (theme === 'light' && width === 390) {
      assert(await page.evaluate(async () => {
        await navigator.serviceWorker.ready;
        return Boolean(await caches.match(new URL('./src/ui/integration/training-workspace.css', location.href)));
      }), 'PWA did not precache the new shared stylesheet');
    }
    assert.equal(await page.locator('.v2-study-aside > section:visible').count(), 2);
    assert(!(await page.locator('#v2ProgressPercent').isVisible()), 'Duplicate progress is visible');
    assert(await page.locator('#v2CoursePercent').isVisible());
    assert.equal(await page.locator('#shortcutHelp').innerText(), '1–4 choisir · Entrée valider');
    assert.match(await page.locator('#questionIndex').innerText(), /^Question 1 \/ 10/);
    assert.equal(await page.locator('#questionPrompt').evaluate(n => getComputedStyle(n).maxHeight), 'none');
    if (width > 920) {
      assert.equal(Math.round((await page.locator('.rail').boundingBox()).width), 200);
      assert.equal(await page.locator('.rail-link-label:visible').count(), 5, 'Sidebar labels must remain visible');
      if (width === 1440) assert.equal(Math.round((await page.locator('.v2-study-aside').boundingBox()).width), 256);
    } else {
      const question = await page.locator('#questionCard').boundingBox(), aside = await page.locator('.v2-study-aside').boundingBox();
      assert(aside.y >= question.y + question.height, 'Tablet/mobile tools must follow the question');
      assert(await page.locator('#mobileSubmitButton').isVisible());
    }
    await page.evaluate(() => scrollTo(0, 0));
    await page.screenshot({ path: `test-results/workspace-app-${theme}-${width}.png`, fullPage: true });
    await page.keyboard.press('3');
    const selected = page.locator('#choices .is-selected');
    assert.equal(await selected.count(), 1);
    const selectedBackground = await selected.evaluate(n => getComputedStyle(n).backgroundColor);
    assert.equal(await selected.evaluate(n => getComputedStyle(n).borderTopColor), await page.locator('#v2CourseProgress').evaluate(n => getComputedStyle(n).backgroundColor));
    // Existing shortcuts apply outside form controls; choosing a radio focuses it.
    await page.evaluate(() => document.activeElement.blur());
    await page.keyboard.press('Enter');
    await page.locator('#feedback').waitFor({ state: 'visible' });
    assert.equal(await page.evaluate(key => JSON.parse(localStorage.getItem(key)).states.az104.answers['T1-Q1'].correct, key), true);
    assert.notEqual(await page.locator('#choices .is-correct').evaluate(n => getComputedStyle(n).backgroundColor), selectedBackground, 'Success must override the selected state');
    assert.deepEqual(errors, []);
    const story = await context.newPage();
    story.on('pageerror', error => errors.push(error.message));
    const id = `pages-azure-trainer-v2--entrainement-${theme}`;
    await story.goto(`http://127.0.0.1:${storyServer.address().port}/iframe.html?id=${id}&viewMode=story&globals=theme:${theme}`);
    await story.locator('.ui-v2-question-workspace').waitFor({ state: 'visible' });
    await story.evaluate(() => document.fonts.ready);
    assert.equal(await story.locator('.ui-v2-aside-stack > section').count(), 2);
    assert(!(await story.locator('body').innerText()).includes('Mon avancement'));
    assert(await story.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'Story overflows horizontally');
    if (width <= 920) {
      const cta = await story.locator('.ui-question-card__submit').boundingBox();
      assert(cta && cta.y >= 0 && cta.y + cta.height < 831, 'Story CTA must remain accessible above mobile navigation');
    }
    await story.locator('.ui-answer-option').first().click();
    assert.equal(await story.locator('.ui-answer-option.is-selected').count(), 1, 'Story selection must update as a radio group');
    assert.equal(await story.locator('.ui-answer-option input:checked').count(), 1);
    await story.screenshot({ path: `test-results/workspace-story-${theme}-${width}.png`, fullPage: true, animations: 'disabled' });
    assert.deepEqual(errors, []);
    await context.close();
    console.log(`Training workspace + built Storybook OK: ${theme}, ${width}px`);
  }
} finally {
  await browser?.close();
  await server.close();
  await new Promise(resolve => storyServer.close(resolve));
}
