// import { describe, test, expect } from "vitest";
// import { screen, render } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import PasteBlockNumbers from "../components/PasteBlockNumbers";

// describe("Testing the PasteBlockNumbers.tsx file", () => {
//   test("pastes text to clipboard after checking the input is non-number", async () => {
//     // Setting up the userEvent
//     const user = userEvent.setup();

//     // Setting up the debugger
//     screen.debug();

//     // Setting snapshot matching
//     const { container } = render(<PasteBlockNumbers />);
//     expect(container).toMatchSnapshot();

//     const input = screen.getByRole("textbox", {
//       name: /paste you text here./i,
//     });
//     expect(input).toBeInTheDocument();

//     // Initiating user interactions

//     const text = "Hello there...";
//     input.focus();
//     await user.paste(text);

//     expect(input).toHaveValue(text);

//     const displayText = screen.getByText(/pasted text:/i);
//     expect(displayText).toBeInTheDocument();
//   });
// });
