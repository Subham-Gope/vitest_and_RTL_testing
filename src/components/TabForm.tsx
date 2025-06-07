import React from "react";

interface TabFormProps {
  message: string;
}

const TabForm: React.FC<TabFormProps> = ({ message }) => {
  return (
    <>
      <div>
        <p>{message}</p>
        <div>
          <label htmlFor="firstName">
            First Name{" "}
            <input type="text" id="firstName" placeholder="First name" />
          </label>

          <label htmlFor="lastName">
            Last Name{" "}
            <input type="text" id="lastName" placeholder="Last name" />
          </label>
        </div>
      </div>
    </>
  );
};

export default TabForm;
