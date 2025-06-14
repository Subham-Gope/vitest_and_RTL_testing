// import { describe, test, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import BackspaceInput from "../components/BackspaceInput";

// describe("Testing the BackspaceInput.tsx file", () => {
//   test("should handle backspace key handle", async () => {
//     const user = await userEvent.setup();

//     const { container } = render(<BackspaceInput />);

//     expect(container).toMatchSnapshot();

//     const input = screen.getByRole("textbox", { name: /enter your/i });
//     expect(input).toBeInTheDocument();

//     await user.type(input, "Test");
//     expect(input).toHaveValue("Test");
//     await user.type(input, "{backspace}{backspace}");
//     expect(input).toHaveValue("Te");
//   });
// });
