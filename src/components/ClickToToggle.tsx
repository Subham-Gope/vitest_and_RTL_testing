import React, { useState } from "react";
import type { MouseEvent } from "react";

interface PropType {
  message: string;
}

const ClickToToggle: React.FC<PropType> = ({ message }) => {
  const [show, setShow] = useState<boolean>(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <h1>{message}</h1>
      <button onClick={handleClick}>Click Me</button>
      {show && <p>Hello there, now the text is visible!</p>}
    </>
  );
};

export default ClickToToggle;
