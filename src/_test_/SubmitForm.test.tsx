// import { describe, test, expect, vi } from "vitest";
// import { screen, render, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import SubmitForm from "../components/SubmitForm";

// describe("Testing SubmitForm.tsx file", () => {
//   test("inputs data and submits the form", async () => {
//     // Setting up the userEvent
//     const user = userEvent.setup({ delay: 100 });

//     const { container } = render(<SubmitForm />);
//     screen.debug();
//     expect(container).toMatchSnapshot();

//     const name = screen.getByLabelText(/name:/i);
//     const email = screen.getByLabelText(/email:/i);
//     const age = screen.getByLabelText(/^age:$/i);
//     const contactNo = screen.getByLabelText(/contact number/i);
//     const message = screen.getByLabelText(/message/i);
//     const submitBtn = screen.getByRole("button", { name: /send/i });

//     expect(name).toBeInTheDocument();
//     expect(email).toBeInTheDocument();
//     expect(age).toBeInTheDocument();
//     expect(contactNo).toBeInTheDocument();
//     expect(message).toBeInTheDocument();
//     expect(submitBtn).toBeInTheDocument();

//     // Initiating user interaction
//     await user.type(name, "Subham Gope");
//     await user.type(email, "subhamgope@gmail.com");
//     await user.type(age, "24");
//     await user.type(contactNo, "908978787873");
//     await user.type(
//       message,
//       "Hi there, this is a test message, I hope this reaches the test result successfully"
//     );
//     await user.click(submitBtn);

//     expect(name).toHaveValue("Subham Gope");
//     expect(email).toHaveValue("subhamgope@gmail.com");
//     expect(age).toHaveValue(24);
//     expect(contactNo).toHaveValue(908978787873);
//     expect(message).toHaveValue(
//       "Hi there, this is a test message, I hope this reaches the test result successfully"
//     );

//     // Testing the submitted form values

//     // Mocking the global function before rendering
//     const mockFetch = vi.fn().mockResolvedValue({
//       ok: true,
//       json: async () => ({ id: 101 }),
//     });

//     global.fetch = mockFetch;

//     // Wait for the fetch call to happen
//     await waitFor(
//       () => {
//         expect(mockFetch).toHaveBeenCalled();
//       },
//       { timeout: 3000 }
//     );

//     // Get arguments from first fetch call
//     const [url, options] = mockFetch.mock.calls[0];

//     // Assert correct url
//     expect(url).toBe("https://jsonplaceholder.typicode.com/posts");

//     // Assert correct HTTP method and headers
//     expect(options.method).toBe("POST");
//     expect(options.headers["Content-Type"]).toBe("application/json");

//     // Parse and inspect the body sent in fetch
//     const sentBody = JSON.parse(options.body);
//     expect(sentBody).toEqual({
//       contact: {
//         name: "Subham Gope",
//         email: "subhamgope@gmail.com",
//         age: 24,
//         contactNo: "908978787873",
//         message:
//           "Hi there, this is a test message, I hope this reaches the test result successfully",
//       },
//     });
//   });
// });
