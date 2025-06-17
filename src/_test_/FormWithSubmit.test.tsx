// import { describe, test, expect, vi } from "vitest";
// import { render, screen, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import FormWithSubmit from "../components/FormWithSubmit";

// describe("Testing the FormWithSubmit.tsx", () => {
//   test("submits form with input values and makes api call request", async () => {
//     // Setting up the userEvent
//     const user = userEvent.setup({ delay: 1 });

//     // Adding debugger
//     screen.debug();

//     // Mocking the global fetch function before render
//     const mockFetch = vi.fn().mockResolvedValue({
//       ok: true,
//       json: async () => ({ id: 101 }),
//     });

//     global.fetch = mockFetch;

//     const { container } = render(<FormWithSubmit />);
//     expect(container).toMatchSnapshot();

//     const name = screen.getByLabelText(/^name:$/i) as HTMLInputElement;
//     const email = screen.getByLabelText(/^email:$/i);
//     const contactNumber = screen.getByLabelText(/^contact number:$/i);
//     const message = screen.getByLabelText(/^message:$/i);
//     const btn = screen.getByRole("button", {
//       name: /^(send|submitting|submitted)$/i,
//     });

//     expect(name).toBeInTheDocument();
//     expect(email).toBeInTheDocument();
//     expect(contactNumber).toBeInTheDocument();
//     expect(message).toBeInTheDocument();
//     expect(btn).toBeInTheDocument();

//     // Initiating the user interactions

//     await user.type(name, "Subham Gope");
//     expect(name).toHaveValue("Subham Gope");
//     await user.clear(name);
//     expect(name.value).toBeFalsy();

//     // entering the values for the test
//     await user.type(name, "Subham Gope", { delay: 10 });
//     await user.type(email, "subhamgope@gmail.com", { delay: 100 });
//     await user.type(contactNumber, "9862616239", { delay: 1 });
//     await user.type(message, "Hi there...", { delay: 2 });

//     // checking the submitted form values

//     // Submitting the form
//     await user.click(btn);

//     // Wait for the fetch call to happen
//     await waitFor(
//       () => {
//         expect(mockFetch).toHaveBeenCalled();
//       },
//       { timeout: 3000, interval: 50 }
//     );

//     // Get argument from the first call
//     const [url, options] = mockFetch.mock.calls[0];

//     // check the url
//     expect(url).toBe("https:/jsonplaceholder.typicode.com/posts");

//     // check the HTTP method and headers
//     expect(options.method).toBe("POST");
//     expect(options.headers["Content-Type"]).toBe("application/json");

//     //parse and inpect the body
//     const body = JSON.parse(options.body);
//     expect(body).toEqual({
//       name: "Subham Gope",
//       email: "subhamgope@gmail.com",
//       contactNumber: 9862616239,
//       message: "Hi there...",
//     });
//   });
// });
