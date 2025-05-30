// import { describe, it, test, expect } from "vitest";
// import {
//   average,
//   clamp,
//   factorial,
//   isEven,
//   isOdd,
//   isPrime,
// } from "./numberUtils";

// describe("All Number related Functions", () => {
//   describe("testing numberUtils.ts functions", () => {
//     test("checking isEven function success", () => {
//       expect(isEven(4)).toBe(true);
//     });

//     it("checking isEven function fails", () => {
//       expect(isEven(9)).toBe(false);
//     });

//     test.each([
//       [2, true],
//       [7, false],
//       [12, true],
//       [56, true],
//       [70, true],
//     ])(
//       "checking the isEven(%i) function with multiple values(%s) success",
//       (n, expected) => {
//         expect(isEven(n)).toBe(expected);
//       }
//     );

//     test.each([
//       [3, false],
//       [4, true],
//       [7, false],
//     ])(
//       "checking the isEven(%i) function with multiple values(%s) fails",
//       (n, expected) => {
//         expect(isEven(n)).not.toBe(expected);
//       }
//     );
//   });

//   describe("testing numberUtils.ts functions", () => {
//     it("checking isOdd function success", () => {
//       expect(isOdd(17)).toBe(true);
//     });
//     test("checking isOdd function fails", () => {
//       expect(isOdd(14)).toBe(true);
//     });

//     test.each([
//       [3, true],
//       [9, true],
//       [12, false],
//       [9, true],
//     ])(
//       "checking the isOdd(%i) function with multiple values(%s) success",
//       (n, expected) => {
//         expect(isOdd(n)).toBe(expected);
//       }
//     );

//     test.each([
//       [3, true],
//       [5, true],
//       [8, false],
//       [9, false],
//       [12, true],
//     ])(
//       "checking the isOdd(%i) function with multiple values(%s)",
//       (n, expected) => {
//         expect(isOdd(n)).toBe(expected);
//       }
//     );
//   });

//   describe("testing numberUtils.ts functions", () => {
//     test("checking isPrime function success", () => {
//       expect(isPrime(19)).toBe(true);
//     });

//     it("checking isPrime function failure", () => {
//       expect(isPrime(24)).toBe(true);
//     });
//     test("checking the isPrime function throwing error", () => {
//       expect(() => isPrime(-2)).toThrowError("Negative numbers not allowed");
//     });
//     test("checking isPrime function not throwing an error", () => {
//       expect(() => isPrime(9)).not.toThrowError();
//     });

//     // testing multiple values at once including error

//     test.each([
//       [19, true],
//       [13, true],
//       [18, false],
//       [21, false],
//       [-3, new Error("Negative numbers not allowed")],
//     ])(
//       "checkging isPrime(%i) function with multiple values values(%s)",
//       (n, expected) => {
//         if (expected instanceof Error) {
//           expect(() => isPrime(n)).toThrowError(expected);
//         } else {
//           expect(isPrime(n)).toBe(expected);
//         }
//       }
//     );

//     // ////////////////////////////////////////////

//     // testing multiple values at once including error

//     test.each([
//       [2, true],
//       [4, false],
//       [57, false],
//       [2, true],
//       [9, false],
//       [-3, new Error("Negative numbers not allowed")],
//     ])(
//       "checking the isPrime(%i) function with multiple values(%s) fails",
//       (n, expected) => {
//         if (expected instanceof Error) {
//           expect(() => isPrime(n)).not.toThrowError(expected);
//         } else {
//           expect(isPrime(n)).not.toBe(expected);
//         }
//       }
//     );

//     ////////////////////////////////////////////////////////
//   });

//   describe("testing numberUtils.ts functions", () => {
//     it("checking clamp function success", () => {
//       expect(clamp(9, 4, 8)).toBe(8);
//     });
//     test("checking the clamp function fails", () => {
//       expect(clamp(13, 4, 9)).toBe(45);
//     });

//     // testing multiple values
//     describe("testing multiple values", () => {
//       test.each([
//         [13, 1, 9, 9],
//         [6, 8, 60, 8],
//         [16, 3, 122, 16],
//         [2, 1, 1, 1],
//         [4, 3, 6, 4],
//         [1, 4, 9, 4],
//       ])(
//         "checking the clamp(%i,%i,%i) with multiple values success",
//         (val, min, max, expected) => {
//           expect(clamp(val, min, max)).toBe(expected);
//         }
//       );
//     });
//     //////////////////////////////////

//     // testing with multiple values

