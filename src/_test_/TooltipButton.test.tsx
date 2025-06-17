// import { describe, test, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import TooltipButton from "../components/TooltipButton";

// describe("Testing the TooltipButton.tsx file", () => {
//   test("reveal content on hover", async () => {
//     // setting up the userEvent
//     const user = userEvent.setup();

//     // setting the debugger
//     screen.debug();

//     const { container } = render(<TooltipButton />);
//     expect(container).toMatchSnapshot();

//     const btn = screen.getByRole("button", { name: /^hover me$/i });
//     expect(btn).toBeInTheDocument();

//     // intiating the user interaction
//     await user.hover(btn);

//     const hoverText = screen.getByText(/hello there/i);
//     expect(hoverText).toBeInTheDocument();

//     await user.unhover(btn);
//     expect(screen.getByText(/\bhello there\b/i)).not.toBeInTheDocument();
//   });
// });
