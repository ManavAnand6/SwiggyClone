import React, { useContext, useState } from "react";
import { imageLink } from "../../../../common/constant";
import SvgIcons from "../../../../common/SvgIcons";
import { StringContext } from "../../../../common/StringProvider";

export function ComponentFoodList({ data }) {
  const [count, setCount] = useState(0);
  const translations = useContext(StringContext);

  const renderButtonText = () => {
    if (count === 0) {
      return <span style={{cursor: 'pointer',}} onClick={addItem} id="add-food-button">{translations.ADD}</span>;
    }
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          fontSize: '13px',
          cursor: 'pointer',
        }}
      >
        <span onClick={removeItem}>-</span>
        <span>{count}</span>
        <span onClick={addItem}>+</span>
      </div>
    );
  };

  const addItem = () => {
    setCount(count + 1);
  };

  const removeItem = () => {
    setCount(count - 1);
  }

  return (
    <div id="food-list-container">
      <div id="food-title-container">
        <div id="bestseller-ribbon-container">
          <SvgIcons.Star />
          <span id="bestseller-ribbon">BestSeller</span>
        </div>
        <span id="food-title">{data?.card?.info?.name}</span>
        <span id="food-price">
          &#8377;{" "}
          {data?.card?.info?.defaultPrice / 100 ||
            data?.card?.info?.price / 100 ||
            ""}
        </span>
        <span id="food-availability">
          {data?.card?.info?.description || ""}
        </span>
      </div>
      <div
        id="food-image-button-container"
        style={
          data?.card?.info?.imageId
            ? {}
            : {
                position: "relative",
                top: "30px",
                right: "20px",
              }
        }
      >
        {data?.card?.info?.imageId && (
          <img
            src={`${imageLink}${data?.card?.info?.imageId}`}
            className="food_image"
            loading="lazy"
            alt="FoodItem"
          />
        )}
        <div className="button">
          {renderButtonText()}
        </div>
      </div>
    </div>
  );
}
