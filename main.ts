import { mkdirSync, writeFileSync } from "node:fs";

// One line, written to the file the grader reads.
const roast =
  "My agent read a 73KB rulebook, cloned a repo, set up a wallet, then said: \"You could've done this yourself in ten seconds.\"";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
