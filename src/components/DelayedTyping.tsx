import React, { useState } from "react";
import type { ChangeEvent } from "react";

interface Type {
  message: string;
}

const DelayedTyping: React.FC<Type> = ({ message }) => {
  const [text, setText] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <>
      <h1>{message}</h1>
      <div>
        <label htmlFor="delayed-typing">Delayed Typing Test</label>
        <input
          type="text"
          id="delayed-typing"
          placeholder="Enter your text"
          value={text}
          onChange={handleChange}
        />
      </div>
      {text && <p>Input Text: {text}</p>}
    </>
  );
};

export default DelayedTyping;
