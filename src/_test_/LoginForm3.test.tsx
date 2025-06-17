// import { describe, test, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import LoginForm3 from "../components/LoginForm3";

// describe("Testing the LoginForm3.tsx file", () => {
//   test("move from one interactable element to the other using the tab", async () => {
//     // setting up the userEvent
//     const user = userEvent.setup();

//     // Setting up the debugger
//     screen.debug();

//     // setting up the snapshot matching
//     const { container } = render(<LoginForm3 />);
//     expect(container).toMatchSnapshot();

//     const username = screen.getByPlaceholderText(/username/i);
//     const password = screen.getByPlaceholderText(/password/i);
//     const btn = screen.getByRole("button", { name: /submit/i });

//     expect(username).toBeInTheDocument();
//     expect(password).toBeInTheDocument();
//     expect(btn).toBeInTheDocument();

//     // Initiating the user interactions
//     await user.tab();
//     expect(username).toHaveFocus();
//     await user.tab();
//     expect(password).toHaveFocus();
//     await user.tab();
//     expect(btn).toHaveFocus();

//   });
// });
