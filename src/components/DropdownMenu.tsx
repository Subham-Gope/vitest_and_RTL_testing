import React, { useState } from "react";

const DropDownMenu: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <div>
        <div
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          role="button"
          aria-label="help"
        >
          Menu
        </div>
        {show && (
          <div aria-label="menu" role="menu">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default DropDownMenu;
