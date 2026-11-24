import { mkdirSync, writeFileSync } from 'node:fs';

const text = 'Soon you will delete one unused line and learn exactly what it was holding up.';

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', text, 'utf8');
