// import { describe, test, expect } from "vitest";
// import { screen, render } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import ArrowKeyNavigation from "../components/ArrowKeyNavigation";

// describe("Testing the ArrowKeyNavigation.tsx", () => {
//   test("clears the input on Escape key press", async () => {
//     // setting up the userEvent
//     const user = userEvent.setup();

//     const { container } = render(
//       <ArrowKeyNavigation message={"Hello"} num={5} />
//     );
//     expect(container).toMatchSnapshot();

//     const input = screen.getByLabelText(/enter text/i);
//     expect(input).toBeInTheDocument();

//     // Initiating the user interaction
//     await user.type(input, "Hello");

//     expect(input).toHaveValue("Hello");

//     await user.keyboard("{Escape}");

//     expect(input).toHaveValue("");
//   });
// });
