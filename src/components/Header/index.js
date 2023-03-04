import React from "react";
import Images from "../../common/images";
import SvgIcons from "../../common/SvgIcons";
import "./style.css";

export const Header = () => {
  return (
    <div id="header" className="commonStyle">
      <div id="logoContainer">
        {/* <img src={Images.LOGO} alt="logo" id="logo" /> */}
        <div id="logo">
          <SvgIcons.Logo />
        </div>
      </div>

      <div id="navbar-list">
        <ul>
          <a href="/" className="cart-container">
            <SvgIcons.OffersLogo />
            <li className="logo-tag">Offers</li>
          </a>
          <a href="/" className="cart-container">
            <SvgIcons.HelpLogo />
            <li className="logo-tag">Help</li>
          </a>
          <a href="/" className="cart-container">
            <SvgIcons.SignInLogo />
            <li className="logo-tag">Sign In</li>
          </a>
          <a href="/" className="cart-container">
            <span className="cart-logo-container">
              <SvgIcons.CartLogo />
              <span>0</span>
            </span>
            <li>Cart</li>
          </a>
        </ul>
      </div>
    </div>
  );
};
