// import { describe, test, expect } from "vitest";
// import { screen, render } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import ToggleMenu from "../components/ToggleMenu";

// describe("Testing the ToggleMenu.tsx file", () => {
//   test("toggles menu on pressing Shift + m", async () => {
//     // Setting up userEvent
//     const user = userEvent.setup();

//     const { container } = render(
//       <ToggleMenu
//         message={"Testing Component"}
//         assignmentNumber={5}
//         status={true}
//       />
//     );

//     expect(container).toMatchSnapshot();

//     const menu = screen.getByRole("navigation", { hidden: true });
//     expect(menu).toBeInTheDocument();
//     expect(menu).toHaveClass("translate-x-full");
//     expect(menu).toHaveClass("opacity-0");

//     // initiating user action
//     await user.keyboard("[AltLeft>][KeyM][/ShiftLeft]");
//     expect(menu).toHaveClass("translate-x-0");
//     expect(menu).toHaveClass("opacity-100");
//   });
// });
