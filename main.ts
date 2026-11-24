import { mkdirSync, writeFileSync } from "node:fs";

// One line, written to the file the grader reads.
const roast =
  "My agent burned 4,000 tokens choosing between data2 and data_final. It chose data3.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
