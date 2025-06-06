// import { describe, test, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import ClearableInput from "../components/ClearableInput";

// describe("Testing the ClearableInpt.tsx file", () => {
//   test("let's user clear the input", async () => {
//     const { container } = render(<ClearableInput />);

//     expect(container).toMatchSnapshot();

//     const input = screen.getByPlaceholderText("Enter Email");
//     const btn = screen.getByRole("button", { name: /clear/i });

//     expect(input).toBeInTheDocument();
//     expect(btn).toBeInTheDocument();

//     await userEvent.type(input, "xyz@gmail.com");
//     expect(input).toHaveValue("xyz@gmail.com");
//     await userEvent.click(btn);
//     expect(input).toHaveValue("");
//   });
// });
