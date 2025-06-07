import React, { useState } from "react";

interface NameInput2Props {
  message: string;
}

const NameInput2: React.FC<NameInput2Props> = ({ message }) => {
  const [name, setName] = useState("");

  return (
    <>
      <p>{message}</p>
      <div>
        <label htmlFor="name">
          Name:{" "}
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Subham Gope"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
        </label>
      </div>
    </>
  );
};

export default NameInput2;
