import React from "react";
import './style.css';

export function ComponentCustomCoupon() {
  const imageLink =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/";
  return (
    <div id="coupon-code-container">
      <div id="upper-container">
        <img
          src={`${imageLink}rng/md/ads/production/cd60f23dc2ac83be906d0f6ba55d3d12`}
          className="coupon-image"
        />
        <span id="coupon-code-upper-text">FLAT ₹100 OFF</span>
      </div>
      <div className="coupon-code-lower-container">
        <span>USE ICICINB100</span>
        <span> | </span>
        <span>ABOVE ₹700</span>
      </div>
    </div>
  );
}
