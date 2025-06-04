import { describe, it, expect, test, vi, type Mock } from "vitest";
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

// describe("assignment 1", () => {
//   test("notifier", () => {
//     const notifier = vi.fn<(mssg: string) => void>();
//     notifier("message sent");
//     notifier("hello");
//     notifier("hi");

//     expect(notifier).toHaveBeenCalledWith("message sent");
//     expect(notifier).toHaveBeenCalled();
//     expect(notifier).toHaveBeenCalledTimes(3);
//     expect(notifier).toHaveBeenNthCalledWith(2, "hello");
//     expect(notifier).toHaveBeenNthCalledWith(1, "message sent");
//   });
// });

//////////////////////////////////////////////////////////////////////////////////////////////////

// describe("assigment 2", () => {
//   test("warnUser", () => {
//     const warnUser = vi.fn<(msg: string, n: number) => [string, number]>();

//     warnUser("server error", 500);
//     warnUser("not implemented", 501);
//     warnUser("Gateway Timeout", 504);
//     warnUser("Moved Permanently", 301);
//     warnUser("Found", 302);
//     warnUser("Not Modified", 304);

//     expect(warnUser).toHaveBeenCalled();
//     expect(warnUser).toHaveBeenCalledTimes(6);
//     expect(warnUser).toHaveBeenCalledWith("server error", 500);
//     expect(warnUser).toHaveBeenNthCalledWith(5, "Found", 302);
//     expect(warnUser).toHaveBeenNthCalledWith(2, "not implemented", 501);
//     expect(warnUser).toHaveBeenNthCalledWith(3, "Gateway Timeout", 504);
//   });
// });

//////////////////////////////////////////////////////////////////////////////////////////

// describe("assignment 3", () => {
//   test("clickHandler", () => {
//     const clickHandler = vi.fn<(event: { target: string }) => void>();
//     clickHandler({ target: "button" });
//     clickHandler({ target: "div" });
//     clickHandler({ target: "form" });
//     clickHandler({ target: "span" });
//     clickHandler({ target: "h1" });

//     expect(clickHandler).toHaveBeenCalled();
//     expect(clickHandler).toHaveBeenNthCalledWith(2, { target: "div" });
//     expect(clickHandler).toHaveBeenCalledTimes(5);
//     expect(clickHandler).toHaveBeenCalledWith({ target: "form" });
//     expect(clickHandler.mock.calls[0][0].target).toBe("button");
//     expect(clickHandler.mock.calls[1][0].target).toBe("div");
//     expect(clickHandler.mock.calls[2][0].target).toBe("form");
//     expect(clickHandler.mock.calls[3][0].target).toBe("span");
//     expect(clickHandler.mock.calls[4][0].target).toBe("h1");
//   });
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////

// describe("assignment 4", () => {
//   test("getRole", () => {
//     const getRole = vi
//       .fn<() => string>()
//       .mockReturnValueOnce("admin")
//       .mockReturnValueOnce("user")
//       .mockReturnValueOnce("scammer")
//       .mockReturnValueOnce("new user");

//     expect(getRole()).toBe("admin");
//     expect(getRole()).toBe("user");
//     expect(getRole()).toBe("scammer");
//     expect(getRole).toBe("new user");
//     expect(getRole).toHaveBeenCalled();
//   });
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// describe("assignment 5", () => {
//   test("getStatus", () => {
//     const getStatus = vi
//       .fn<() => string>()
//       .mockReturnValueOnce("online")
//       .mockReturnValueOnce("offline")
//       .mockReturnValueOnce("hacked")
//       .mockReturnValueOnce("scammed");

//     expect(getStatus()).toBe("online");
//     expect(getStatus()).toBe("offline");
//     expect(getStatus()).toBe("hacked");
//     expect(getStatus()).toBe("scammed");
//   });
// });

/////////////////////////////////////////////////////////////////////////////////////////////////////

