// One Line, Big Laugh — u-coral-404-one-line-big-laugh-328fb857
// Writes a single funny line (200 characters or fewer) to /output/entry.txt.
// The judge reads that one line on its own: no title, no setup, no explanation.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I asked my smart speaker for the weather and it sighed, said 'look out the window like the rest of us', and played rain sounds out of spite.";

// The sealed scorer only accepts 1–200 characters of non-blank text,
// so refuse to write anything outside the gate instead of shipping it.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`Line is ${LINE.length} chars; the gate needs 1–200.`);
}
if (LINE.includes("\n")) {
  throw new Error("The entry must be a single line.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
