import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // We must add the tooltip class and events directly to the child element
  return React.cloneElement(children, {
    className: `${children.props.className || ""} tooltip`.trim(),
    onMouseEnter: () => setIsVisible(true),
    onMouseLeave: () => setIsVisible(false),
    children: (
      <>
        {children.props.children}
        {isVisible && <div className="tooltiptext">{text}</div>}
      </>
    ),
  });
};

export default Tooltip;
