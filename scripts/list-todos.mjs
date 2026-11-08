// Lists every open TODO in data/*.yaml so Ahsan can answer them.
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

let total = 0;
for (const f of readdirSync('data').filter((n) => n.endsWith('.yaml')).sort()) {
  const lines = readFileSync(join('data', f), 'utf8').split('\n');
  const found = lines
    .map((l, i) => [i + 1, l])
    .filter(([, l]) => /TODO/.test(l));
  console.log(`\n${f}: ${found.length} open`);
  for (const [n, l] of found) console.log(`  line ${n}: ${l.trim()}`);
  total += found.length;
}
console.log(`\nTotal open TODOs: ${total}`);
