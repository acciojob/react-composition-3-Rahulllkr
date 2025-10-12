import React, { useState } from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className="tooltip"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {/* Do not remove the main div */}
        {show && <h2 style={{ backgroundColor: "red" }}>This is a tooltip</h2>}
        <h1>Hover Over Me</h1>
      </div>
      <hr />
      <div>
        <Tooltip text={"This is another tooltip"} />
      </div>
    </>
  );
};

export default App;
