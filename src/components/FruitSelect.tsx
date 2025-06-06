import React, { useState } from "react";

const FruitSelect: React.FC = () => {
  const [selectedFruit, setSelectedFruit] = useState("");
  return (
    <div className="h-screen w-screen flex">
      <div className="flex flex-col gap-4 items-center justify-center p-12 m-auto bg-amber-5 w-[300px] h-[300px] bg-red-300">
        <label htmlFor="fruits" className="text-3xl text-gray-50">
          Fruits Option
        </label>
        <select
          id="fruits"
          name="Fruits"
          value={selectedFruit}
          onChange={(e) => setSelectedFruit(e.target.value)}
          required
          className="text-xl text-gray-100 bg-gray-800 p-4 rounded"
        >
          <option
            value=""
            disabled
            selected
            className="text-[16px] text-gray-400"
          >
            Select a Fruit
          </option>
          <option value="Banana" className="text-[16px] ">
            Banana
          </option>
          <option value="Apple" className="text-[16px]">
            Apple
          </option>
          <option value="Jack Fruit" className="text-[16px]">
            Jack Fruit
          </option>
          <option value="Dragon Fruit" className="text-[16px]">
            Dragon Fruit
          </option>
        </select>

        {selectedFruit && <p>Selected: {selectedFruit}</p>}
      </div>
    </div>
  );
};

export default FruitSelect;
