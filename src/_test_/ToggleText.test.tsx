// import { describe, test, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import ToggleText from "../components/ToggleText";

// describe("Testing the ToggleText.tsx component", () => {
//   test("lets user toggle state", async () => {
//     const { container } = render(<ToggleText />);
//     expect(container).toMatchSnapshot();

//     const btn = screen.getByRole("button", { name: /toggle/i });
//     expect(btn).toBeInTheDocument();

//     await userEvent.click(btn);

//     const message = screen.getByText("Toggled!");

//     expect(message).toBeInTheDocument();
//   });
// });
