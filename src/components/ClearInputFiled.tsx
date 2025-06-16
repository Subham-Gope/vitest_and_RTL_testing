import React, { useState } from "react";
import type { ChangeEvent } from "react";

const ClearInputFiled: React.FC = () => {
  const [text, setText] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="clear">Enter Your Text</label>
        <input
          type="text"
          placeholder="please enter your text"
          id="clear"
          name="clear"
          value={text}
          onChange={handleChange}
        />
        {text && <p>Entered Text: {text}</p>}
      </div>
    </>
  );
};

export default ClearInputFiled;
