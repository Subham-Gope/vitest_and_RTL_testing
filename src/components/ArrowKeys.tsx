import React, { useState } from "react";
import type { KeyboardEvent } from "react";

interface PropTypes {
  message: string;
}

const ArrowKeys: React.FC<PropTypes> = ({ message }) => {
  const [key, setKey] = useState<string>("");

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key == "ArrowRight" ||
      e.key == "ArrowLeft" ||
      e.key == "ArrowUp" ||
      e.key == "ArrowDown"
    ) {
      setKey(e.key);
    }
  };

  return (
    <>
      <h1>{message}</h1>
      <div>
        <label htmlFor="arrow">Enter the text</label>
        <input
          type="text"
          placeholder="Enter your text"
          id="arrow"
          onKeyDown={handleKeyPress}
        />
      </div>
      {key && <p>Pressed: {key}</p>}
    </>
  );
};

export default ArrowKeys;
