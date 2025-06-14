import React, { useState } from "react";
import type { ChangeEvent, KeyboardEvent } from "react";

interface PropType {
  message: string;
}

const EnterSubmit: React.FC<PropType> = ({ message }) => {
  const [value, setValue] = useState<string>("");
  const [submitted, setSubmitted] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      e.preventDefault();
      setSubmitted(value);
    }
  };

  return (
    <>
      <h1>{message}</h1>
      <div>
        <label htmlFor="enter-submit">Enter Your Text</label>
        <input
          type="text"
          id="enter-submit"
          placeholder="Enter your text"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>

      {submitted && <p>Submitted: {submitted}</p>}
    </>
  );
};

export default EnterSubmit;
