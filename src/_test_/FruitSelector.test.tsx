// import { describe, test, expect } from "vitest";
// import { screen, render } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import FruitSelector from "../components/FruitSelector";

// describe("Testing the FruitSelector.tsx file", () => {
//   test("selects and deslects options", async () => {
//     // setting up the userEvent
//     const user = userEvent.setup();

//     // setting up the debugger
//     screen.debug();

//     // setting up the snapshot matching
//     const { container } = render(<FruitSelector />);
//     expect(container).toMatchSnapshot();

//     const select = screen.getByRole("combobox", {
//       name: /select the fruit/i,
//     }) as HTMLSelectElement;
//     expect(select).toBeInTheDocument();

//     // Initiating user interactions
//     await user.selectOptions(select, "bannana");
//     expect(select).toHaveValue("bannana");

//     await user.selectOptions(select, "Apple");
//     expect(select).toHaveValue("apple");

//     await user.selectOptions(select, "pear");
//     expect(select).toHaveValue("pear");

//     await user.selectOptions(select, "jackfruit");
//     expect(select).toHaveValue("jackfruit");
//   });
// });
