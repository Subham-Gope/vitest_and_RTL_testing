import React, { useState } from "react";
import type { KeyboardEvent } from "react";

interface PropType {
  message: string;
  num: number;
  done: boolean;
}

const ShiftToggle: React.FC<PropType> = ({ message, num, done }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.shiftKey && e.key.toLowerCase() == "t") {
      setToggle((prev) => !prev);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center">
      <h1>
        Message: {message}, Assignment Number: {num}, Completion Status:{" "}
        {done.toString()}
      </h1>

      <div
        onKeyDown={handleKeyDown}
        tabIndex={0}
        className="bg-orange-400 h-[400px] w-[400px] flex items-center justify-center text-2xl text-white font-bold m-auto"
      >
        {toggle ? "Toggle On" : "Toggle Off"}
      </div>
    </div>
  );
};

export default ShiftToggle;
