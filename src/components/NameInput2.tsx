import React, { useState } from "react";
import type { ChangeEvent } from "react";

interface NameInput2Props {
  message: string;
}

const NameInput2: React.FC<NameInput2Props> = ({ message }) => {
  const [name, setName] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

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
            onChange={handleChange}
          />{" "}
        </label>
      </div>
    </>
  );
};

export default NameInput2;
