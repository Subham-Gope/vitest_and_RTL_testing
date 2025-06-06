import { test, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SimpleButton from "../components/SimpleButton";

describe("Testing the SimpleButton.tsx file", () => {
  test("testing the component to return 'Click Me' ", () => {
    const { container } = render(<SimpleButton />);

    expect(container).toMatchSnapshot();
    const message = screen.getByText("Click Me");
    expect(message).toBeInTheDocument();
  });
});
