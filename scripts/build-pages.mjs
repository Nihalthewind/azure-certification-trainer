import fs from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

// Static application only. Storybook, tooling, documentation and Git stay private.
const output = path.resolve('dist-pages');
const files = ['index.html', 'atelier.css', 'atelier.js', 'questions.js', 'az305_questions.js', 'formations.js', 'importer.js', 'manifest.webmanifest', 'service-worker.js'];
const tracked = execFileSync('git', ['ls-files', '-z'], {encoding:'utf8'}).split('\0').filter(Boolean);
files.push(...tracked.filter(file => file.startsWith('assets/') || (file.startsWith('src/ui/') && /\.(css|js)$/.test(file) && !/\.stories\.js$/.test(file))));
const commitSHA = execFileSync('git', ['rev-parse', 'HEAD'], {encoding:'utf8'}).trim();
await fs.mkdir(output, {recursive:true});
// Clear only the known generated output, never application data or source files.
for (const entry of await fs.readdir(output)) await fs.rm(path.join(output, entry), {recursive:true, force:true});
for (const file of files) {
  const target = path.join(output, file);
  await fs.mkdir(path.dirname(target), {recursive:true});
  let content = await fs.readFile(file);
  if (file === 'service-worker.js') content = Buffer.from(content.toString().replace(/const CACHE='[^']+'/, `const CACHE='azure-trainer-${commitSHA}'`));
  await fs.writeFile(target, content);
}
await fs.writeFile(path.join(output, '.nojekyll'), '');
await fs.writeFile(path.join(output, 'version.json'), JSON.stringify({commitSHA, buildDate:new Date().toISOString()}, null, 2)+'\n');
console.log(`Pages application: ${files.length} files; commit ${commitSHA}`);
