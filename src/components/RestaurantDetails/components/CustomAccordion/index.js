import React, { useState } from "react";
import "./style.css";
import SvgIcons from "../../../../common/SvgIcons";

export function CustomAccordion({ title = "Hello" }) {
  const [expanded, setExpanded] = useState(false);

  const changeCaretStatus = () => {
    setExpanded(!expanded);
  };

  return !expanded ? (
    <div id="accordion-up-container">
      <div id="up-container" className="align-style">
        <div className="accordion-heading">{title}</div>
        <span onClick={changeCaretStatus}>
          <SvgIcons.CaretUp />
        </span>
      </div>
    </div>
  ) : (
    <div id="accordion-down-container">
      <div id="down-container" className="align-style">
        <div className="accordion-heading">{title}</div>
        <span onClick={changeCaretStatus}>
          <SvgIcons.CaretDown />
        </span>
      </div>
    </div>
  );
}
