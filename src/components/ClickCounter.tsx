import React, { useState } from "react";
import type { MouseEvent } from "react";

interface PropsType {
  message: string;
}

const ClickCounter: React.FC<PropsType> = ({ message }) => {
  const [count, setCount] = useState<number>(0);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h1>{message}</h1>
      <div>
        <h2 className="mt-8 text-4xl ">
          Counter Value: {" "}
          <span className="font-bold text-blue-600">{count}</span>
        </h2>
        <button
          onClick={handleClick}
          className="bg-orange-400 px-12 py-4 rounded-[16px] text-white font-bold outline-none mt-8"
        >
          Click Me
        </button>
      </div>
    </>
  );
};

export default ClickCounter;
