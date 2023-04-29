import React from "react";
import { styles } from "./style";

export function SwiggyFeatures({
  imageLink, width, height, heading, subHeading,
}) {
  return (
    <div style={styles.swiggyFeaturesContainerStyle}>
      <img src={`${imageLink}`} width={width} height={height} />
      <div style={styles.secondContainerHeadingStyle}>{heading}</div>
      <div style={styles.secondContainerSubHeadingStyle}>{subHeading}</div>
    </div>
  );
}
