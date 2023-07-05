import React from "react";

export function Button({
  buttonText = "",
  customStyle = {},
  onClick = () => {},
  className = ""
}) {
  return <div className={className} onClick={onClick} style={customStyle}>{buttonText}</div>;
}
