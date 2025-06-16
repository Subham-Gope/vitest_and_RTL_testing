import { describe, test, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ClickToToggle from "../components/ClickToToggle";

describe("Testing the ClickToToggle.tsx file", () => {
  test("clicks a button to toggle the text visibility", async () => {
    // Setting up the userEvent
    const user = userEvent.setup();

    const { container } = render(<ClickToToggle message={"Hello Guys"} />);
    expect(container).toMatchSnapshot();

    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();

    // Initiating user interaction
    await user.click(button);

    const visibleText = screen.getByText(/text is visible/i);
    expect(visibleText).toBeInTheDocument();
  });
});
