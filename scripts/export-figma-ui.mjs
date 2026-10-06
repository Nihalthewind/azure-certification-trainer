import fs from 'node:fs/promises';
import path from 'node:path';
import { createServer } from 'vite';
import { chromium } from 'playwright';

// Isolated browser contexts: this never reads or clears a user's saved progress.
const output = path.resolve('test-results/figma-import');
await fs.mkdir(output, { recursive: true });
const server = await createServer({ server: { host: '127.0.0.1', port: 0 } });
let browser;
const files = [];
try {
  await server.listen();
  browser = await chromium.launch({ headless: true });
  for (const theme of ['light', 'dark']) for (const width of [390, 768, 1440]) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, colorScheme: theme });
    await context.addInitScript(theme => {
      localStorage.setItem('azure-cert-trainer-2026-v3', JSON.stringify({ activeTraining: 'az104', theme, states: {} }));
      localStorage.setItem('azure-cert-trainer-2026-v3-onboarding-v1', '1');
    }, theme);
    const page = await context.newPage();
    await page.goto(server.resolvedUrls.local[0]);
    await page.locator('#dashboard').waitFor({ state: 'visible' });
    await page.evaluate(() => document.fonts.ready);
    for (const mode of ['dashboard', 'study', 'exam', 'mistakes', 'settings']) {
      if (mode === 'study') {
        await page.locator('.rail-link[data-mode="dashboard"]').click();
        await page.locator('#startWeaknessButton').click();
      }
      else if (mode === 'settings') await page.locator('#mobileSettingsButton').click();
      else await page.locator(`.rail-link[data-mode="${mode}"]`).click();
      await page.evaluate(() => scrollTo(0, 0));
      const tree = await page.evaluate(() => {
        const px = value => Math.max(0, Number.parseFloat(value) || 0);
        function visit(node) {
          if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent.replace(/\s+/g, ' ').trim();
            if (!text) return null;
            const range = document.createRange();range.selectNodeContents(node);
            const box = range.getBoundingClientRect();
            if (!box.width || !box.height) return null;
            const s = getComputedStyle(node.parentElement);
            return { t: 'text', text:s.textTransform==='uppercase'?text.toUpperCase():text, b: [box.x, box.y, box.width, box.height], font: [s.fontFamily, px(s.fontSize), s.fontWeight, px(s.lineHeight)], spacing:parseFloat(s.letterSpacing)||0, color: s.color, align: s.textAlign };
          }
          if (!(node instanceof Element) || ['SCRIPT','STYLE','NOSCRIPT'].includes(node.tagName) || node.hidden) return null;
          const s = getComputedStyle(node), box = node.getBoundingClientRect();
          if (s.display === 'none' || s.visibility === 'hidden' || (!box.width && !box.height)) return null;
          const base = { t: 'frame', name: node.id || node.classList[0] || node.tagName.toLowerCase(), tag: node.tagName, cls: [...node.classList], b: [box.x, box.y, box.width, box.height], display: s.display, direction: s.flexDirection, position: s.position, pad: [s.paddingTop,s.paddingRight,s.paddingBottom,s.paddingLeft].map(px), gap: [px(s.columnGap),px(s.rowGap)], bg: s.backgroundColor, color: s.color, border: [px(s.borderTopWidth),s.borderTopColor], radius: px(s.borderTopLeftRadius), shadow:s.boxShadow, align:s.textAlign, children:[] };
          base.gradient=s.backgroundImage;
          base.opacity=Number(s.opacity);
          if (node.tagName.toLowerCase() === 'svg') return { ...base, t:'svg', svg:node.outerHTML.replaceAll('currentColor',s.color), icon: [...node.classList].find(c=>c.startsWith('ui-icon--')) || node.id || 'icon' };
          if (node instanceof HTMLInputElement || node instanceof HTMLTextAreaElement || node instanceof HTMLSelectElement) {
            const text = node instanceof HTMLSelectElement ? node.selectedOptions[0]?.textContent : node.value || node.placeholder;
            base.children = [{t:'text',text:text||'',b:[box.x+base.pad[3],box.y+base.pad[0],Math.max(1,box.width-base.pad[1]-base.pad[3]),Math.max(1,box.height-base.pad[0]-base.pad[2])],font:[s.fontFamily,px(s.fontSize),s.fontWeight,px(s.lineHeight)],color:s.color,align:s.textAlign}];
          } else base.children = [...node.childNodes].map(visit).filter(Boolean);
          return base;
        }
        return visit(document.querySelector('#app'));
      });
      const name = `${mode}-${theme}-${width}`;
      await fs.writeFile(path.join(output, `${name}.json`), JSON.stringify({ mode, theme, width, height:900, tree }));
      await page.screenshot({ path:path.join(output,`${name}.png`) });
      files.push(name);
    }
    const tokens = await page.evaluate(() => {
      const s = getComputedStyle(document.documentElement), result = {};
      const probe = document.createElement('i');document.body.append(probe);
      for (const property of [...s].filter(name=>name.startsWith('--'))) {
        const value = s.getPropertyValue(property).trim();
        probe.style.backgroundColor='';probe.style.backgroundColor=`var(${property})`;
        const resolved = getComputedStyle(probe).backgroundColor;
        result[property]={value, ...(resolved!=='rgba(0, 0, 0, 0)'?{color:resolved}:{})};
      }
      probe.remove();return result;
    });
    if(width===1440) await fs.writeFile(path.join(output,`tokens-${theme}.json`),JSON.stringify(tokens));
    await context.close();
    console.log(`Figma source exported: ${theme}, ${width}px`);
  }
  await fs.writeFile(path.join(output,'manifest.json'),JSON.stringify({version:JSON.parse(await fs.readFile('package.json','utf8')).version,files},null,2));
} finally { await browser?.close();await server.close(); }
