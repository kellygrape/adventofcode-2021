const part1 = require("./part1");
const part2 = require("./part2.js");

/* Setup */
const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "./input.txt"), "utf8");
console.log(part1(input));
console.log(part2(input));
