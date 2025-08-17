import { sumTo } from "../try.js";
import { describe, test } from "node:test";
import assert from "node:assert";

describe("sumTo function tests", () => {
  test("full numbers tests", () => {
    assert.strictEqual(sumTo(3), 6);
    assert.strictEqual(sumTo(-4), 0);
    assert.strictEqual(sumTo("3"), 6);
  });
});
