import React, { useState } from "react";

const ClearableInput: React.FC = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter Email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => setValue("")}>Clear</button>
      </div>
    </>
  );
};

export default ClearableInput;
