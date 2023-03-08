import React from "react";
import Images from "../../../../common/images";
import "./style.css";

export function RestaurantCard({ data }) {
  const imageLink =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
  return (
    <div className="restaurant-card">
      <img
        src={`${imageLink}${data?.data?.data?.cloudinaryImageId}`}
        alt="foodItem"
        width="254px"
        height="160px"
      />
      <div id="restaurant-heading">{data?.data?.data?.name}</div>
      <div id="restaurant-subheading">{data?.data?.data?.cuisines?.join(", ")}</div>
      <div id="restaurant-subContainer">
        <div id="rating-container">
          <img src={Images.STAR} />
          <div>{data?.data?.data?.avgRating}</div>
        </div>
        <div className="dot-container"></div>
        <div>{data?.data?.data?.slaString}</div>
        <div className="dot-container"></div>
        <div>{data?.data?.data?.costForTwoString}</div>
      </div>
    </div>
  );
}
