import React, { useState } from "react";
import type { ChangeEvent, ClipboardEvent } from "react";

const PasteBlockNumbers: React.FC = () => {
  const [text, setText] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const pastedText = e.clipboardData.getData("text/plain");

    if (/\d/.test(pastedText)) {
      alert("Can not cpoy input with numbers");
      return;
    }
    setText(pastedText);
  };

  return (
    <>
      <div>
        <label htmlFor="paste">Paste you text here.</label>
        <input
          type="text"
          placeholder="paste here"
          id="paste"
          value={text}
          onChange={handleChange}
          onPaste={handlePaste}
        />
      </div>
      {text && <p className="text-4xl">Pasted Text: {text}</p>}
    </>
  );
};

export default PasteBlockNumbers;
