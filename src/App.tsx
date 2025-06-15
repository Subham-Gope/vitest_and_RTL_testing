import React from "react";
import ShiftToggle from "./components/ShiftToggle";

const App: React.FC = () => {
  return (
    <>
      <ShiftToggle message={"Hello there"} num={5} done={true} />
    </>
  );
};

export default App;
