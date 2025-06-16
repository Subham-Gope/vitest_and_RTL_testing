import React from "react";
import ToggleMenu from "./components/ToggleMenu";

const App: React.FC = () => {
  return (
    <div>
      <ToggleMenu
        message={"Testing Component"}
        assignmentNumber={5}
        status={true}
      />
    </div>
  );
};

export default App;
