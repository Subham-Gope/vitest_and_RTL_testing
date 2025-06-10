import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextareaInput from "../components/TextareaInput";

describe("testing the TextareaInput.tsx file", () => {
  test("should type multi-line text", async () => {
    const { container } = render(<TextareaInput />);
    expect(container).toMatchSnapshot();

    // setting up the the userEvent
    const user = userEvent.setup();

    const input = screen.getByRole("textbox", { name: /enter your/i });
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("");

    // entering the multiline text
    await user.type(input, "Line1{enter}Line2");
    expect(input).toHaveValue("Line1\nLine2");
  });
});
