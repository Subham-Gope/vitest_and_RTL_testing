import React from "react";
import { useState, type ChangeEvent } from "react";

const TextareaInput: React.FC = () => {
  const [text, setText] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="text-area">Enter Your Text</label>
        <textarea
          id="text-area"
          placeholder="enter your text"
          value={text}
          onChange={handleChange}
        />
      </div>
      {text && <p>Entered Input: {text}</p>}
    </>
  );
};
export default TextareaInput;
