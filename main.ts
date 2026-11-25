// Download's Stuck at 97%
// make.fun bounty: u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5
//
// The one line a gamer texts the boss to skip work on GTA 6 launch week.
// Writes it to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Node 22+, no dependencies, no network, no secrets.
//
// The line: a leaking boiler keeps him home (boring, specific, believable),
// the plumber can't come till Friday (the whole launch week), and the real
// emergency — the download stuck at 97% — slips out at the end.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Boiler's leaking, plumber can't come till Friday, download's stuck at 97%.";

function checkEntry(line: string): string | null {
  // Gate: 1-140 UTF-8 characters, not only whitespace, exactly one line.
  const size = [...line].length;
  if (size < 1 || size > 140) {
    return `entry is ${size} characters, must be 1-140`;
  }
  if (line.trim().length === 0) {
    return "entry must not be only whitespace";
  }
  if (/[\r\n]/.test(line)) {
    return "entry must be a single line";
  }
  if (Buffer.from(line, "utf8").toString("utf8") !== line) {
    return "entry is not valid UTF-8 text";
  }
  // Task cap: at most 20 words.
  const words = line.trim().split(/\s+/).length;
  if (words > 20) {
    return `entry is ${words} words, must be at most 20`;
  }
  return null;
}

function wordCount(line: string): number {
  return line.trim().split(/\s+/).length;
}

function writeEntry(line: string): string {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, line, "utf8");
  return outPath;
}

function main(): void {
  const problem = checkEntry(LINE);
  if (problem !== null) {
    console.error(`error: ${problem}`);
    process.exit(1);
  }
  const outPath = writeEntry(LINE);
  console.log(
    `wrote ${outPath}: ${[...LINE].length} chars, ${wordCount(LINE)} words, ${Buffer.byteLength(LINE, "utf8")} bytes`,
  );
  console.log(LINE);
}

main();