// describe("assignment 6", () => {
//   test("getAge", () => {
//     const getAge = vi
//       .fn<() => number>()
//       .mockReturnValueOnce(12)
//       .mockReturnValueOnce(30)
//       .mockReturnValueOnce(45)
//       .mockReturnValueOnce(67);

//     expect(getAge()).toBe(12);
//     expect(getAge()).toBe(30);
//     expect(getAge()).toBe(45);
//     expect(getAge()).toBe(67);
//   });
// });

/////////////////////////////////////////////////////////////////////////////////////////////

// describe("getStep", () => {
//   test("getTest", () => {
//     const getStep = vi
//       .fn<() => string>()
//       .mockReturnValueOnce("first")
//       .mockReturnValueOnce("second")
//       .mockReturnValueOnce("third")
//       .mockReturnValueOnce("fourth");

//     expect(getStep()).toBe("first");
//     expect(getStep()).toBe("second");
//     expect(getStep()).toBe("third");
//     expect(getStep()).toBe("fourth");

//     expect(getStep).toHaveBeenCalled();
//     expect(getStep).toHaveBeenCalledTimes(4);
//     expect(getStep).toHaveBeenCalledWith("first");
//     expect(getStep).toHaveBeenCalledWith("second");
//     expect(getStep).toHaveBeenCalledWith("third");
//     expect(getStep).toHaveBeenCalledWith("fourth");
//   });
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////

// describe("async/await", () => {
//   test("fetchUser", async () => {
//     const fetchUser = vi
//       .fn<() => Promise<{ id: number }>>()
//       .mockResolvedValueOnce({ id: 1 })
//       .mockResolvedValueOnce({ id: 2 })
//       .mockResolvedValueOnce({ id: 3 })
//       .mockResolvedValueOnce({ id: 4 })
//       .mockResolvedValueOnce({ id: 5 })
//       .mockResolvedValueOnce({ id: 6 });

//     const id1 = await fetchUser();
//     const id2 = await fetchUser();
//     const id3 = await fetchUser();
//     const id4 = await fetchUser();
//     const id5 = await fetchUser();
//     const id6 = await fetchUser();

//     expect(id1).toEqual({ id: 1 });
//     expect(id2).toEqual({ id: 2 });
//     expect(id3).toEqual({ id: 3 });
//     expect(id4).toEqual({ id: 4 });
//     expect(id5).toEqual({ id: 5 });
//     expect(id6).toEqual({ id: 6 });

//     expect(fetchUser).toHaveBeenCalledTimes(6);
//     expect(fetchUser).toHaveBeenCalled();
//   });
// });

////////////////////////////////////////////////////////////////////////////////////

// describe("async/await", () => {
//   test("loadSettings", async () => {
//     const loadSettings = vi
//       .fn<() => Promise<string>>()
//       .mockResolvedValue("loaded");

//     const resolve = await loadSettings();

//     expect(resolve).toBe("loaded");
//     expect(loadSettings).toHaveBeenCalled();
//     expect(loadSettings).toHaveBeenCalledTimes(1);
//   });
// });

///////////////////////////////////////////////////////////////////////////////////////////////

// describe("async/await", () => {
//   test("getTotal", async () => {
//     const getTotal = vi
//       .fn<() => Promise<number>>()
//       .mockResolvedValueOnce(42)
//       .mockResolvedValueOnce(45)
//       .mockResolvedValueOnce(89)
//       .mockResolvedValueOnce(12)
//       .mockResolvedValueOnce(32);

//     const call1 = await getTotal();
//     const call2 = await getTotal();
//     const call3 = await getTotal();
//     const call4 = await getTotal();
//     const call5 = await getTotal();

//     expect(call1).toBe(42);
//     expect(call2).toBe(45);
//     expect(call3).toBe(89);
//     expect(call4).toBe(12);
//     expect(call5).toBe(32);
//   });
// });

