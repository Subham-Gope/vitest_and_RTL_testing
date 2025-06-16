import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PasswordInput from "../components/PasswordInput";

describe("Testing the PasswordInput.tsx", () => {
  test("registered a pass word input and displays it", async () => {
    // Setting up the userEvent
    const user = userEvent.setup();

    const { container } = render(<PasswordInput />);
    expect(container).toMatchSnapshot();

    const input = screen.getByLabelText(/^enter your password$/i);
    expect(input).toBeInTheDocument();

    // Initiating the user interactions
    await user.type(input, "ghfjr3@JDK");
    expect(input).toHaveValue("ghfjr3@JDK");

    const displayText = screen.getByText(/^password:$/i);
    expect(displayText).toBeInTheDocument();
    
  });
});
