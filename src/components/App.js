import React from "react";
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      {/* Parent Tooltip */}
      <Tooltip text="This is a tooltip">
        <h2>Hover over me</h2>
      </Tooltip>

      <hr />

      {/* Child Tooltip */}
      <Tooltip text="This is another tooltip">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
};

export default App;
