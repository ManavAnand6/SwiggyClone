import React from "react";
import Images from "../../common/images";
import SvgIcons from "../../common/SvgIcons";

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
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/">
            <li>About Us</li>
          </a>
          <a href="/">
            <li>Contact Us</li>
          </a>
          <a href="/">
            <li>Cart</li>
          </a>
        </ul>
      </div>
    </div>
  );
};
