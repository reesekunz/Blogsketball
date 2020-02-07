import React from "react";
import "./BottomSection.scss";
import { NavLink } from "react-router-dom";
import BlogksetballIMG from "../../../images/Blogsketball.png";

function Section2() {
  return (
    <div className="section-2-container">
      <div className="section-header-container">
        <h2 className="section-header">Latest</h2>
      </div>
      <div className="section-2-content">
        {/* 6th article  */}
        <div className="section-2-main-img">
          <NavLink
            to="/pete-wheeler-promoted"
            activeClassName="activeNavButton"
            className="article-link"
          >
            <img className="main-image" src={BlogksetballIMG} alt="Pete" />
            <div className="article-header">
              Article Header: blah blah blah blah blah blah
            </div>
          </NavLink>
        </div>
        <div className="second-img-container">
          {/* 7th article  */}
          <div className="section-2-second-img">
            <NavLink
              to="/annie-suspended"
              activeClassName="activeNavButton"
              className="article-link"
            >
              <img
                className="secondary-image"
                src={BlogksetballIMG}
                alt="Annie"
              />
              <div className="article-link">
                Article Header: blah blah blah blah blah blah
              </div>
            </NavLink>
          </div>
          <div className="section-2-second-img">
            {/* 8th article  */}
            <NavLink
              to="/vinnie-the-gooch-rager"
              activeClassName="activeNavButton"
              className="article-link"
            >
              <img
                className="secondary-image"
                src={BlogksetballIMG}
                alt="Vinnie"
              />
              <div className="article-link">
                Article Header: blah blah blah blah blah blah
              </div>
            </NavLink>
          </div>
          <div className="section-2-second-img">
            {/* 9th article  */}
            <NavLink
              to="/lisa-crockett-dui"
              activeClassName="activeNavButton"
              className="article-link"
            >
              <img
                className="secondary-image"
                src={BlogksetballIMG}
                alt="Lisa"
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

export default Section2;
