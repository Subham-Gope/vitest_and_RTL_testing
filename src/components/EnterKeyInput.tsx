import React, { useState } from "react";
import type { KeyboardEvent } from "react";

interface PropsType {
  message: string;
}

const EnterKeyInput: React.FC<PropsType> = ({ message }) => {
  const [text, setText] = useState<string>("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setText("Enter key pressed");
    }
  };

  return (
    <>
      <h1>{message}</h1>
      <div>
        <label htmlFor="enterKeyInput">Enter the Text Here</label>
        <input
          type="text"
          id="enterKeyInput"
          value={text}
          onKeyDown={handleKeyDown}
        ></input>
      </div>
      {text && <p>{text}</p>}
    </>
  );
};

export default EnterKeyInput;
