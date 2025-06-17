import React, { useState } from "react";

const HelpMessage: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <div className="min-h-screen w-screen overflow-hidden relative">
        <span
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          className="p-4 bg-red-100 border-red-300 border-[0.5px] absolute top-[40%] left-[50%] -translate-x-[50%]"
          role="button"
          aria-label="help"
        >
          ❓
        </span>
        <div>
          {" "}
          {show && (
            <p className="h-[120px] w-[60%] bg-white p-4 border border-gray-200 rounded-t-xl flex items-center justify-center absolute top-[40%] left-[50%] -translate-x-[50%] translate-y-[50%]">
              Need help? Contact support.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default HelpMessage;
