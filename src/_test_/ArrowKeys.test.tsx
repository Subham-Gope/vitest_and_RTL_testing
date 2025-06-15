// import { describe, test, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import ArrowKeys from "../components/ArrowKeys";

// describe("Testing the ArrowKey.tsx file", () => {
//   test("displays the pressed arrow key", async () => {
//     // Setting up the userEvent
//     const user = userEvent.setup();

//     const { container } = render(<ArrowKeys message="testing" />);
//     expect(container).toMatchSnapshot();

//     const input = screen.getByLabelText(/enter/i);
//     expect(input).toBeInTheDocument();

//     // initiating user interaction
//     input.focus();
//     await user.keyboard("{ArrowDown}");

//     const displayText = screen.getByText(/pressed:/i);
//     expect(displayText).toBeInTheDocument();

//     expect(displayText).toHaveTextContent("Pressed: ArrowDown");
//   });
// });
