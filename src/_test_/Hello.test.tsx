import { render, screen } from "@testing-library/react";

import { describe, expect, test } from "vitest";
import Hello from "../components/Hello";

describe("testing react component", () => {
  test("Hello.tsx", () => {
    const { container } = render(<Hello />);

    expect(container).toMatchSnapshot();

    const heading = screen.getByText("Hello");
    expect(heading).toBeInTheDocument();
  });
});
