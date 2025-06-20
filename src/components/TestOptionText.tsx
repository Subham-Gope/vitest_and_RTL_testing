import React, { useState } from "react";
import type { ChangeEvent } from "react";

const TestOptionText: React.FC = () => {
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setValue(selectedOptions);
  };

  return (
    <>
      <div>
        <label htmlFor="optionText">Select a Option:</label>
        <select id="optionText" value={value} onChange={handleChange} multiple>
          <option value="mango">Mango</option>
          <option value="bannana">Bannana</option>
          <option value="pineapple">Pineapple</option>
          <option value="papaya">Papaya</option>
        </select>
      </div>
      {value && <p>Selected Values: {value}</p>}
    </>
  );
};

export default TestOptionText;
