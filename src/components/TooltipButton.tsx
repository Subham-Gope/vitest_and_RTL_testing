import React, { useState } from "react";

const TooltipButton: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <div>
        <button
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          className="px-12 py-4 bg-green-600 text-white text-3xl font-bold"
        >
          Hover Me
        </button>
        {show && (
          <div className="text-gray-800 text-4xl font-bold">
            Hello there, please continue the hover or, else I will disappear
          </div>
        )}
      </div>
    </>
  );
};

export default TooltipButton;
