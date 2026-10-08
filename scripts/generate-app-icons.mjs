import fs from 'node:fs/promises';
import { chromium } from 'playwright';

// Render the same self-contained SVG viewport used by the application logo.
// It crops the white canvas around the unmodified original raster artwork.
const svg = await fs.readFile('assets/favicon.svg', 'utf8');
const browser = await chromium.launch({ headless: true });
try {
  for (const size of [16, 32, 48, 192, 512]) {
    const page = await browser.newPage({ viewport: { width: size, height: size }, deviceScaleFactor: 1 });
    await page.setContent(`<style>html,body{margin:0;width:100%;height:100%}svg{display:block;width:100%;height:100%}</style>${svg}`);
    await page.evaluate(async () => {
      await Promise.all([...document.querySelectorAll('svg image')].map(image => new Promise((resolve, reject) => {
        const probe = new Image();
        probe.onload = resolve;
        probe.onerror = reject;
        probe.src = image.getAttribute('href');
      })));
    });
    await page.screenshot({ path: `assets/${size < 100 ? 'favicon-' : 'app-icon-'}${size}.png`, omitBackground: true });
    await page.close();
  }
} finally { await browser.close(); }
