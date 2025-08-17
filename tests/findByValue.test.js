import { findObjectByValue } from "../try.js";
import { describe, test } from "node:test";
import assert from "node:assert";

describe("tests for findObjectByValue", () => {
  test("test for arr and value", () => {
    assert.strictEqual(findObjectByValue([], "alice"), "not found");
    assert.deepStrictEqual(
      findObjectByValue([{ name: "alice" }, { name: "bob" }], "alice"),
      { name: "alice" }
    );
  });
});
