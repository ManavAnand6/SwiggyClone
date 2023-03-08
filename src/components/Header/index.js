import React from "react";
import { Link } from "react-router-dom";
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
          <Link to={"/"} className="cart-container">
            <SvgIcons.OffersLogo />
            <li className="logo-tag">Offers</li>
          </Link>
          <Link to={"/about"} className="cart-container">
            <SvgIcons.HelpLogo />
            <li className="logo-tag">Help</li>
          </Link>
          <Link to={"/contact"} className="cart-container">
            <SvgIcons.SignInLogo />
            <li className="logo-tag">Sign In</li>
          </Link>
          <Link to={"/"} className="cart-container">
            <span className="cart-logo-container">
              <SvgIcons.CartLogo />
              <span>0</span>
            </span>
            <li>Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
