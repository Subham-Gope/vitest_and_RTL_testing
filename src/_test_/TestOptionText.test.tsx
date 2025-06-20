// import { describe, test, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import TestOptionText from "../components/TestOptionText";

// describe("Testing the TestOptionText.tsx file", () => {
//   test("selects multiple values", async () => {
//     // setting up the userEvent
//     const user = userEvent.setup();

//     // setting up the debugger
//     screen.debug();

//     // setting up snapshot matching
//     const { container } = render(<TestOptionText />);
//     expect(container).toMatchSnapshot();

//     const select = screen.getByRole("listbox", {
//       name: /select a option/i,
//     }) as HTMLSelectElement;
//     expect(select).toBeInTheDocument();

//     // Initiating user actions
//     await user.selectOptions(select, ["Mango", "Papaya"]);

//     const selectedOptions = Array.from(
//       select.selectedOptions,
//       (option) => option.value
//     );

//     expect(selectedOptions).toEqual(["mango", "papaya"]);

//     await user.selectOptions(select, ["Bannana", "Pineapple"]);

//     const selectedOptions2 = Array.from(
//       select.selectedOptions,
//       (option) => option.value
//     );
//     expect(selectedOptions2).toEqual([
//       "mango",
//       "bannana",
//       "pineapple",
//       "papaya",
//     ]);

//     await user.deselectOptions(select, ["pineapple", "papaya"]);

//     const selectedOptions3 = Array.from(
//       select.selectedOptions,
//       (option) => option.value
//     );
//     expect(selectedOptions3).toEqual(["mango", "bannana"]);
//   });
// });
