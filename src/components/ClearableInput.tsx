import React, { useState } from "react";
import type { ChangeEvent } from "react";

const ClearableInput: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter Email"
          value={value}
          onChange={handleChange}
        />
        <button onClick={() => setValue("")}>Clear</button>
      </div>
    </>
  );
};

export default ClearableInput;
