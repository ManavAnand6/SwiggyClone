import React from "react";
import "./style.css";

export const BodyShimmer = () => {
  const RestaurantCardShimmer = () => {
    return (
      <div className="card-shimmer">
        <div id="image-Shimmer" />
        <div id="heading-shimmer" />
        <div id="subHeading-shimmer" />
        <div id="restaurant-subContainer">
          <div className="details-shimmer" />
          <div className="details-shimmer" />
          <div className="details-shimmer" />
        </div>
      </div>
    );
  };

  return (
    <div id="body-container">
      {Array(10).fill('').map(() => <RestaurantCardShimmer />)}
    </div>
  );
};
