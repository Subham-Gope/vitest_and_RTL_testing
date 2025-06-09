import React, { useState } from "react";
import type { ChangeEvent } from "react";

const TextInput: React.FC = () => {
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="textInput">Enter Your Name</label>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Subham Gope"
          aria-label="Enter Your Name"
        />

        {text && <p>Typed input: {text}</p>}
      </div>
    </>
  );
};

export default TextInput;
