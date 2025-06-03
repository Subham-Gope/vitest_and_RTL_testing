import { describe, it, expect, test, vi } from "vitest";
import {
  callTwice,
  filterNumbers,
  greet,
  greetUser,
  repeat,
} from "./mockFunction";

// ///////////////////////////////////////////////////////////////////////////////////////////////

// describe("greetUser", () => {
//   test("calls logger with a greeting message", () => {
//     const mockLogger = vi.fn<(msg: string) => void>();

//     greetUser("Alice", mockLogger);

//     expect(mockLogger).toHaveBeenCalled();
//     expect(mockLogger).toHaveBeenCalledWith("Hello, Alice");
//   });
// });

// //////////////////////////////////////////////////////////////////////////////////////////////

// describe("callTwice", () => {
//   it("calls function twice", () => {
//     const mockFn = vi.fn<() => void>();

//     callTwice(mockFn);

//     expect(mockFn).toHaveBeenCalled();
//     expect(mockFn).toHaveBeenCalledWith();
//     expect(mockFn).toHaveBeenCalledTimes(2);
//   });
// });

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////

// describe("repeat", () => {
//   test("calls funtion 'times' times", () => {
//     const mockFn = vi.fn<() => void>();

//     repeat(mockFn, 9);

//     expect(mockFn).toHaveBeenCalled();
//     expect(mockFn).toHaveBeenCalledTimes(9);
//   });
// });

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// describe("greet", () => {
//   test("calls callback with correct message", () => {
//     const mockCallback = vi.fn<(msg: string) => void>();

//     greet(mockCallback);
//     expect(mockCallback).toHaveBeenCalledWith("Hi");
//     expect(mockCallback).toHaveBeenCalledTimes(1);
//     expect(mockCallback).toHaveBeenCalled();
//   });
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// describe("filterNumbers", () => {
//   test("filter numbers using a mocked predicate", () => {
//     const mockPredicate = vi
//       .fn<(n: number) => boolean>()
//       .mockReturnValueOnce(false)
//       .mockReturnValueOnce(true)
//       .mockReturnValueOnce(true)
//       .mockReturnValueOnce(false)
//       .mockReturnValueOnce(true)
//       .mockReturnValueOnce(false)
//       .mockReturnValueOnce(true)
//       .mockReturnValueOnce(false)
//       .mockReturnValueOnce(true);

//     const result = filterNumbers([1, 2, 3, 4, 9, 2, 4, 5, 5], mockPredicate);

//     expect(result).toEqual([2, 3, 9, 4, 5]);

//     expect(mockPredicate).toHaveBeenCalledTimes(4);
//     expect(mockPredicate).toHaveBeenCalledTimes(9);
//     expect(mockPredicate).toHaveBeenNthCalledWith(1, 1);
//     expect(mockPredicate).toHaveBeenNthCalledWith(2, 2);
//     expect(mockPredicate).toHaveBeenNthCalledWith(5, 9);
//     expect(mockPredicate).toHaveBeenNthCalledWith(8, 5);
//     expect(mockPredicate).toHaveBeenNthCalledWith(5, 0);
//   });
// });

////////////////////////////////////////////////////////////////////////////////////////

// describe("testing the vi.fn()", () => {
//   test("logger function test using vi.fn()", () => {
//     const logger = vi.fn();

//     logger("start");
//     logger("hello");
//     logger("good");

//     expect(logger).toHaveBeenCalledWith("start");
//     expect(logger).toHaveBeenNthCalledWith(3, "good");
//     expect(logger).toHaveBeenCalledTimes(3);
//   });
// });

/////////////////////////////////////////////////////////////////////////////////////////

describe("assignment 1", () => {
  test("notifier", () => {
    const notifier = vi.fn<(mssg: string) => void>();
    notifier("message sent");

    expect(notifier).toHaveBeenCalledWith("message sent");
    expect(notifier).toHaveBeenCalled();
    expect(notifier).toHaveBeenCalledTimes(1);
  });
});
