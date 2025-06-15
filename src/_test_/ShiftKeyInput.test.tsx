// import { describe, test, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import ShiftKeyInput from "./components/ShiftKeyInput";

// describe("Testing the shiftKeyInput.tsx file", () => {
//   test("only accepts uppercase when shift is pressed", async () => {
//     // setting up the userEvent
//     const user = userEvent.setup();

//     // setting up the snapshot check
//     const { container } = render(<ShiftKeyInput />);
//     expect(container).toMatchSnapshot();

//     const input = screen.getByRole("textbox", {
//       name: /enter your/i,
//     }) as HTMLInputElement;
//     expect(input).toBeInTheDocument();

//     // Initiating the user actions
//     await user.click(input);
//     await user.keyboard("abc");
//     expect(input.value).toBeFalsy();

//     await user.keyboard("{Shift>}a{/Shift}");
//     expect(input.value).toBe("A");

//     await user.keyboard("{Shift>}b{/Shift}");
//     expect(input.value).toBe("B");

//     // Getting the text
//     const statusText = screen.getByRole("status");
//     expect(statusText).toBeInTheDocument();
//   });
// });
