// import { describe, test, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import FruitSelect from "../components/FruitSelect";

// describe("FruitSelect.tsx", () => {
//   test("let's you select Banana", async () => {
//     const { container } = render(<FruitSelect />);

//     expect(container).toMatchSnapshot();

//     const select = screen.getByRole("combobox", { name: /fruits option/i });
//     expect(select).toBeInTheDocument();

//     await userEvent.selectOptions(select, "Banana");

//     const message = screen.getByText("Selected: Banana");
//     expect(message).toBeInTheDocument();
//   });
// });
