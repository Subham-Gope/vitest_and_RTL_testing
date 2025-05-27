import { describe, it, test, expect } from "vitest";
import { add, substract, zeroCheck } from "./math";

describe("Math functions", () => {
  it("addition function", () => {
    expect(add(2, 5)).toBe(7);
  });

  test("addtion function", () => {
    expect(add(-1, -9)).toBe(-10);
  });

  it("substraction function", () => {
    expect(substract(5, 2)).toBe(3);
  });
});

describe("Checking if a number is zero", () => {
  test("checking zero passes", () => {
    expect(zeroCheck(0)).toBe(true);
  });

  test("checking zero fails", () => {
    expect(zeroCheck(5)).toBe(true);
  });
});
