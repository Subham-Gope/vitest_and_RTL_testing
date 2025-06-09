// import { describe, test, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import EmailInput from "../components/EmailInput";

// describe("Testing the EmailInput.tsx file", () => {
//   test("simulated typing  in the input", async () => {
//     const { container } = render(
//       <EmailInput
//         message={`This is testing the userEvent.type feature`}
//         assignment={1}
//       />
//     );

//     expect(container).toMatchSnapshot();

//     const emailInput = screen.getByLabelText("Enter Email");

//     expect(emailInput).toBeInTheDocument();

//     await userEvent.type(emailInput, "user@example.com");

//     expect(emailInput).toHaveValue("user@example.com");
//   });
// });
