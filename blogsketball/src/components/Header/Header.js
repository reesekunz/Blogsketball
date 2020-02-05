import React from "react";
import { Route, NavLink } from "react-router-dom";
import "./Header.scss";
import BlogsketballLogo from "../../images/Blogsketball.png";
function Header() {
  return (
    <div className="header-container">
      <img
        className="blogsketball-logo"
        src={BlogsketballLogo}
        alt="Blogsketball logo"
      />{" "}
    </div>
  );
}

export default Header;
