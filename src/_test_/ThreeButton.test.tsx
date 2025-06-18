// import { describe, test, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import ThreeButton from "../components/ThreeButton";

// describe("Testing the ThreeButton.tsx", () => {
//   test("selects button with tab", async () => {
//     // Setting up the userEvent
//     const user = userEvent.setup();

//     // setting up the debugger
//     screen.debug();

//     // setting up the snapshot matching
//     const { container } = render(<ThreeButton />);
//     expect(container).toMatchSnapshot();

//     const btn1 = screen.getByRole("button", { name: /first/i });
//     const btn2 = screen.getByRole("button", { name: /second/i });
//     const btn3 = screen.getByRole("button", { name: /third/i });

//     expect(btn1).toBeInTheDocument();
//     expect(btn2).toBeInTheDocument();
//     expect(btn3).toBeInTheDocument();

//     // Initiating user interaction
//     await user.tab();
//     expect(btn1).toHaveFocus();
//     await user.tab();
//     expect(btn2).toHaveFocus();
//     await user.tab();
//     expect(btn3).toHaveFocus();
//   });
// });
