import React from "react";
import EchoLiteralCharacter from "./components/EchoLiteralCharacter";

const App: React.FC = () => {
  return (
    <>
      <EchoLiteralCharacter
        message={"Testing Component"}
        assignmentNumber={5}
        status={true}
      />
    </>
  );
};

export default App;
