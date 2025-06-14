import React, { useState } from "react";
import type { KeyboardEvent } from "react";
import type { ChangeEvent } from "react";

const CtrlSaveForm: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [submitText, setSubmitText] = useState<string>("");

  const onSubmitHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.ctrlKey && e.key == "s") {
      e.preventDefault();
      setSubmitText(text);
    }
  };
  return (
    <>
      <div>
        <label htmlFor="ctrl-s-input">Enter Your Text</label>
        <input
          id="ctrl-s-input"
          type="text"
          placeholder="Example Text"
          value={text}
          onChange={onSubmitHandler}
          onKeyDown={onKeyDownHandler}
        />
      </div>
      {submitText && <p>{submitText}</p>}
    </>
  );
};

export default CtrlSaveForm;
