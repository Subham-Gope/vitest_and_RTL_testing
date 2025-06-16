import React, { useState } from "react";
import type { ChangeEvent } from "react";

const PasswordInput: React.FC = () => {
  const [pass, setPass] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };

  return (
    <>
      <label htmlFor="pass">Enter Your Password</label>
      <input
        type="text"
        placeholder="jbji#Ib3j2"
        id="pass"
        name="pass"
        value={pass}
        onChange={handleChange}
      />
      {pass && <p>Password: {pass}</p>}
    </>
  );
};

export default PasswordInput;