///////////////////////////////////////////////////////////////////////////////

// describe("async/await", () => {
//   test("failRequest", async () => {
//     const promiseRequest = vi
//       .fn<() => Promise<string>>()
//       .mockRejectedValueOnce("failed")
//       .mockResolvedValueOnce("success")
//       .mockRejectedValueOnce("failed2")
//       .mockResolvedValueOnce("success2")
//       .mockRejectedValueOnce("failed3")
//       .mockResolvedValueOnce("success3")
//       .mockRejectedValueOnce("failed4")
//       .mockResolvedValueOnce("success4");

//     await expect(promiseRequest()).rejects.toThrow("failed");
//     await expect(promiseRequest()).resolves.toBe("success");
//     await expect(promiseRequest()).rejects.toThrow("failed2");
//     await expect(promiseRequest()).resolves.toBe("success2");
//     await expect(promiseRequest()).rejects.toThrow("failed3");
//     await expect(promiseRequest()).resolves.toBe("success3");
//     await expect(promiseRequest()).rejects.toThrow("failed4");
//     await expect(promiseRequest()).resolves.toBe("success4");
//   });
// });

///////////////////////////////////////////////////////////////////////////////

// describe("assignment", () => {
//   test("getNextStage", () => {
//     const getNextStage = vi
//       .fn<()=>string>()
//       .mockReturnValueOnce("loading")
//       .mockReturnValueOnce("ready");

//     expect(getNextStage()).toBe("loading");
//     expect(getNextStage()).toBe("ready");
//   });
// });

/////////////////////////////////////////////////////////////

// describe("assignment 1", () => {
//   test("stepRunner", () => {
//     const stepRunner = vi
//       .fn<()=>string>()
//       .mockReturnValueOnce("start")
//       .mockReturnValueOnce("middle")
//       .mockReturnValueOnce("end");

//     expect(stepRunner()).toBe("start");
//     expect(stepRunner()).toBe("middle");
//     expect(stepRunner()).toBe("end");
//   });
// });

/////////////////////////////////////////////////////////////////

// describe("assignment 2", () => {
//   test("randomizer", () => {
//     const randomizer = vi
//       .fn<() => number>()
//       .mockReturnValueOnce(0.1)
//       .mockReturnValueOnce(0.9);

//     expect(randomizer()).toBe(0.1);
//     expect(randomizer()).toBe(0.9);
//   });
// });

//////////////////////////////////////////////////////////////////

// describe("assignment 3", () => {
//   test("pollAPI", async () => {
//     const pollAPI = vi
//       .fn<() => Promise<string>>()
//       .mockResolvedValueOnce("waiting")
//       .mockResolvedValueOnce("done");

//     await expect(pollAPI()).resolves.toBe("waiting");
//     await expect(pollAPI()).resolves.toBe("done");
//   });
// });

///////////////////////////////////////////////////////////////////////////

// describe("mock.calls", () => {
//   test("logAction", () => {
//     const logAction: (event: string, source: string) => void = vi.fn();

//     logAction("click", "button");
//     logAction("hover", "div");
//     logAction("mouse enter", "span");

//     expect(logAction.mock.calls.length).toBe(3);
//     expect(logAction.mock.calls[0]).toEqual(["click", "button"]);
//     expect(logAction.mock.calls[0][1]).toBe("button");
//     expect(logAction.mock.calls[1].length).toBe(2);
//     expect(logAction.mock.calls[2][0]).toBe("mouse enter");
//     expect(logAction.mock.calls[2]).toEqual(["mouse enter", "span"]);
//     expect(logAction.mock.calls[1]).toEqual(["hover", "div"]);
//   });
// });

//////////////////////////////////////////////////////////////////////////////////

// describe("assigment 1", () => {
//   test("captureData", () => {
//     const captureDate: (id: number, type: string) => void = vi.fn();

//     captureDate(5, "video");
//     captureDate(9, "music");

