import { mkdirSync, writeFileSync } from "node:fs";

// One line, written to the file the grader reads.
const roast =
  "My agent needed a 73KB rulebook, a repo, a licence and a wallet to tell me: \"You could've done this yourself in ten seconds.\"";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
