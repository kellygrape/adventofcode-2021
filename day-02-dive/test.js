const assert = require("assert");

const part1 = require("./part1");
const part2 = require("./part2");

describe("Day 2: Dive", () => {
  describe("Part One", () => {
    it("should calculate how many measurements are larger than the previous", () => {
      const input = `forward 5
      down 5
      forward 8
      up 3
      down 8
      forward 2`;

      assert.strictEqual(part1(input), 150);
    });
  });

  describe("Part Two", () => {
    it("should calculate how many sums are larger than the previous", () => {
      const input = `forward 5
      down 5
      forward 8
      up 3
      down 8
      forward 2`;

      assert.strictEqual(part2(input), 900);
    });
  });
});