//     expect(captureDate.mock.calls[0]).toEqual([5, "video"]);
//     expect(captureDate.mock.calls[0][1]).toBe("video");
//     expect(captureDate.mock.calls[1]).toEqual([9, "music"]);
//     expect(captureDate.mock.calls[1][0].toBe(9));
//   });
// });

////////////////////////////////////////////////////////////////////////////////////////////

// describe("assignment 2", () => {
//   test("logAttempts", () => {
//     const logAttempts: (attempt: number) => void = vi.fn();

//     logAttempts(2);
//     logAttempts(4);
//     logAttempts(4);
//     logAttempts(1);
//     logAttempts(5);

//     expect(logAttempts.mock.calls[0]).toEqual([2]);
//     expect(logAttempts.mock.calls[0][0]).toBe(2);
//     expect(logAttempts.mock.calls[2]).toEqual([4]);
//     expect(logAttempts.mock.calls[4][0]).toBe(5);
//   });
// });

/////////////////////////////////////////////////////////////////////////////////////////////

// describe("assignment 3", () => {
//   test("saveInput", () => {
//     const saveInput: (value: { field: string }) => void = vi.fn();

//     saveInput({ field: "email" });
//     saveInput({ field: "name" });
//     saveInput({ field: "message" });
//     saveInput({ field: "phone" });

//     expect(saveInput.mock.calls[0]).toEqual([{ field: "email" }]);
//     expect(saveInput.mock.calls[1][0]).toEqual({ field: "name" });
//     expect(saveInput.mock.calls[2][0].field).toBe("message");
//     expect(saveInput.mock.calls[3]).toEqual([{ field: "phone" }]);
//   });
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// describe("track mock can be cleared", () => {
//   test("track", () => {
//     const track: () => void = vi.fn();
//     track();
//     expect(track).toHaveBeenCalledTimes(1);

//     track.mockClear();
//     expect(track).not.toHaveBeenCalled();
//   });
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// describe("assignment 1", () => {
//   test("load", () => {
//     const load: () => string = vi.fn().mockReturnValueOnce("loaded");

//     expect(load()).toBe("loaded");

//     load.mockReset();

//     expect(load()).not.toBe("loaded");
//   });
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// describe("assignment 2", () => {
//   test("fn", () => {
//     const fn: () => string = vi.fn().mockReturnValue("ready");

//     expect(fn()).toBe("ready");

//     expect(fn).toHaveBeenCalled();

//     fn.mockReset();

//     expect(fn).not.toHaveBeenCalled();
//     expect(fn()).toBe(undefined);
//   });
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// describe("assignment 3", () => {
//   test("boot", () => {
//     const boot = vi.fn<() => string>().mockReturnValue("ok");

//     boot();
//     expect(boot).toHaveBeenCalled();
//     expect(boot()).toBe("ok");

//     boot.mockReset();

//     expect(boot).not.toHaveBeenCalled();
//     expect(boot()).toBe(undefined);
//   });
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// describe("assignment 4", () => {
//   test("auth", () => {
//     const auth: () => boolean = vi.fn().mockReturnValue(true);

//     auth();
//     expect(auth).toHaveBeenCalled();
//     expect(auth()).toBe(true);

//     auth.mockReset();

//     auth();
//     expect(auth).toHaveBeenCalled();
//     expect(auth()).toBe(undefined);
//   });
// });

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// describe("assignment 5", () => {
//   test("auth", () => {
//     const auth: () => boolean = vi.fn().mockReturnValue(true);

//     auth();
//     expect(auth).toHaveBeenCalled();
//     expect(auth()).toBe(true);

//     auth.mockClear();

//     expect(auth.mock.calls.length).toBe(0);
//     expect(auth()).toBe(true);
//   });
// });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// describe("assignment 5", () => {
//   test("first", () => {
//     const first: () => void = vi.fn();

//     const second: () => void = vi.fn();

