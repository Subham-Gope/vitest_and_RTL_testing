import React from "react";
import EmailInput from "./components/EmailInput";

const App: React.FC = () => {
  return (
    <>
      <EmailInput
        message={`This is testing the userEvent.type feature`}
        assignment={1}
      />
    </>
  );
};

export default App;
