import { describe, it, expect, test, vi } from "vitest";
import { callTwice, greet, greetUser, repeat } from "./mockFunction";

///////////////////////////////////////////////////////////////////////////////////////////////

describe("greetUser", () => {
  test("calls logger with a greeting message", () => {
    const mockLogger = vi.fn<(msg: string) => void>();

    greetUser("Alice", mockLogger);

    expect(mockLogger).toHaveBeenCalled();
    expect(mockLogger).toHaveBeenCalledWith("Hello, Alice");
  });
});

//////////////////////////////////////////////////////////////////////////////////////////////

describe("callTwice", () => {
  it("calls function twice", () => {
    const mockFn = vi.fn<() => void>();

    callTwice(mockFn);

    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledWith();
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

describe("repeat", () => {
  test("calls funtion 'times' times", () => {
    const mockFn = vi.fn<() => void>();

    repeat(mockFn, 9);

    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(9);
  });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

describe("greet", () => {
  test("calls callback with correct message", () => {
    const mockCallback = vi.fn<(msg: string) => void>();

    greet(mockCallback);
    expect(mockCallback).toHaveBeenCalledWith("Hi");
  });
});