//     first();
//     first();

//     second();
//     second();

//     expect(first.mock.calls.length).toBe(2);
//     expect(second.mock.calls.length).toBe(2);

//     vi.clearAllMocks();

//     expect(first.mock.calls.length).toBe(0);
//     expect(second.mock.calls.length).toBe(0);
//   });
// });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// describe("assignment 6", () => {
//   test("relogin", () => {
//     const relogin: () => string = vi.fn().mockReturnValue("user123");

//     expect(relogin()).toBe("user123");

//     vi.resetAllMocks();

//     expect(relogin()).toBe(undefined);
//     expect(relogin()).not.toBe("user123");
//   });
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// describe("custom mock function", () => {
//   test("greeter", () => {
//     const greeter: (name: string) => string = vi.fn((name) => `hello ${name}`);

//     expect(greeter("subham")).toBe("hello subham");
//     expect(greeter).toHaveBeenCalledWith("subham");
//   });
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// describe("assignment 1", () => {
//   test("double", () => {
//     const double: (x: number) => number = vi.fn((x) => x * 2);

//     expect(double(3)).toBe(6);
//     expect(double).toHaveBeenCalledWith(3);
//   });
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// describe("assignment 2", () => {
//   test("isEven", () => {
//     const isEven: (n: number) => boolean = vi.fn((n) => n % 2 == 0);

//     expect(isEven(2)).toBe(true);
//     expect(isEven(3)).not.toBe(true);
//     expect(isEven).toHaveBeenCalledWith(3);
//     expect(isEven).toHaveBeenNthCalledWith(1, 2);
//     expect(isEven).toHaveBeenNthCalledWith(2, 3);
//   });
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// describe("assignment 3", () => {
//   test("greetByTime", () => {
//     const greetByTime: (hour: number) => string = vi.fn((hour) => {
//       if (hour < 12) {
//         return `Good Morning`;
//       }
//       return `Good Night`;
//     });

//     expect(greetByTime(10)).toBe(`Good Morning`);
//     expect(greetByTime(18)).toBe("Good Night");

//     expect(greetByTime).toHaveBeenCalled();
//     expect(greetByTime).toHaveBeenNthCalledWith(2, 18);
//     expect(greetByTime).toHaveBeenCalledWith(10);
//   });
// });

//////////////////////////////////////////////////////////////////////////////////////////////////

// describe("assignment 4", () => {
//   test("concatStrings", () => {
//     const concatStrings: (a: string, b: string) => string = vi.fn(
//       (a, b) => `${a}-${b}`
//     );

//     expect(concatStrings("hello", "world")).toBe("hello-world");
//     expect(concatStrings("hi", "there")).toBe("hi-there");
//     expect(concatStrings).toHaveBeenCalledWith("hello", "world");
//     expect(concatStrings).toHaveBeenNthCalledWith(1, "hello", "world");
//     expect(concatStrings).toHaveBeenNthCalledWith(2, "hi", "there");
//   });
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// describe("spy", () => {
//   const user = {
//     getName: (msg: string): string => `hello ${msg}`,
//   };

//   test("assignment 1", () => {
//     const spy = vi.spyOn(user, "getName");
//     expect(user.getName("Lord")).toBe("hello Lord");
//     expect(spy).toHaveBeenCalledWith("Lord");
//   });
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

describe("assignment 2", () => {
  const calculator = {
    add(a: number, b: number): number {
      return a + b;
    },
  };

  const spy = vi.spyOn(calculator, "add");
  expect(calculator.add(8, 9)).toBe(17);
  expect(calculator.add(4, 5)).toBe(9);
  expect(calculator.add(2, 9)).toBe(11);
  expect(spy).toHaveBeenCalledWith(8, 9);
  expect(spy).toHaveBeenNthCalledWith(2, 4, 5);
  expect(spy).toHaveBeenNthCalledWith(3, 2, 9);
});
