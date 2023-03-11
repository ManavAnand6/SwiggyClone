import React from "react";
import SvgIcons from "../../common/SvgIcons";
import { ComponentCustomCoupon, CustomAccordion } from "./components";
import "./style.css";

export function RestaurantDetails() {
  return (
    <div id="restaurant-details-container" className="borderStyle">
      <div id="first-container">
        <div id="restaurant-container">
          <div id="restaurant-name">
            Chawla's Chicken Corner ( Geeta Colony )
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
      <div id="second-container">
        <div id="delivery-details-container">
          <div className="details-container">
            <SvgIcons.TimerLogo />
            <span className="detailsStyle">29 Mins</span>
          </div>
          <div className="details-container">
            <SvgIcons.RupeeLogo />
            <span className="detailsStyle">200 For Two</span>
          </div>
        </div>
        <div id="coupon-list">
          <ComponentCustomCoupon />
          <ComponentCustomCoupon />
          <ComponentCustomCoupon />
        </div>
      </div>
      <div id="third-container">
        <CustomAccordion title="Recommended"/>
        <CustomAccordion title="Hello"/>
        <CustomAccordion title="Hello"/>
        <CustomAccordion title="Hello"/>
      </div>
    </div>
  );
}
