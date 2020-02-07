import React from "react";
import "./MiddleSection.scss";
import { NavLink } from "react-router-dom";
import BlogksetballIMG from "../../../images/Blogsketball.png";

function BottomSection() {
  return (
    <div className="section-3-container">
      <div className="section-header-container">
        <h2 className="section-header">Featured</h2>
      </div>
      <div className="section-3-content">
        {/* 10th article  */}
        <div className="section-3-main-img">
          <NavLink
            to="/pablos-decision"
            activeClassName="activeNavButton"
            className="article-link"
          >
            <img
              className="main-image"
              src={BlogksetballIMG}
              alt="Mystery Hat"
            />
            <div className="article-header">
              {" "}
              Article Header: blah blah blah blah blah blah
            </div>
          </NavLink>
        </div>
        <div className="second-img-container">
          {/* 11th article  */}
          <div className="section-3-second-img">
            <NavLink
              to="/dante-passes-chestnut"
              activeClassName="activeNavButton"
              className="article-link"
            >
              <img
                className="secondary-image"
                src={BlogksetballIMG}
                alt="Dante"
              />
              <div className="article-link">
                Article Header: blah blah blah blah blah blah
              </div>
            </NavLink>
          </div>
          <div className="section-3-second-img">
            {/* 12th article  */}
            <NavLink
              to="/clanky-marries-roomba"
              activeClassName="activeNavButton"
              className="article-link"
            >
              <img
                className="secondary-image"
                src={BlogksetballIMG}
                alt="Secondary article image"
              />
              <div className="article-link">
                {" "}
                Article Header: blah blah blah blah blah blah
              </div>
            </NavLink>
          </div>
          <div className="section-3-second-img">
            {/* 13th article  */}
            <NavLink
              to="/mikey-died"
              activeClassName="activeNavButton"
              className="article-link"
            >
              <img
                className="secondary-image"
                src={BlogksetballIMG}
                alt="Secondary article image"
              />
              <div className="article-link">
                Article Header: blah blah blah blah blah blah
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomSection;
