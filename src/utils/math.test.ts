// import { describe, it, test, expect } from "vitest";
// import { add, substract, zeroCheck } from "./math";

// // describe("Math functions", () => {
// //   it("addition function", () => {
// //     expect(add(2, 5)).toBe(7);
// //   });

// //   test("addtion function", () => {
// //     expect(add(-1, -9)).toBe(-10);
// //   });

// //   it("substraction function", () => {
// //     expect(substract(5, 2)).toBe(3);
// //   });
// // });

// // describe("Checking if a number is zero", () => {
// //   test("checking zero passes", () => {
// //     expect(zeroCheck(0)).toBe(true);
// //   });

// //   test("checking zero fails", () => {
// //     expect(zeroCheck(5)).toBe(true);
// //   });
// // });

// describe("checking the math functions", () => {
//   test.each([
//     { num1: 3, num2: 5, expected: 8 },
//     { num1: 6, num2: 9, expected: 15 },
//     { num1: 2, num2: 7, expected: 9 },
//     { num1: 4, num2: 5, expected: 9 },
//   ])(
//     "checking the add($num1, $num2) funtcion with multiple values($expected) success",
//     ({ num1, num2, expected }) => {
//       expect(add(num1, num2)).toBeGreaterThan(expected - 1);
//       expect(add(num1, num2)).toBeLessThan(expected + 1);
//     }
//   );
// });

// describe("checking the substract function", () => {
//   test.each([
//     [5, 4, 1],
//     [9, 10, -1],
//     [6, 2, 4],
//     [9, 5, 4],
//   ])(
//     "checking the add(%i,%i) function with values(%i) success",
//     (num1, num2, expected) => {
//       expect(substract(num1, num2)).toBeGreaterThanOrEqual(expected);
//       expect(substract(num1, num2)).toBeLessThanOrEqual(expected);
//       expect(substract(num1, num2)).toBeLessThan(expected);
//       expect(substract(num1, num2)).toBeLessThanOrEqual(expected);
//     }
//   );
// });
