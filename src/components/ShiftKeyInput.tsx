import React, { useState } from "react";
import type { KeyboardEvent } from "react";

const ShiftKeyInput: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.shiftKey && /^[a-zA-Z]$/.test(e.key)) {
      setValue((prev) => prev + e.key.toUpperCase());
    }
  };

  return (
    <>
      <div>
        <label htmlFor="shift-input">Enter Your Text</label>
        <input
          type="text"
          id="shift-input"
          placeholder="Enter Your Text"
          value={value}
          onKeyDown={handleKeyDown}
        />
      </div>
      {value && <p role="status">{value}</p>}
    </>
  );
};
export default ShiftKeyInput;
