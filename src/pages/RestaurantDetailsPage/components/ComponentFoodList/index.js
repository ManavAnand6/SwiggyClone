import React from "react";
import "./style.css";
import { imageLink } from "../../../../common/constant";
import SvgIcons from "../../../../common/SvgIcons";

export function ComponentFoodList({ data }) {
  return (
    <div id="food-list-container">
      <div id="food-title-container">
        <div id="bestseller-ribbon-container">
          <SvgIcons.Star />
          <span id="bestseller-ribbon">BestSeller</span>
        </div>
        <span id="food-title">{data?.card?.info?.name}</span>
        <span id="food-price">&#8377; {data?.card?.info?.defaultPrice/100 || data?.card?.info?.price/100 || ''}</span>
        <span id="food-availability">
          {data?.card?.info?.description || ""}
        </span>
      </div>
      <div id="food-image-button-container" style={data?.card?.info?.imageId ? {} : {
        position: 'relative',
        top: "30px",
        right: "20px",
      }}>
        {data?.card?.info?.imageId && (
          <img
            src={`${imageLink}${data?.card?.info?.imageId}`}
            className="food_image"
            loading="lazy"
            alt="FoodItem"
          />
        )}
        <div id="add-food-button">
          <span>ADD</span>
        </div>
      </div>
    </div>
  );
}
