import React, { useState } from "react";

const ToggleText: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button onClick={() => setToggle((prev) => !prev)}>
        {toggle ? "Toggled" : "Toggle"}
      </button>
      {toggle && <p>Toggled!</p>}
    </>
  );
};

export default ToggleText;
