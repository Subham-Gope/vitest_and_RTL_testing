import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UsernameInput from "../components/UsernameInput";

describe("Testing the UsernameInput.tsx file", () => {
  test("focuses on a element and then blurs out", async () => {
    // setting up the userEvent
    const user = userEvent.setup();

    // setting up the debugger
    screen.debug();

    // setting up the snapshot matching
    const { container } = render(<UsernameInput />);
    expect(container).toMatchSnapshot();

    const input = screen.getByRole("textbox", {
      name: /enter your username:/i,
    });
    expect(input).toBeInTheDocument();

    expect(input).not.toHaveFocus();

    // Initiating the user interactions
    await user.click(input);
    expect(input).toHaveFocus();

    const displayText = screen.getByText(/username must be/i);
    expect(displayText).toBeInTheDocument();

    await user.tab();
    expect(input).not.toHaveFocus();
    expect(displayText).not.toBeInTheDocument();
  });
});
