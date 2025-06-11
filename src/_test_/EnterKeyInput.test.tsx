import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EnterKeyInput from "../components/EnterKeyInput";

describe("Testing the EnterKeyInput.tsx file", () => {
  test("Should detect Enter key press", async () => {
    const user = userEvent.setup();

    const { container } = render(<EnterKeyInput message={"Hello"} />);
    expect(container).toMatchSnapshot();

    const input = screen.getByRole("textbox", { name: /enter the/i });
    expect(input).toBeInTheDocument();

    // simulating the user interaction
    await user.type(input, "Hello{enter}");

    expect(input).toHaveValue("Enter key pressed");

    const text = screen.getByText(/enter key/i);
    expect(text).toBeInTheDocument();
  });
});
