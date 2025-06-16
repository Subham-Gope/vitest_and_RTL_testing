// import { describe, test, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import ClickCounter from "../components/ClickCounter";

// describe("Testing the ClickCounter.tsx file", () => {
//   test("clicks the button to increase the counter value", async () => {
//     //Setting up the userEvent
//     const user = userEvent.setup();

//     const { container } = render(<ClickCounter message={"Hello"} />);

//     expect(container).toMatchSnapshot();

//     const counterText = screen.getByText(/counter value/i);
//     expect(counterText).toBeInTheDocument();
//     expect(counterText).toHaveTextContent("Counter Value: 0");

//     const button = screen.getByRole("button", { name: /click me/i });
//     expect(button).toBeInTheDocument();

//     // Initiating the user interactions
//     await user.click(button);
//     expect(counterText).toHaveTextContent("Counter Value: 1");
//   });
// });
