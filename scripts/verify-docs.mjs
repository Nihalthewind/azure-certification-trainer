import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
const entries = [
  "README.md",
  "CONTRIBUTING.md",
  "AGENTS.md",
  "figma/README.md",
  "docs/product.md",
  "docs/architecture.md",
  "docs/design-system.md",
  "docs/source-content-audit.md",
  "src/ui/patterns/document-reader/README.md",
  "docs/deployment.md",
  "docs/roadmap.md",
  "docs/branching.md",
  "docs/archive/README.md",
  ...(await fs.readdir("docs/decisions"))
    .filter((n) => n.endsWith(".md"))
    .map((n) => "docs/decisions/" + n),
];
const pkg = JSON.parse(await fs.readFile("package.json", "utf8"));
const pageCode = await fs.readFile("src/ui/pages/trainer-pages/trainer-pages.js", "utf8");
assert(pageCode.includes("v" + pkg.version), "Settings fixture version must match package.json");
let links = 0;
for (const file of entries) {
  const source = (await fs.readFile(file, "utf8")).replace(
    /```[\s\S]*?```/g,
    "",
  );
  for (const match of source.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)) {
    const href = match[1].replace(/^<|>$/g, "").split(" ")[0];
    if (/^(https?:|mailto:|#)/.test(href)) continue;
    const target = path.resolve(
      path.dirname(file),
      decodeURIComponent(href.split("#")[0]),
    );
    await fs
      .access(target)
      .catch(() => assert.fail(file + ": missing " + href));
    links++;
  }
  for (const match of source.matchAll(/npm run ([a-z][a-z0-9:-]*)/g))
    assert(pkg.scripts[match[1]], file + ": unknown npm script " + match[1]);
}
const project = JSON.parse(await fs.readFile("figma/project.json", "utf8"));
assert.equal(project.appVersion, pkg.version);
assert.equal(project.branch, "storybook");
assert(project.pages.startHere, "Figma Start Here must be mapped");
for (const file of project.source.files)
  await fs
    .access(file)
    .catch(() => assert.fail("Figma source missing: " + file));
const fingerprint = createHash("sha256");
for (const file of project.source.files) fingerprint.update(file + "\0" + (await fs.readFile(file, "utf8")).replace(/\r\n/g, "\n") + "\0");
assert.equal(project.source.codeSha256, fingerprint.digest("hex"), "Figma source fingerprint is stale");
const index = JSON.parse(
  await fs.readFile("storybook-static/index.json", "utf8"),
);
const titles = new Set(Object.values(index.entries).map((n) => n.title));
for (const title of [
  "Components/Button",
  "Components/DomainSelector",
  "Patterns/Introduction",
  "Patterns/CourseHub",
  "Pages/Accueil",
  "Pages/Entraînement",
  "Pages/Examen blanc",
  "Pages/Révisions",
  "Pages/Paramètres",
])
  assert(titles.has(title), "Missing story group " + title);
for (const mapping of project.mappings) {
  await fs.access(mapping.code);
  assert(
    titles.has(mapping.storybook),
    "Mapping has no story: " + mapping.storybook,
  );
}
console.log(
  "Handoff documentation OK: " +
    entries.length +
    " guides, " +
    links +
    " local links, npm scripts, Figma registry and Storybook mappings.",
);
