import React, { useState } from "react";
import type { ChangeEvent } from "react";

type SizeOption = "small" | "medium" | "large";
type ToppingOption = "pepperoni" | "mushrooms" | "onions" | "pineapple";

const sizeOptions: SizeOption[] = ["small", "medium", "large"];
const toppingOptions: ToppingOption[] = [
  "pepperoni",
  "mushrooms",
  "onions",
  "pineapple",
];

const PizzaOrderForm: React.FC = () => {
  const [pizzaSize, setPizzaSize] = useState<SizeOption>("medium");
  const [pizzaTopping, setPizzaTopping] = useState<ToppingOption>("pepperoni");

  const handleSizeChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPizzaSize(e.target.value as SizeOption);
  };
  const handleToppingChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setPizzaTopping(e.target.value as ToppingOption);
  };

  return (
    <>
      <div>
        <h1>Order Your Pizza</h1>
        {/* choose size */}
        <div>
          <p>Choose Size:</p>
          {sizeOptions.map((size) => (
            <label htmlFor={size} key={size}>
              <input
                type="radio"
                name="size"
                id={size}
                value={size}
                checked={pizzaSize === size}
                onChange={handleSizeChange}
              />
              {size}
            </label>
          ))}
        </div>
        {/* /////////////////////////////////////////////////////////////////// */}

        {/* Choose Toppings */}

        <div>
          <label htmlFor="topping">Choose Toppings:</label>
          <select
            id="topping"
            value={pizzaTopping}
            name="topping"
            onChange={handleToppingChange}
          >
            {toppingOptions.map((topping) => (
              <option key={topping} value={topping}>
                {topping}
              </option>
            ))}
          </select>
        </div>
        {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}

        <p>
          Selected:{" "}
          <span className="text-2xl text-pink-500 font-bold p-4 ">
            {pizzaSize}
          </span>{" "}
          pizza with{" "}
          <span className="text-2xl text-pink-500 font-bold p-4 ">
            {pizzaTopping}
          </span>
        </p>
      </div>
    </>
  );
};

export default PizzaOrderForm;
