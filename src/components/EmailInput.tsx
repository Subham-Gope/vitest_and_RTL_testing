import React, { useState } from "react";
import type { ChangeEvent } from "react";

interface EmailInputProps {
  message: string;
  assignment: number;
}

const EmailInput: React.FC<EmailInputProps> = ({ message, assignment }) => {
  const [email, setEmail] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  return (
    <>
      <p>
        {message} - Testing assignment number: {assignment}
      </p>
      <div>
        <label htmlFor="email-input">
          Enter Email {"    "}
          <input
            type="email"
            id="email-input"
            aria-label="Email-Input"
            placeholder="xyz@email.com"
            value={email}
            onChange={handleChange}
          />
        </label>
      </div>

      {email && <p>Email: {email} </p>}
    </>
  );
};

export default EmailInput;
