// Fails the build if any published file contains the string TODO.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = process.argv[2] || 'dist';
const hits = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(html|md|txt|json|xml)$/.test(name)) {
      readFileSync(p, 'utf8').split('\n').forEach((line, i) => {
        if (/TODO/.test(line)) hits.push(`${p}:${i + 1}: ${line.trim().slice(0, 100)}`);
      });
    }
  }
})(root);

if (hits.length) {
  console.error(`TODO check failed: ${hits.length} hit(s) in ${root}`);
  console.error(hits.join('\n'));
  process.exit(1);
}
console.log(`TODO check passed: no TODO strings in ${root}`);
