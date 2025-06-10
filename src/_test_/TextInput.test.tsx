// import { describe, test, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import TextInput from "../components/TextInput";

// describe("Testing the TextInput.tsx file", () => {
//   test("let's enter a text", async () => {
//     const user = userEvent.setup();
//     const { container } = render(<TextInput />);
//     expect(container).toMatchSnapshot();

//     const input = screen.getByRole("textbox", { name: /enter your name/i });
//     expect(input).toBeInTheDocument();

//     // simulating user typing
//     await user.type(input, "Sigma Lord");
//     expect(input).toHaveValue("Sigma Lord");
//   });
// });
