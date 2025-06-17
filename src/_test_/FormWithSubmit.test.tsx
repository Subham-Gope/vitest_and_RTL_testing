import { describe, test, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormWithSubmit from "../components/FormWithSubmit";

describe("Testing the FormWithSubmit.tsx", () => {
  test("submits form with input values and makes api call request", async () => {
    // Setting up the userEvent
    const user = userEvent.setup();

    // Adding debugger
    screen.debug();

    const { container } = render(<FormWithSubmit />);
    expect(container).toMatchSnapshot();

    const name = screen.getByLabelText(/^name:$/i) as HTMLInputElement;
    const email = screen.getByLabelText(/^email:$/i);
    const contactNumber = screen.getByLabelText(/^contact number:$/i);
    const message = screen.getByLabelText(/^message:$/i);
    const btn = screen.getByRole("button", {
      name: /^(send|submitting|submitted)$/i,
    });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(contactNumber).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(btn).toBeInTheDocument();

    // Initiating the user interactions

    await user.type(name, "Subham Gope");
    expect(name).toHaveValue("Subham Gope");
    await user.clear(name);
    expect(name.value).toBeFalsy();

    // entering the values for the test
    await user.type(name, "Subham Gope");
    await user.type(email, "subhamgope@gmail.com");
    await user.type(contactNumber, "9862616239");
    await user.type(message, "Hi there...");

    await user.click(btn);
  });
});
