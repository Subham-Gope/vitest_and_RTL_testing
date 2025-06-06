import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const [submit, setSubmit] = useState(false);

  return (
    <>
      <div>
        <input type="text" placeholder="username" />
        <button onClick={() => setSubmit(true)}>
          {submit ? "Submitted" : "Submit"}
        </button>
        {submit && <p>Submission Complete</p>}
      </div>
    </>
  );
};

export default LoginForm;
