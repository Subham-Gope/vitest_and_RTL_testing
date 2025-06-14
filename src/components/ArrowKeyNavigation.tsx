import React, { useState } from "react";
import type { ChangeEvent, KeyboardEvent } from "react";

interface PropsType {
  message: string;
  num: number;
}

const ArrowKeyNavigation: React.FC<PropsType> = ({ message, num }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Escape") {
      e.preventDefault();
      setValue("");
    }
  };

  return (
    <>
      <h1>
        Message: {message}, Numbers: {num}
      </h1>
      <div>
        <label htmlFor="arrow">Enter Text</label>
        <input
          type="text"
          placeholder="enter text"
          id="arrow"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
};

export default ArrowKeyNavigation;
