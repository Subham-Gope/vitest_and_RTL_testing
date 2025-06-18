import React, { useState } from "react";
import type { ChangeEvent } from "react";

const FruitSelector: React.FC = () => {
  const [fruit, setFruit] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFruit(e.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="fruits">Select the Fruit you want:</label>
        <select id="fruits" value={fruit} onChange={handleChange}>
          <option value="" disabled selected>
            Select
          </option>
          <option value="bannana">Bannana</option>
          <option value="apple">Apple</option>
          <option value="pear">Pear</option>
          <option value="jackfruit">Jack Fruit</option>
        </select>
      </div>
      {fruit && <p className="text-3xl">Selected Fruit: {fruit}</p>}
    </>
  );
};

export default FruitSelector;
