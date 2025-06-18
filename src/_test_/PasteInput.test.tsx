// import { describe, test, expect } from "vitest";
// import { screen, render } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import PasteInput from "../components/PasteInput";

// describe("Testing the PasteInput.tsx file", () => {
//   test("displays the pasted text", async () => {
//     // setting up the userEvent
//     const user = userEvent.setup();

//     // setting up the debugger
//     screen.debug();

//     // setting up the snapshot matching
//     const { container } = render(<PasteInput />);
//     expect(container).toMatchSnapshot();

//     const input = screen.getByRole("textbox", {
//       name: /paste your text here./i,
//     });
//     expect(input).toBeInTheDocument();

//     // Initiating user interaction
//     const text = "Hello";
//     input.focus();
//     await user.paste(text);
//     expect(input).toHaveValue(text);
//   });
// });
