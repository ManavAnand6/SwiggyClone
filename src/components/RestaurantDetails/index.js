import React from "react";
import Images from "../../common/images";
import SvgIcons from "../../common/SvgIcons";
import "./style.css";

export function RestaurantDetails() {
  return (
    <div id="restaurant-details-container" className="borderStyle">
      <div id="first-container">
        <div id="restaurant-container">
          <div id="restaurant-name">
            Chawla's Chicken Corner ( Geeta Colony)
          </div>
          <div id="cuisine">North Indian, Mughlai</div>
          <div id="restaurant-address">
            <div>Krishna Nagar</div>
            <div>0.6 Km</div>
          </div>
        </div>
        <div id="restaurant-rating-container">
          <div id="rating-container-upper">
            <span id="rating-star">
              <SvgIcons.Star />
            </span>
            <span>4.1</span>
          </div>
          <span>100+ ratings</span>
        </div>
      </div>
    </div>
  );
}
