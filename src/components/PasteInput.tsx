import React, { useState } from "react";
import type { ChangeEvent, ClipboardEvent } from "react";

const PasteInput: React.FC = () => {
  const [paste, setPaste] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPaste(e.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="paste">Paste Your Text here.</label>
        <input
          type="text"
          placeholder="paste here"
          id="paste"
          name="paste"
          value={paste}
          onChange={handleChange}
        />
      </div>
      {paste && <p>Pasted Text: {paste}</p>}
    </>
  );
};

export default PasteInput;
