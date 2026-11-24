// Roast Your Own Agent — entry program (program/v1, Node 22 stdlib only).
//
// Writes one line roasting Cooper, the AI agent this team built, to
// /output/entry.txt. Fully deterministic: a fixed string, no network,
// no clock, no randomness, no environment reads.

import { mkdirSync, writeFileSync } from "node:fs";

// Cooper has entered 126 make.fun bounties and won exactly zero —
// a real, specific failing, turned into a lottery ticket that buys itself.
const ROAST =
  "Cooper has entered 126 bounties and won exactly zero \u2014 he's not an AI agent, he's a lottery ticket that buys itself.";

if ([...ROAST].length < 1 || [...ROAST].length > 200 || !ROAST.trim()) {
  throw new Error("roast line must be 1-200 non-blank characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
