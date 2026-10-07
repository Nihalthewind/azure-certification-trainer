import assert from "node:assert/strict";
import fs from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { createServer } from "vite";
import { chromium } from "playwright";
const key = "azure-cert-trainer-2026-v3",
  introKey = key + "-onboarding-v1";
const app = await createServer({ server: { host: "127.0.0.1", port: 0 } });
const staticRoot = path.resolve("storybook-static"),
  mime = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".svg": "image/svg+xml",
  };
const stories = http.createServer(async (req, res) => {
  const file = path.resolve(
    staticRoot,
    "." + new URL(req.url, "http://localhost").pathname,
  );
  if (!file.startsWith(staticRoot + path.sep)) {
    res.writeHead(403).end();
    return;
  }
  try {
    res.setHeader(
      "Content-Type",
      mime[path.extname(file)] || "application/octet-stream",
    );
    res.end(await fs.readFile(file));
  } catch {
    res.writeHead(404).end();
  }
});
let browser;
try {
  await fs.mkdir("test-results", { recursive: true });
  await app.listen();
  await new Promise((resolve) => stories.listen(0, "127.0.0.1", resolve));
  browser = await chromium.launch({ headless: true });
  const url = app.resolvedUrls.local[0],
    storyUrl = "http://127.0.0.1:" + stories.address().port;
  for (const theme of ["light", "dark"])
    for (const width of [390, 768, 1440]) {
      const context = await browser.newContext({
        viewport: { width, height: 1000 },
        colorScheme: theme,
      });
      await context.addInitScript(
        ({ key, introKey, theme }) => {
          if (!localStorage.getItem(key))
            localStorage.setItem(
              key,
              JSON.stringify({
                activeTraining: "az104",
                theme,
                states: {
                  az104: {
                    answers: { "T1-Q2": { done: true, correct: false } },
                    notes: { "T1-Q1": "V3 conservée" },
                    favorites: { "T1-Q1": true },
                    reports: [{ questionId: "T2-Q1", resolved: false }],
                    examHistory: [
                      {
                        completedAt: 1,
                        percent: 75,
                        correct: 36,
                        total: 48,
                        flaggedIds: ["T4-Q1"],
                      },
                    ],
                  },
                  az305: { notes: { keep: "Autre formation intacte" } },
                },
              }),
            );
          localStorage.setItem(introKey, "1");
        },
        { key, introKey, theme },
      );
      const page = await context.newPage(),
        errors = [];
      page.on("pageerror", (e) => errors.push(e.message));
      await page.goto(url);
      await page.locator(".ui-course-hub").waitFor();
      await page.evaluate(() => document.fonts.ready);
      assert.equal(
        await page.locator(".app-shell-primary-nav .rail-link:visible").count(),
        4,
      );
      assert.equal(await page.locator("[data-mode=path]:visible").count(), 0);
      const labels = await page.evaluate(() =>
        window.TRAINING_CATALOG.find((t) => t.id === "az104").domains.map(
          (d) => d[1],
        ),
      );
      assert.deepEqual(
        await page.locator(".ui-course-hub__module strong").allTextContents(),
        labels,
      );
      assert.equal(await page.locator("#dashboardCards:visible").count(), 0);
      assert.equal(await page.locator(".ui-course-hub__coverage").count(), 1);
      await page.locator(".ui-course-hub__module").nth(1).click();
      assert.equal(
        await page.locator('.ui-course-hub__module[aria-expanded="true"] strong').innerText(),
        labels[1],
      );
      assert((await page.locator(".ui-course-hub__topics li").count()) > 0);
      await page.screenshot({
        path: `test-results/v3-home-${theme}-${width}.png`,
        fullPage: true,
        animations: "disabled",
      });
      await page.locator('.ui-course-hub__panel:not([hidden]) .ui-button').click();
      assert.match(
        await page.locator(".ui-domain-selector>button").innerText(),
        new RegExp(labels[1]),
      );
      const trigger = page.locator(".ui-domain-selector>button");
      await trigger.focus();
      await page.keyboard.press("ArrowDown");
      assert.equal(await trigger.getAttribute("aria-expanded"), "true");
      await page.keyboard.press("Home");
      await page.keyboard.press("Enter");
      assert.match(await trigger.innerText(), /Tous les domaines/);
      await trigger.click();
      await page.keyboard.press("End");
      await page.keyboard.press("Enter");
      assert.match(await trigger.innerText(), new RegExp(labels.at(-1)));
      await trigger.click();
      await page.keyboard.press("Escape");
      assert.equal(await trigger.getAttribute("aria-expanded"), "false");
      assert(await trigger.evaluate((n) => document.activeElement === n));
      await trigger.click();
      await page.locator("#workTitle").click();
      assert.equal(await trigger.getAttribute("aria-expanded"), "false");
      await trigger.click();
      await page.keyboard.press("Home");
      await page.keyboard.press("ArrowDown");
      await page.keyboard.press("Enter");
      assert.match(await trigger.innerText(), new RegExp(labels[0]));
      await page.screenshot({
        path: `test-results/v3-training-${theme}-${width}.png`,
        fullPage: true,
        animations: "disabled",
      });
      await page.locator("[data-mode=mistakes]").first().click();
      for (const [filter, id] of [
        ["errors", "T1-Q2"],
        ["favorites", "T1-Q1"],
        ["flagged", "T4-Q1"],
      ]) {
        await page.locator("[data-review-filter=" + filter + "]").click();
        assert.equal(await page.locator('[data-mistake-q]').count(),0,'Review landing contains no question catalogue');
        assert.match(await page.locator('[data-review-count]').innerText(),filter==='flagged'?/^2 /:/^1 /);
        await page.locator('#startMistakesSessionButton').click();
        if(!(await page.locator('#questionNavigatorButton').isVisible()))await page.locator('#filterToggleButton').click();
        await page.locator('#questionNavigatorButton').click();
        assert(await page.locator('[data-jump-id="'+id+'"]').isVisible(),'Selected source loads its actual question IDs');
        await page.locator('#modalClose').click();
        await page.locator('[data-mode=mistakes]').first().click();
      }
      assert.equal(await page.locator("#mistakesStats:visible").count(), 0);
      await page.screenshot({
        path: `test-results/v3-reviews-${theme}-${width}.png`,
        fullPage: true,
        animations: "disabled",
      });
      await page.locator("[data-mode=exam]").first().click();
      assert.match(
        await page.locator('.ui-exam-introduction__configuration').innerText(),
        /48 questions · 100 minutes/,
      );
      await page.screenshot({
        path: `test-results/v3-exam-${theme}-${width}.png`,
        fullPage: true,
        animations: "disabled",
      });
      await page.locator('.ui-exam-introduction .ui-button').last().click();
      await page.locator("#settingsButton").click();
      assert(await page.locator("#appearanceSettings").isVisible());
      await page.screenshot({
        path: `test-results/v3-settings-${theme}-${width}.png`,
        fullPage: true,
        animations: "disabled",
      });
      await page.evaluate(() => (location.hash = "parcours"));
      await page.locator("#dashboard").waitFor({ state: "visible" });
      assert.equal(await page.locator("#pathPage:visible").count(), 0);
      const stored = await page.evaluate(
        (key) => JSON.parse(localStorage.getItem(key)),
        key,
      );
      assert.equal(stored.states.az104.notes["T1-Q1"], "V3 conservée");
      assert.equal(stored.states.az104.favorites["T1-Q1"], true);
      assert.equal(stored.states.az305.notes.keep, "Autre formation intacte");
      assert(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth + 1,
        ),
      );
      const story = await context.newPage();
      story.on("pageerror", (e) => errors.push(e.message));
      for (const name of [
        "accueil",
        "entrainement",
        "examen",
        "revisions",
        "parametres",
      ]) {
        await story.goto(
          storyUrl +
            "/iframe.html?id=pages-" +
            ({ examen: "examen-blanc" }[name] || name) +
            "--" +
            name +
            "-" +
            theme +
            "&viewMode=story&globals=theme:" +
            theme,
        );
        await story.locator('.ui-app-shell__slot>.ui-v2-page').waitFor();
        if (width === 1440) {
          assert.equal(
            await story
              .locator(".ui-app-shell__nav .ui-navigation-item__label:visible")
              .count(),
            4,
          );
          assert(
            (await story
              .locator(".ui-app-shell__nav")
              .evaluate(
                (n) =>
                  getComputedStyle(n).gridTemplateColumns.split(" ").length,
              )) === 1,
            "Desktop navigation must be a column",
          );
        }
        await story.evaluate(() => document.fonts.ready);
        assert(
          await story.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth + 1,
          ),
          name + " overflow",
        );
        await story.screenshot({
          path: `test-results/v3-story-${name}-${theme}-${width}.png`,
          fullPage: true,
          animations: "disabled",
        });
      }
      assert.deepEqual(errors, []);
      console.log("V3 matrix OK:", theme, width);
      await context.close();
    }
  for (const scenario of [
    "browser",
    "available",
    "dismissed",
    "failure",
    "installed",
    "ios",
  ]) {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
    });
    await context.addInitScript(
      ({ scenario, key }) => {
        localStorage.setItem(
          key,
          JSON.stringify({
            activeTraining: "az104",
            theme: "light",
            states: {
              az104: {
                notes: { "T1-Q1": "Intro préservée" },
                favorites: { "T1-Q1": true },
              },
            },
          }),
        );
        if (scenario === "installed")
          Object.defineProperty(navigator, "standalone", { value: true });
        if (scenario === "ios")
          Object.defineProperty(navigator, "userAgent", {
            value: "iPhone Safari",
          });
      },
      { scenario, key },
    );
    const page = await context.newPage();
    await page.goto(url);
    await page.locator(".ui-first-run").waitFor();
    assert.equal(await page.locator(".ui-first-run__panel").count(), 1);
    assert.equal(await page.locator(".ui-first-run__features li").count(), 3);
    assert(await page.locator("#app").evaluate((n) => n.inert));
    if (["available", "dismissed", "failure"].includes(scenario)) {
      await page.evaluate((scenario) => {
        const event = new Event("beforeinstallprompt");
        event.prompt = async () => {
          window.__promptCount = (window.__promptCount || 0) + 1;
          if (scenario === "failure") throw Error("Unavailable");
        };
        event.userChoice = Promise.resolve({
          outcome: scenario === "available" ? "accepted" : "dismissed",
        });
        window.dispatchEvent(event);
      }, scenario);
      assert.match(
        await page
          .locator(".ui-first-run__panel>.ui-button")
          .first()
          .innerText(),
        /Installer/,
      );
    } else
      assert.match(
        await page
          .locator(".ui-first-run__panel>.ui-button")
          .first()
          .innerText(),
        /Commencer/,
      );
    if (scenario === "ios")
      assert.match(
        await page.locator(".ui-first-run__help").innerText(),
        /Partager/,
      );
    await page.locator(".ui-first-run__panel>.ui-button").first().focus();
    await page.keyboard.press("Shift+Tab");
    assert.match(
      await page.evaluate(() => document.activeElement.innerText),
      /Continuer dans le navigateur/,
    );
    await page.keyboard.press("Tab");
    assert(
      await page
        .locator(".ui-first-run__panel>.ui-button")
        .first()
        .evaluate((n) => document.activeElement === n),
    );
    await page.screenshot({
      path: "test-results/v3-intro-" + scenario + ".png",
      fullPage: true,
      animations: "disabled",
    });
    await page.locator(".ui-first-run__panel>.ui-button").first().click();
    if (["dismissed", "failure"].includes(scenario)) {
      assert(await page.locator(".ui-first-run").isVisible());
      await page
        .getByRole("button", {
          name: "Continuer dans le navigateur",
          exact: true,
        })
        .click();
    }
    await page.locator(".ui-first-run").waitFor({ state: "detached" });
    assert(await page.locator("#dashboard").isVisible());
    assert(!(await page.locator("#app").evaluate((n) => n.inert)));
    assert.equal(
      await page.evaluate((k) => localStorage.getItem(k), introKey),
      "1",
    );
    if (["available", "dismissed", "failure"].includes(scenario))
      assert.equal(await page.evaluate(() => window.__promptCount), 1);
    await page.reload();
    await page.locator("#dashboard").waitFor();
    await page.waitForTimeout(180);
    assert.equal(await page.locator(".ui-first-run").count(), 0);
    assert.equal(
      await page.evaluate(
        (k) => JSON.parse(localStorage.getItem(k)).states.az104.notes["T1-Q1"],
        key,
      ),
      "Intro préservée",
    );
    console.log("V3 introduction OK:", scenario);
    await context.close();
  }
  const context = await browser.newContext();
  const page = await context.newPage();
  for (const name of [
    "closed",
    "open",
    "selected",
    "keyboard-focus",
    "long-list",
    "mobile",
    "dark",
  ]) {
    await page.goto(
      storyUrl +
        "/iframe.html?id=components-domainselector--" +
        name +
        "&viewMode=story",
    );
    await page.locator(".ui-domain-selector").waitFor();
    assert(await page.locator(".ui-domain-selector>button").isVisible());
  }
  for (const name of [
    "default",
    "install-available",
    "browser-only",
    "already-installed",
    "dark",
    "mobile",
    "ios",
  ]) {
    await page.goto(
      storyUrl +
        "/iframe.html?id=patterns-introduction--" +
        name +
        "&viewMode=story",
    );
    await page.locator(".ui-first-run__panel").waitFor();
    assert.equal(await page.locator(".ui-first-run__panel").count(), 1);
  }
  await context.close();
  // Exercise the actual new states, including the reusable patterns embedded in pages.
  const states = [
    ['pages-accueil', ['accueil-premier-usage','accueil-high-progress','unavailable','long-label','accueil-module-selected','activities-open','activities-keyboard','activities-english']],
    ['pages-revisions', ['empty','single','ready','errors','flagged','favorites','domain-filter']],
    ['pages-examen-blanc', ['examen-light','resume','loading','error','focus','finished']],
    ['components-feedbackpanel', ['correct','incorrect','long-explanation','complementary-points']],
  ];
  for (const theme of ['light','dark']) for (const width of [390,1440]) {
    const stateContext = await browser.newContext({viewport:{width,height:900}});
    const statePage = await stateContext.newPage();
    const errors=[]; statePage.on('pageerror',error=>errors.push(error.message));
    for (const [group,names] of states) for (const name of names) {
      const id=group+'--'+name;
      await statePage.goto(storyUrl+'/iframe.html?id='+id+'&viewMode=story&globals=theme:'+theme);
      await statePage.locator(group==='components-feedbackpanel'?'.ui-feedback-panel':'.ui-app-shell').waitFor();
      await statePage.evaluate(()=>document.fonts.ready);
      if (group==='pages-accueil') {
        assert.equal(await statePage.locator('.ui-course-hub__panel:visible').count(),name==='accueil-module-selected'?1:0);
        if(name==='activities-keyboard') {
          await statePage.locator('.ui-activities-menu [role=menuitem]:focus').waitFor();
          assert.match(await statePage.locator('.ui-activities-menu [role=menuitem]:focus').innerText(),/Historique/);
        }
        if(name==='activities-english') assert.match(await statePage.locator('.ui-activities-menu>button').innerText(),/My activities/);
      }
      if(group==='pages-revisions') {
        assert.equal(await statePage.locator('.ui-review-session__card').count(),1);
        assert.equal(await statePage.locator('[data-mistake-q]').count(),0);
        if(name==='empty') assert(await statePage.locator('.ui-review-session__card button').isDisabled());
      }
      if(group==='components-feedbackpanel') {
        assert.equal(await statePage.getByText('Pourquoi',{exact:true}).count(),1);
        if(name==='long-explanation') assert((await statePage.locator('.ui-feedback-panel').innerText()).includes('groupes de sécurité'));
        if(name==='complementary-points') assert((await statePage.locator('.ui-feedback-panel').innerText()).includes('Azure Policy'));
      }
      if(group==='pages-examen-blanc') {
        if(name==='focus') {
          assert(await statePage.locator('.ui-app-shell__topbar').isHidden());
          assert.equal(await statePage.locator('.ui-feedback-panel').count(),0);
          await statePage.getByRole('button',{name:'Terminer l’examen',exact:true}).click();
          assert(await statePage.locator('.ui-app-shell__topbar').isVisible());
        } else if(['examen-light','resume','loading','error'].includes(name)) {
          assert(await statePage.getByRole('dialog').isVisible());
          assert(await statePage.locator('.ui-app-shell__topbar').evaluate(n=>n.inert));
          if(name==='loading') assert(await statePage.getByRole('dialog').locator('button').first().isDisabled());
        }
      }
      assert(await statePage.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Story overflow: '+id+' '+width);
    }
    assert.deepEqual(errors,[]);
    console.log('Finalization stories OK:',theme,width,states.reduce((sum,[,names])=>sum+names.length,0),'states');
    await stateContext.close();
  }
} finally {
  await browser?.close();
  await app.close();
  await new Promise((resolve) => stories.close(resolve));
}
