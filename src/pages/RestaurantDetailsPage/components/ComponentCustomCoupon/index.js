import React from "react";
import './style.css';

export function ComponentCustomCoupon({ data }) {
  const imageLink =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/";
  return (
    <div id="coupon-code-container">
      <div id="upper-container">
        <img
          src={`${imageLink}${data?.info?.offerLogo}`}
          className="coupon-image"
        />
        <span id="coupon-code-upper-text">{data?.info?.header}</span>
      </div>
      <div className="coupon-code-lower-container">
        <span>{data?.info?.couponCode}</span>
        <span> | </span>
        <span>{data?.info?.description}</span>
      </div>
    </div>
  );
}
