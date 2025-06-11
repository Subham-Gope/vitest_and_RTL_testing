// import { describe, test, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import DelayedTyping from "../components/DelayedTyping";

// describe("Testing the DelayedTyping.tsx file", () => {
//   test("should type with a delay in keystroke", async () => {
//     const user = userEvent.setup();

//     const { container } = render(<DelayedTyping message={"Hello"} />);

//     expect(container).toMatchSnapshot();

//     const input = screen.getByRole("textbox", { name: /delayed/i });
//     expect(input).toBeInTheDocument();

//     // initiating user event
//     input.focus();
//     await user.type(input, "Delayed", { delay: 300, skipClick: true });

//     expect(input).toHaveValue("Delayed");
//     const displayText = screen.getByText(/input text/i);
//     expect(displayText).toBeInTheDocument();
//   });
// });
