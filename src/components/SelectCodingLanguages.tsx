import React, { useState } from "react";
import type { ChangeEvent } from "react";

const SelectCodingLanguages: React.FC = () => {
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );

    setValue(selectedOptions);
  };

  return (
    <>
      <div>
        <label htmlFor="coding-lang">Select your coding languages:</label>
        <select id="coding-lang" value={value} onChange={handleChange} multiple>
          <option value="" disabled>
            Selected
          </option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="javascript">javaScript</option>
          <option value="java">Java</option>
          <option value="rust">Rust</option>
          <option value="typescript">TypeScript</option>
        </select>
      </div>
      <div>
        <span className="text-3xl text-gray-800">Selected Languages:</span>
        <ul>
          {value.map((lang, index) => (
            <li key={index}>
              <p>{lang}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SelectCodingLanguages;
