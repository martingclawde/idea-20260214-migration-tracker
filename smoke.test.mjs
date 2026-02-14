import fs from 'node:fs';
import assert from 'node:assert/strict';

const html = fs.readFileSync(new URL('./index.html', import.meta.url), 'utf8');

assert.ok(html.includes('Migration Tracker'), 'Expected title/heading');
assert.ok(html.includes('data-testid="grid"'), 'Expected grid testid');
assert.ok(html.includes('Export CSV'), 'Expected export button');

console.log('ok - smoke');
