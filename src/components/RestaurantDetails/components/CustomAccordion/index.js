import React, { useState } from "react";
import "./style.css";
import SvgIcons from "../../../../common/SvgIcons";

export function CustomAccordion({ title = "Hello", children }) {
  const [expanded, setExpanded] = useState(false);

  const changeCaretStatus = () => {
    setExpanded(!expanded);
  };

  return expanded ? (
    <div id="accordion-up-container" onClick={changeCaretStatus}>
      <div id="up-container" className="align-style">
        <div className="accordion-heading">{title}</div>
        <span>
          <SvgIcons.CaretDown />
        </span>
      </div>
    </div>
  ) : (
    <div id="accordion-down-container" onClick={changeCaretStatus}>
      <div id="down-container" className="align-style">
        <div className="accordion-heading">{title}</div>
        <span>
          <SvgIcons.CaretUp />
        </span>
      </div>
      <div>{children}</div>
    </div>
  );
}
