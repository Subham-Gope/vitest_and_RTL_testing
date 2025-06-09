import React, { useState } from "react";

const ToggleText: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleClick = (): void => {
    setToggle((prev: boolean) => !prev);
  };

  return (
    <>
      <button onClick={handleClick}>{toggle ? "Toggled" : "Toggle"}</button>
      {toggle && <p>Toggled!</p>}
    </>
  );
};

export default ToggleText;
