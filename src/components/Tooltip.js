import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  // children will be a single React element (like <h2> or <p>)
  // We add tooltip logic directly to that element
  return React.cloneElement(children, {
    className: "tooltip",
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    children: (
      <>
        {children.props.children}
        {show && <div className="tooltiptext">{text}</div>}
      </>
    ),
  });
};

export default Tooltip;
