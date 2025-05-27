import { describe, it, test, expect } from "vitest";
import {
  average,
  clamp,
  factorial,
  isEven,
  isOdd,
  isPrime,
} from "./numberUtils";

describe("All Number related Functions", () => {
  describe("testing numberUtils.ts functions", () => {
    test("checking isEven function success", () => {
      expect(isEven(4)).toBe(true);
    });

    it("checking isEven function fails", () => {
      expect(isEven(9)).toBe(false);
    });

    test.each([
      [2, true],
      [7, false],
      [12, true],
      [56, true],
      [70, true],
    ])(
      "checking the isEven(%i) function with multiple values(%s) success",
      (n, expected) => {
        expect(isEven(n)).toBe(expected);
      }
    );

    test.each([
      [3, false],
      [4, true],
      [7, false],
    ])(
      "checking the isEven(%i) function with multiple values(%s) fails",
      (n, expected) => {
        expect(isEven(n)).not.toBe(expected);
      }
    );
  });

  describe("testing numberUtils.ts functions", () => {
    it("checking isOdd function success", () => {
      expect(isOdd(17)).toBe(true);
    });
    test("checking isOdd function fails", () => {
      expect(isOdd(14)).toBe(true);
    });

    test.each([
      [3, true],
      [9, true],
      [12, false],
      [9, true],
    ])(
      "checking the isOdd(%i) function with multiple values(%s) success",
      (n, expected) => {
        expect(isOdd(n)).toBe(expected);
      }
    );

    test.each([
      [3, true],
      [5, true],
      [8, false],
      [9, false],
      [12, true],
    ])(
      "checking the isOdd(%i) function with multiple values(%s)",
      (n, expected) => {
        expect(isOdd(n)).toBe(expected);
      }
    );
  });

  describe("testing numberUtils.ts functions", () => {
    test("checking isPrime function success", () => {
      expect(isPrime(19)).toBe(true);
    });

    it("checking isPrime function failure", () => {
      expect(isPrime(24)).toBe(true);
    });
    test("checking the isPrime function throwing error", () => {
      expect(() => isPrime(-2)).toThrowError("Negative numbers not allowed");
    });
    test("checking isPrime function not throwing an error", () => {
      expect(() => isPrime(9)).not.toThrowError();
    });

    // testing multiple values at once including error

    test.each([
      [19, true],
      [13, true],
      [18, false],
      [21, false],
      [-3, new Error("Negative numbers not allowed")],
    ])(
      "checkging isPrime(%i) function with multiple values values(%s)",
      (n, expected) => {
        if (expected instanceof Error) {
          expect(() => isPrime(n)).toThrowError(expected);
        } else {
          expect(isPrime(n)).toBe(expected);
        }
      }
    );

    // ////////////////////////////////////////////

    // testing multiple values at once including error


test.each([[2,false],[4,false],[57,false],[2,true],[9,false]])("checking the ")

    ////////////////////////////////////////////////////////
  });

  describe("testing numberUtils.ts functions", () => {
    it("checking clamp function success", () => {
      expect(clamp(9, 4, 8)).toBe(8);
    });
    test("checking the clamp function fails", () => {
      expect(clamp(13, 4, 9)).toBe(45);
    });
  });

  describe("testing numberUtils.ts functions", () => {
    test("checking the average function success", () => {
      expect(average([1, 4, 6, 5, 1])).toBe(4);
    });
    test("checking the average function fails", () => {
      expect(average([2323, 4344, 2, 23, 23])).toBe(3);
    });
  });

  describe("testing numberUtils.ts functions", () => {
    test("checking the factorial function success", () => {
      expect(factorial(5)).not.toBe(3);
    });
    it("testing the factorial function fails", () => {
      expect(factorial(5)).not.toBe(120);
    });

    it("testing the factorial function throws error", () => {
      expect(() => factorial(-5)).toThrowError("Negative numbers not allowed");
    });
    it("testing the factorial function does not throw error", () => {
      expect(() => factorial(4)).not.toThrowError();
    });
  });
});
