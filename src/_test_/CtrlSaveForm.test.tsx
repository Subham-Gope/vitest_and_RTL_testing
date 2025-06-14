// import { describe, test, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import CtrlSaveForm from "../components/CtrlSaveForm";

// describe("Testing the CtrlSaveForm.tsx file", () => {
//   test("saves the file on ctrl + s", async () => {
//     // setting up the userEvent
//     const user = userEvent.setup();

//     const { container } = render(<CtrlSaveForm />);
//     expect(container).toMatchSnapshot();

//     const input = screen.getByLabelText(/enter your/i) as HTMLInputElement;
//     expect(input).toBeInTheDocument();

//     expect(input.value).toBe("");

//     // intiating user interaction
//     input.focus();
//     await user.type(input, "Hello");
//     await user.keyboard("[CtrlLeft>][KeyS][/CtrlLeft]");

//     const text = screen.getByText(/hello/i);
//     expect(text).toBeInTheDocument();
//   });
// });
