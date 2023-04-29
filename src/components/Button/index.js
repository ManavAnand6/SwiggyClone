import React from "react";

export function Button({
  buttonText = "",
  customStyle = {},
  onClick = () => {},
}) {
  return <div onClick={onClick} style={customStyle}>{buttonText}</div>;
}
