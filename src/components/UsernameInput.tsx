import React, { useState } from "react";
import type { ChangeEvent, FocusEvent } from "react";

const UsernameInput: React.FC = () => {
  const [focused, setFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const handleFocus = (e: FocusEvent<HTMLInputElement>): void => {
    setFocused(true);
    console.log(e);
  };
  const handleBlur = (e: FocusEvent<HTMLInputElement>): void => {
    setFocused(false);
    console.log(e);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="focus-blur">Enter your username:</label>
        <input
          type="text"
          placeholder="username"
          id="focus-blur"
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      {focused && <p>Username must be atleast 4 characters</p>}
    </>
  );
};

export default UsernameInput;
