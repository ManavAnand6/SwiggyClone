import React from "react";
import styles from "./style";
import { useSelector } from "react-redux";

export function ItemList({ title, noOfItems, sectionScroll, sectionId }) {
  const { visibleSectionId } = useSelector((state) => state.restaurantDetailsPage);
  let showIcon = sectionId === visibleSectionId;

  return (
    <div onClick={sectionScroll} style={styles.itemContainerStyle}>
      <div style={styles.itemIconStyle(showIcon)} />
      <div style={styles.itemSubContainerStyle}>
        <div style={styles.selectedTitleStyle(showIcon)}>{title}</div>
        <div style={styles.itemCountStyle}>{noOfItems}</div>
      </div>
    </div>
  );
}
