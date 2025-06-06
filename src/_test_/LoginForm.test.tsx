// import { describe, test, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import LoginForm from "../components/LoginForm";

// describe("Testing the LoginForm.tsx component", () => {
//   test("lets user type and submit", async () => {
//     const { container } = render(<LoginForm />);

//     expect(container).toMatchSnapshot();

//     const input = screen.getByPlaceholderText("username");
//     const button = screen.getByRole("button");

//     await userEvent.type(input, "Sigma Lord");
//     await userEvent.click(button);

//     const message = screen.getByText("Submission Complete");

//     expect(message).toBeInTheDocument();
//   });
// });
