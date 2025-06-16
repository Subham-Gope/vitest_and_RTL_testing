import React, { useEffect, useState } from "react";

interface PropsType {
  message: string;
  assignmentNumber: number;
  status: boolean;
}

const ToggleMenu: React.FC<PropsType> = ({
  message,
  assignmentNumber,
  status,
}) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key == "m") {
        e.preventDefault();
        setToggleMenu((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className=" flex flex-col overflow-x-hidden relative min-h-screen">
      <h1>
        Message: {message}, Assigment Number: {assignmentNumber}, Completion
        Status:{status}, Toggle State: {toggleMenu.toString()}
      </h1>

      <div
        className={`h-screen w-[200px] bg-gray-100 flex  flex-col items-center mt-4 absolute top-[30px] right-0 ${
          toggleMenu
            ? "translate-x-0 opacity-100 "
            : "translate-x-full  opacity-0"
        }  transition-all duration-300 ease-in-out delay-100`}
        role="navigation"
      >
        <ul className="flex flex-col gap-4 px-8 py-12 list-none decoration-0">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default ToggleMenu;
