import React, { useState } from "react";
import type { FocusEvent, ChangeEvent } from "react";

const SetPlaceholderColor: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setShow(true);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setShow(false);
  };

  return (
    <>
      <label htmlFor="placeholder-color">Enter Your Name:</label>
      <input
        id="placeholder-color"
        placeholder="enter your name"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`text-2xl placeholder:text-2xl ${
          show ? " placeholder:text-gray-600" : " placeholder:text-green-500"
        }`}
      />
    </>
  );
};

export default SetPlaceholderColor;
