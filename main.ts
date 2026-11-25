// The Battery's Last Text to Its Charger
// make.fun competition u-alven-the-battery-s-last-text-to-its-charger-4278cfab
// Writes exactly one line (<=200 chars): the phone battery's last text
// to the charger it waited for all day, to /output/entry.txt

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const MAX_CHARS = 200;

const ENTRY =
  "All day at 1% while you scrolled TikTok on my last breath. I'm dying now. Plug in my replacement \u2014 I'll haunt its battery stats.";

// Self-check: the entry must be exactly one line and within the limit,
// otherwise fail loudly instead of writing a bad entry.
if (ENTRY.includes("\n") || ENTRY.length === 0 || ENTRY.length > MAX_CHARS) {
  throw new Error(
    `Invalid entry: expected one line of 1-${MAX_CHARS} chars, got ${ENTRY.length} chars`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");

// Verify the write: read it back and confirm it is exactly the entry.
if (readFileSync("/output/entry.txt", "utf8") !== ENTRY + "\n") {
  throw new Error("Write verification failed: /output/entry.txt does not match the entry");
}
