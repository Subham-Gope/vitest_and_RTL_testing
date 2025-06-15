// import { describe, test, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import ShiftToggle from "../components/ShiftToggle";

// describe("Testing the ShiftToggle.tsx file", () => {
//   test("displays the entered text including {}", async () => {
//     // Setting up the userEvent
//     const user = userEvent.setup();

//     const { container } = render(
//       <ShiftToggle message={"Hello there"} num={5} done={true} />
//     );
//     expect(container).toMatchSnapshot();

//     const div = screen.getByText(/toggle/i);
//     expect(div).toBeInTheDocument();

//     // Initiating user interaction
//     div.focus();
//     await user.keyboard("{Shift>}{t}{/Shift}");
//     expect(div).toHaveTextContent("Toggle On");

//     await user.keyboard("[ShiftLeft>][KeyT][/ShiftLeft]");
//     expect(div).toHaveTextContent("Toggle Off");
//   });
// });
