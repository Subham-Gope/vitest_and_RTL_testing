import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EnterSubmit from "../components/EnterSubmit";

describe("Testing the EnterSubmit.tsx component", () => {
  test("submits input on ENter key press", async () => {
    // setting up userEvent
    const user = userEvent.setup();

    const { container } = render(
      <EnterSubmit message={"Hello there we are learning component testing"} />
    );
    expect(container).toMatchSnapshot();

    const input = screen.getByRole("textbox", { name: /enter your/i });
    expect(input).toBeInTheDocument();

    // intiating user action
    await user.type(input, "Hello there Sumon Barcha");
    await user.keyboard("{Enter}");

    const summaryText = screen.getByText(/Submitted:/i);
    expect(summaryText).toBeInTheDocument();
    expect(summaryText).toHaveTextContent("Hello there Sumon Barcha");
  });
});
