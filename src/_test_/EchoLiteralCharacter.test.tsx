// import { describe, test, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import EchoLiteralCharacter from "../components/EchoLiteralCharacter";

// describe("Testing the EchoLiteralCharacter.tsx", () => {
//   test("registers literal input and displays it, like eg: {}", async () => {
//     // setting up the userEvent
//     const user = userEvent.setup();

//     const { container } = render(
//       <EchoLiteralCharacter
//         message={"Testing Component"}
//         assignmentNumber={5}
//         status={true}
//       />
//     );

//     expect(container).toMatchSnapshot();

//     const textArea = screen.getByLabelText(/enter your/i);
//     expect(textArea).toBeInTheDocument();

//     // Initaiting the user Interaction
//     textArea.focus();
//     await user.keyboard("{\\{}}{\\{}}");
//     expect(textArea).toHaveValue("{}{}");
//   });
// });
