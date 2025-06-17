import { describe, test, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DropDownMenu from "../components/DropdownMenu";

describe("Testing the DropdownMenu.sx file", () => {
  test("displays menu on hover", async () => {
    // setting the userEvent
    const user = userEvent.setup();

    // setting up the match snapshot
    const { container } = render(<DropDownMenu />);
    expect(container).toMatchSnapshot();

    const btn = screen.getByRole("button", { name: /help/i });
    expect(btn).toBeInTheDocument();

    // Initiating the user interactions
    await user.hover(btn);

    const menu = screen.getByRole("menu", { name: /menu/i });
    expect(menu).toBeInTheDocument();

    await user.unhover(btn);
    expect(menu).not.toBeInTheDocument();
  });
});
