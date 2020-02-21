import React from "react";
import "./TopSection.scss";
import { NavLink } from "react-router-dom";
import BlogsketballIMG from "../../../images/Blogsketball.png";
import Baylor from "../../../images/Baylor.jpeg";
import CutNet from "../../../images/CutNet.jpeg";
import Bracket from "../../../images/Bracketology.png";
import Jay from "../../../images/Jay.jpeg";

function TopSection() {
  return (
    <div>
      <h2 className="mens-college-basketball-header">
        Men's College Basketball
      </h2>
      <div className="section-1-container">
        {/* Column 1 */}
        <div className="section-1-column-1">
          {/* Ken Pom article */}
          <div className="section-1-second-img">
            <NavLink
              to="/kenpom-analysis"
              activeClassName="activeNavButton"
              className="article-link"
            >
              <img
                className="second-img"
                src={CutNet}
                alt="literally just cutting a net"
              />
              <div className="article-header">
                Using KenPom Ratings to Evaluate Potential National Champions
              </div>
            </NavLink>
          </div>
          {/* Second article  */}
          <div className="section-1-third-img">
            <NavLink
              to="march-is-coming"
              activeClassName="activeNavButton"
              className="article-link"
            >
              <img className="third-img" src={Bracket} alt="Bracketology" />
              <div className="article-header">March is Coming</div>
            </NavLink>
          </div>
        </div>
        {/* Column 2 */}
        {/* Third article  */}
        <div className="section-1-main-img">
          <NavLink
            to="/top-10-ncaa"
            activeClassName="activeNavButton"
            className="article-link"
          >
            <img className="main-img" src={Baylor} alt="Baylor Bears" />
            <div className="article-header">
              {" "}
              Breaking Down The Top-10 Ranked College Basketball Teams
            </div>
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
          {/* Top 10 College Coaches */}
          <div className="section-1-second-img">
            <NavLink
              to="/top-10-college-coaches"
              activeClassName="activeNavButton"
              className="article-link"
            >
              <img className="second-img" src={Jay} alt="Jay Wright" />
              <div className="article-header">
                {" "}
                Ranking the Top-10 Coaches in Men's College Basketball
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