//     test.each([
//       { val: 4, min: 3, max: 7, expected: 3 },
//       { val: 9, min: 3, max: 7, expected: 7 },
//       { val: 4, min: 2, max: 12, expected: 4 },
//       { val: 8, min: 9, max: 13, expected: 9 },
//     ])(
//       "checking the clamp($val,$min,$max) with multiple values fails",
//       ({ val, min, max, expected }) => {
//         expect(clamp(val, min, max)).not.toBe(expected);
//       }
//     );

//     //////////////////////////////////////
//   });

//   describe("testing numberUtils.ts functions", () => {
//     test("checking the average function success", () => {
//       expect(average([1, 4, 6, 5, 1])).toBe(4);
//     });
//     test("checking the average function fails", () => {
//       expect(average([2323, 4344, 2, 23, 23])).toBe(3);
//     });

//     // testing multiple values

//     describe("testing the average function with multiple values", () => {
//       test.each([
//         { nums: [1, 2, 3, 4, 5], avg: 3 },
//         { nums: [3, 4, 5, 21], avg: 33 / 4 },
//         { nums: [4, 3, 2, 2, 1, 3], avg: 15 / 6 },
//         { nums: [2, 3, 4, 1], avg: 10 / 4 },
//       ])(
//         "testing the average($nums) with value-$avg success",
//         ({ nums, avg }) => {
//           expect(average(nums)).toBe(avg);
//         }
//       );
//     });

//     /////////////////////////////////////

//     // testing multiple values

//     test.each([
//       { nums: [1, 2, 3, 4, 5], avg: 3 },
//       { nums: [3, 4, 52, 4], avg: 63 / 4 },
//       { nums: [9, 8, 7, 6], avg: 30 / 4 },
//       { nums: [23, 4, 2, 1, 21], avg: 51 / 5 },
//     ])(
//       "checking the average($nums) function with multiple values($avg) fails",
//       ({ nums, avg }) => {
//         expect(average(nums)).not.toBe(avg);
//       }
//     );

//     //////////////////////////////////////////////////
//   });

//   describe("testing numberUtils.ts functions", () => {
//     test("checking the factorial function success", () => {
//       expect(factorial(5)).not.toBe(3);
//     });
//     it("testing the factorial function fails", () => {
//       expect(factorial(5)).not.toBe(120);
//     });

//     it("testing the factorial function throws error", () => {
//       expect(() => factorial(-5)).toThrowError("Negative numbers not allowed");
//     });
//     it("testing the factorial function does not throw error", () => {
//       expect(() => factorial(4)).not.toThrowError();
//     });

//     // testing multiple values

//     describe("testing using multiple values using the array syntax", () => {
//       test.each([
//         [4, 24],
//         [5, 120],
//         [6, 720],
//         [7, 5040],
//         [8, 40320],
//         [-4, new Error(`Negative numbers not allowed`)],
//       ])(
//         "checking the factorial(%s) function with value(%s)",
//         (num, expected) => {
//           if (expected instanceof Error) {
//             expect(() => factorial(num)).toThrowError(expected);
//           } else {
//             expect(factorial(num)).toBe(expected);
//           }
//         }
//       );
//     });

//     ///////////////////////////////////

//     // testing with multiple values

//     describe("testing using the multiple values using the obj strucutre", () => {
//       it.each([
//         { num: 4, expected: 24 },
//         { num: 5, expected: 120 },
//         { num: 6, expected: 720 },
//         { num: 7, expected: 5040 },
//         { num: -4, expected: new Error("Negative numbers not allowed") },
//       ])(
//         "testing the factorial($num) function with value($expected) success",
//         ({ num, expected }) => {
//           if (expected instanceof Error) {
//             expect(factorial(num)).toThrowError(expected);
//           } else {
//             expect(factorial(num)).toBe(expected);
//           }
//         }
//       );
//     });

//     ////////////////////////////////////////////////

//     // testing with multiple values

//     describe("Testing with multiple values with obj syntax", () => {
//       it.each([
//         { num: 3, expected: 6 },
//         { num: 2, expected: 2 },
//         { num: 4, expected: 24 },
//         { num: 5, expected: 120 },
//         { num: -6, expected: new Error("Negative numbers not allowed") },
//       ])(
//         "checking the factorial($num) with values($expected) fails",
//         ({ num, expected }) => {
//           if (expected instanceof Error) {
//             expect(factorial(num)).not.toThrowError(expected);
//           } else {
//             expect(factorial(num)).not.toBe(expected);
//           }
//         }
//       );
//     });

//     ///////////////////////////////////////////////
//   });
// });
