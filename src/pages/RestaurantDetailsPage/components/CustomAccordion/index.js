import React, { useState } from "react";
import "./style.css";
import SvgIcons from "../../../../common/SvgIcons";

export function CustomAccordion({ title = "Hello", children, nested = false }) {
  const [expanded, setExpanded] = useState(false);

  const changeCaretStatus = () => {
    setExpanded(!expanded);
  };

  const renderTitle = () => {
    if (nested) {
      return (
        <div className="accordion-heading-nested">{title}</div>
      );
    }
    return <div className="accordion-heading">{title}</div>
  }

  return expanded ? (
    <div id="accordion-up-container" onClick={changeCaretStatus}>
      <div id="up-container" className="align-style">
        {renderTitle()}
        <span>
          <SvgIcons.CaretDown />
        </span>
      </div>
    </div>
  ) : (
    <div id="accordion-down-container" onClick={changeCaretStatus}>
      <div id="down-container" className="align-style">
        {renderTitle()}
        <span>
          <SvgIcons.CaretUp />
        </span>
      </div>
      <div>{children}</div>
    </div>
  );
}
