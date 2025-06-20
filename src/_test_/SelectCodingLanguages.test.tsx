import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SelectCodingLanguages from "../components/SelectCodingLanguages";

describe("Testing the SelectCodingLanguages.tsx file", () => {
  test("selects multiple options and deselects some from the select box", async () => {
    // setting up the user setup()
    const user = userEvent.setup();

    // setting up the debugger
    screen.debug();

    // setting up the snapshot matching
    const { container } = render(<SelectCodingLanguages />);
    expect(container).toMatchSnapshot();

    const select = screen.getByRole("listbox", {
      name: /select your coding languages:/i,
    });
    expect(select).toBeInTheDocument();

    // Initiating user interactions
    await user.selectOptions(select, ["HTML", "CSS"]);

    const htmlOption = screen.getByRole("option", {
      name: /html/i,
    }) as HTMLOptionElement;
    const cssOption = screen.getByRole("option", {
      name: /css/i,
    }) as HTMLOptionElement;
    expect(htmlOption).toBeInTheDocument();
    expect(cssOption).toBeInTheDocument();
    expect(htmlOption.selected).toBe(true);
    expect(cssOption.selected).toBe(true);
  });
});
