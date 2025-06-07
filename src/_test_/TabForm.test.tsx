// import { describe, test, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import TabForm from "../components/TabForm";

// describe("Testing the TabForm.tsx file", () => {
//   test("let's user move focus from one input to next", async () => {
//     const { container } = render(
//       <TabForm message={`Hello there, this is a TabForm Component Test`} />
//     );

//     expect(container).toMatchSnapshot();

//     const input1 = screen.getByPlaceholderText("First name");
//     const input2 = screen.getByPlaceholderText("Last name");

//     input1.focus();
//     expect(input1).toHaveFocus();

//     await userEvent.tab();

//     expect(input2).toHaveFocus();
//   });
// });
