import React, { useState } from "react";
import type { ChangeEvent } from "react";

const BackspaceInput: React.FC = () => {
  const [text, setText] = useState("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="backspace-input">Enter your desired texts</label>
        <input
          type="text"
          value={text}
          onChange={changeHandler}
          placeholder="Enter Your Text"
          aria-label="Enter Your Text"
        />
      </div>
      {text && <p>Current value: {text}</p>}
    </>
  );
};
export default BackspaceInput;
