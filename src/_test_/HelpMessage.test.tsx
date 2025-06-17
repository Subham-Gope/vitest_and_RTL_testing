// import { describe, test, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import HelpMessage from "../components/HelpMessage";

// describe("Testing the HelpMessage.tsx file", () => {
//   test("displays help message onHover", async () => {
//     // Setting up the userEvent
//     const user = userEvent.setup();

//     // Setting up snapshot matching
//     const { container } = render(<HelpMessage />);
//     expect(container).toMatchSnapshot();

//     const btn = screen.getByRole("button", { name: /help/i });
//     expect(btn).toBeInTheDocument();

//     // Initiating user interaction
//     await user.hover(btn);

//     const helpText = screen.getByText(/need help?/i);
//     expect(helpText).toBeInTheDocument();

//     await user.unhover(btn);
//     expect(helpText).not.toBeInTheDocument();
//   });
// });
