import React, { useState } from "react";
import type { ChangeEvent } from "react";

interface PropsType {
  message: string;
  assignmentNumber: number;
  status: boolean;
}

const EchoLiteralCharacter: React.FC<PropsType> = ({
  message,
  assignmentNumber,
  status,
}) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col items-center h-scree w-screen">
      <h1>
        Message: {message}, Assignment Number: {assignmentNumber}, Completion
        Status: {status}
      </h1>
      <div className="flex flex-col items-center px-8 py-12">
        <label htmlFor="literal">Enter your Literal text</label>
        <textarea
          placeholder="Enter your text"
          id="literal"
          value={value}
          onChange={handleChange}
        ></textarea>
      </div>

      {value && <p>Entered Literal Text: {value}</p>}
    </div>
  );
};

export default EchoLiteralCharacter;
