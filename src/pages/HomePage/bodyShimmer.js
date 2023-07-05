import React from "react";

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

export const BodyShimmer = () => {
  return (
    <div id="body-container">
      {Array(10).fill('').map((item, index) => <RestaurantCardShimmer key={index} index={index} />)}
    </div>
  );
};
