// import { describe, test, expect } from "vitest";
// import { screen, render } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import ClearInputFiled from "../components/ClearInputFiled";

// describe("Testing the ClearInputFiled.tsx file", () => {
//   test("enter a text in the input and then clears it", async () => {
//     // setting up the userEvent
//     const user = userEvent.setup();

//     const { container } = render(<ClearInputFiled />);
//     expect(container).toMatchSnapshot();

//     const input = screen.getByRole("textbox", { name: /^enter your text$/i });
//     expect(input).toBeInTheDocument();

//     // intiating user interactions
//     await user.type(input, "hello");
//     expect(input).toHaveValue("hello");

//     await user.clear(input);
//     expect(input).toHaveValue("");
//   });
// });
// //
