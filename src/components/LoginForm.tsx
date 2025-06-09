import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const [submit, setSubmit] = useState<boolean>(false);

  const handleClick = (): void => {
    setSubmit(false);
  };

  return (
    <>
      <div>
        <input type="text" placeholder="username" />
        <button onClick={handleClick}>{submit ? "Submitted" : "Submit"}</button>
        {submit && <p>Submission Complete</p>}
      </div>
    </>
  );
};

export default LoginForm;
