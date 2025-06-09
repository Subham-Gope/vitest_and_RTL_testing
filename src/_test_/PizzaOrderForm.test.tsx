import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PizzaOrderForm from "../components/PizzaOrderForm";

describe("Testing the PizzaOrderForm.tsx file", () => {
  test("reders, assets default value, selects size and topping", async () => {
    const { container } = render(<PizzaOrderForm />);

    expect(container).toMatchSnapshot();

    // Checking default size radio is checked(medium)
    const mediumRadio = screen.getByRole("radio", { name: /medium/i });
    expect(mediumRadio).toBeChecked();

    // Checking default topping select value is "pepperoni"
    const toppingSelect = screen.getByLabelText(/choose toppings/i);
    expect(toppingSelect).toHaveValue("pepperoni");

    // Check the displayed text
    const summaryTextMedium = screen.getByText(/Selected:/i);
    expect(summaryTextMedium).toHaveTextContent(
      "Selected: medium pizza with pepperoni"
    );

    // Select pizza size
    const largeRadio = screen.getByRole("radio", { name: /large/i });
    await userEvent.click(largeRadio);
    expect(largeRadio).toBeChecked();

    // Check the displayed text
    const summaryTextLarge = screen.getByText(/Selected:/i);
    expect(summaryTextLarge).toHaveTextContent(
      "Selected: large pizza with pepperoni"
    );

    // ////////////////////////////////////////////
    // Change Topping
    const select = screen.getByRole("combobox", { name: /choose toppings/i });
    expect(select).toBeInTheDocument();

    await userEvent.selectOptions(select, "onions");
    expect(select).toHaveValue("onions");
    const summaryTextSelectedOnions = screen.getByText(/Selected:/i);

    expect(summaryTextSelectedOnions).toHaveTextContent(
      "Selected: large pizza with onions"
    );

    /////////////////////////////////////////////////////////////////////////
    // Combined Interaction

    const radioSmall = screen.getByRole("radio", { name: /small/i });
    const selectPineapple = screen.getByRole("combobox", {
      name: /choose toppings/i,
    });

    expect(radioSmall).toBeInTheDocument();
    expect(selectPineapple).toBeInTheDocument();

    await userEvent.click(radioSmall);
    await userEvent.selectOptions(selectPineapple, "pineapple");

    expect(radioSmall).toBeChecked();
    expect(selectPineapple).toHaveValue("pineapple");

    const summaryText2 = screen.getByText(/selected:/i);
    expect(summaryText2).toBeInTheDocument();

    /////////////////////////////////////////////////////////////
    // Keyboard accessibility

    describe("Testing the PizzaOrderForm.tsx element", () => {
      test("allows keyborad for selecting size and topping", async () => {
        const user = userEvent.setup();
        render(<PizzaOrderForm />);

        // initial focus
        await user.tab();
        const smallRadio = screen.getByRole("radio", { name: /small/i });
        expect(smallRadio).toHaveFocus();

        // Arrow right to medium
        await user.keyboard("{ArrowRight}");
        const mediumRadio = screen.getByRole("radio", { name: /large/i });
        expect(mediumRadio).toHaveFocus();

        // Arrow right to large
        await user.keyboard("{ArrowRight}");
        const largeRadio = screen.getByRole("radio", { name: /large/i });
        expect(largeRadio).toHaveFocus();

        // Select "large" with spacebar
        await user.keyboard(" ");
        expect(largeRadio).toBeChecked();

        // Tab to the topping dropdown
        await user.tab();
        const toppingSelect = screen.getByRole("combobox", {
          name: /Choose toppings/i,
        });
        expect(toppingSelect).toHaveFocus();

        // use arrow key to move to "mushroom"
        await user.keyboard("{ArrowDown}");
        await user.keyboard("{Enter}");
        expect(toppingSelect).toHaveValue("mushrooms");

        // Verify final summary
        expect(screen.getByText(/selected:/i)).toHaveTextContent(
          "Selected: large pizza with mushrooms"
        );

        ////////////////////////////////////////////////////////////
        // Checking Accessibility
        describe("Testing the PizzaOrderForm.tsx element", () => {
          test("checking for the accessibility labels", async () => {
            const { container } = render(<PizzaOrderForm />);
            expect(container).toMatchSnapshot();

            // Check radio group label- visible text "Choose size"
            const sizeLabel = screen.getByText(/choose size/i);
            expect(sizeLabel).toBeInTheDocument();

            // Check that each radio input can be found via getByLabelText by their size name
            const smallRadioLabel = screen.getByLabelText(/small/i);
            const mediumRadioLabel = screen.getByLabelText(/medium/i);
            const largeRadioLabel = screen.getByLabelText(/large/i);

            expect(smallRadioLabel).toBeInTheDocument();
            expect(mediumRadioLabel).toBeInTheDocument();
            expect(largeRadioLabel).toBeInTheDocument();

            // Check select dropdown is Labeled "Choose Toppings:
            const toppingLabel = screen.getByLabelText(/choose toppings/i);
            expect(toppingLabel).toBeInTheDocument();
          });
        });
      });
    });
  });
});
