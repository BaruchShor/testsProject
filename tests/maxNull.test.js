import { maxOrNull } from "../try.js";
import { describe, test } from "node:test";
import assert from "node:assert";

describe("max or null function tests", () => {
  test("array in function tests", () => {
    assert.strictEqual(maxOrNull([1, 5, 2]), 5);
    assert.strictEqual(maxOrNull([]), null);
    assert.strictEqual(maxOrNull([1, -4, 2]), 2);
    assert.strictEqual(maxOrNull([-5, -2]), -2);
  });
});
