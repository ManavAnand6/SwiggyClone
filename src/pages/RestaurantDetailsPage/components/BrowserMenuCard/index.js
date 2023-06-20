import React from "react";
import styles from "./style";
import { ItemList } from "./components";
import { constants } from "../../constantRestaurantDetails";

export function BrowserMenuCard({ data = [], scrollToSection = () => {} }) {
  const { TYPE_ITEM, TYPE_NESTED_ITEMS } = constants;

  const renderItemList = () => {
    const itemListData = data.map((item) => {
      const type = item?.card?.card?.["@type"];
      const { title } = item?.card?.card;
      const sectionId = `section_${title}`;
      const sectionScroll = () => {
        scrollToSection(sectionId);
      };
      switch (type) {
        case TYPE_NESTED_ITEMS:
          const { categories } = item?.card?.card;
          return (
            <ItemList
              sectionId={sectionId}
              title={title}
              noOfItems={categories?.length || 0}
              sectionScroll={sectionScroll}
            />
          );
        case TYPE_ITEM:
          const { itemCards } = item?.card?.card;
          return (
            <ItemList
              sectionId={sectionId}
              title={title}
              noOfItems={itemCards?.length || 0}
              sectionScroll={sectionScroll}
            />
          );
        default:
          return null;
      }
    });
    return itemListData;
  };

  return (
    <div style={styles.browserMenuCardContainerStyle}>
      <div style={styles.browserMenuCardItemContainerStyle}>
        {renderItemList()}
      </div>
    </div>
  );
}
