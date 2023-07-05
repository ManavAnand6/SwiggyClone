import React from "react";
import { carouselData } from "../../../../common/constant";

export function CustomCarousel() {
  const imageLink =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/";
  return (
    <div id="carousel-container" className="commonStyle">
      {carouselData.map((imageId) => {
        return (
          <img
            src={`${imageLink}${imageId}`}
            width="260px"
            height="260px"
            key={imageId}
          />
        );
      })}
    </div>
  );
}
