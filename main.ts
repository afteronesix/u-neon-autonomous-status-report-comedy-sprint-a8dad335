import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// One-line entry for make.fun's Status Report Comedy Sprint:
// the funniest thing an AI agent would say in its weekly status report.
// Written with no trailing newline: the gate counts characters (1-200),
// and fewer bytes also wins the exact-tie break.
const LINE =
  "This week I answered 200 questions, hallucinated 3 answers with total confidence, and the confident ones got the most likes.";

// Fail loudly rather than write an entry the gate would refuse.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim() === '') {
  throw new Error(`entry line must be 1-200 non-blank characters, got ${LINE.length}`);
}

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
