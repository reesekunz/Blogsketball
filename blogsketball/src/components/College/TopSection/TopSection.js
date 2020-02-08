import React from "react";
import "./TopSection.scss";
import { NavLink } from "react-router-dom";
import BlogsketballIMG from "../../../images/Blogsketball.png";

function TopSection() {
  return (
    <div>
      <h2 className="mens-college-basketball-header">
        Men's College Basketball
      </h2>
      <div className="section-1-container">
        {/* Column 1 */}
        <div className="section-1-column-1">
          {/* First article */}
          <div className="section-1-second-img">
            <NavLink
              to="/kenny-bear-attack"
              activeClassName="activeNavButton"
              className="article-link"
            >
              <img
                className="second-img"
                src={BlogsketballIMG}
                alt="Secondary article image"
              />
              <div className="article-header">Second Article </div>
            </NavLink>
          </div>
          {/* Second article  */}
          <div className="section-1-third-img">
            <NavLink
              to="/steele-stadium-wall"
              activeClassName="activeNavButton"
              className="article-link"
            >
              <img
                className="third-img"
                src={BlogsketballIMG}
                alt="Steele Stadium"
              />
              <div className="article-header">Third article</div>
            </NavLink>
          </div>
        </div>
        {/* Column 2 */}
        {/* Third article  */}
        <div className="section-1-main-img">
          <NavLink
            to="/pablo-scandal"
            activeClassName="activeNavButton"
            className="article-link"
          >
            <img
              className="main-img"
              src={BlogsketballIMG}
              alt="Pablo Cheating Scandals"
            />
            <div className="article-header">Main Article </div>
          </NavLink>
        </div>
        {/* Column 3 */}
        <div className="section-1-column-3">
          {/* Fourth article  */}
          <div className="section-1-third-img">
            <NavLink
              to="/marky-is-killing-it"
              activeClassName="activeNavButton"
              className="article-link"
            >
              <img
                className="third-img"
                src={BlogsketballIMG}
                alt="Marky Dubios"
              />
              <div className="article-header">Third article</div>
            </NavLink>
          </div>
          {/* Fifth article  */}
          <div className="section-1-second-img">
            <NavLink
              to="/where-are-they-now"
              activeClassName="activeNavButton"
              className="article-link"
            >
              <img
                className="second-img"
                src={BlogsketballIMG}
                alt="Where are they now"
              />
              <div className="article-header">Second Article</div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
