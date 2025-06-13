import React, { useState } from "react";
import type { KeyboardEvent } from "react";

const CtrlSaveForm: React.FC = () => {
  const [text, setText] = useState<string>("");

  return (
    <>
      <label htmlFor="ctrl-s-input">Enter Your Text</label>
      <input id="ctrl-s-input" type="text" placeholder="Example Text" />
      
    </>
  );
};

export default CtrlSaveForm;
