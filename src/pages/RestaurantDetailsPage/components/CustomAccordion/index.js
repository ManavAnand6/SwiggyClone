import React, { useState } from "react";
import "./style.css";
import SvgIcons from "../../../../common/SvgIcons";

export function CustomAccordion({
  title = "Hello",
  children,
  nested = false,
  sectionId = "",
  customRef,
}) {
  const [expanded, setExpanded] = useState(false);

  const changeCaretStatus = () => {
    setExpanded(!expanded);
  };

  const renderTitle = () => {
    if (nested) {
      return (
        <div className="accordion-heading-nested">
          {title}
        </div>
      );
    }
    return (
      <div className="accordion-heading">
        {title}
      </div>
    );
  };

  return expanded ? (
    <div id="accordion-up-container" onClick={changeCaretStatus}>
      <div ref={customRef} id={sectionId} className="align-style">
        {renderTitle()}
        <span>
          <SvgIcons.CaretDown />
        </span>
      </div>
    </div>
  ) : (
    <div id="accordion-down-container" onClick={changeCaretStatus}>
      <div ref={customRef} id={sectionId} className="align-style">
        {renderTitle()}
        <span>
          <SvgIcons.CaretUp />
        </span>
      </div>
      <div>{children}</div>
    </div>
  );
}
