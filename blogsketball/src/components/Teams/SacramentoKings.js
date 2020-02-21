import React from "react";
import "./teams.scss";
import KingsLogo from "../../images/Kings.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Buddy from "../../images/Buddy.jpeg";
import Harrison from "../../images/Harrison.jpeg";
import Bogdan from "../../images/Bogdan.jpeg";
import Bagley from "../../images/Bagley.jpeg";
function Kings() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Sacramento Kings</h3>
        <div className="logo-container">
          <img src={KingsLogo} alt="Kings logo" className="team-logo" />
        </div>
      </div>
      <button onClick={Layout.PageReload}>
        <IoIosList size={35} />
      </button>
      <button onClick={Layout.CardLayout}>
        <IoIosBrowsers size={35} />
      </button>
      <div className="article-container">
        {/* Row 1  */}
        <div className="article-row">
          {/* Top 10 Underrated Article */}
          <NavLink
            to="/top-10-underrated"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={Buddy} alt="Buddy Hield" className="article-img" />
              </div>
              <h5 className="article-header">
                Ranking the Top 10 Most Underrated Players
              </h5>
            </div>
          </NavLink>
          <NavLink
            to="/top-10-overrated"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img
                  src={Harrison}
                  alt="Harrison Barnes"
                  className="article-img"
                />
              </div>
              <h5 className="article-header">
                Ranking the Top 10 Most Overrated Players
              </h5>
            </div>
          </NavLink>
          {/* NBA Rank 91-100 Article */}
          <NavLink
            to="/nba-rank-91-100"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={Bogdan} alt="Bogdan" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 91-100</h5>
            </div>
          </NavLink>
        </div>
        {/* Row 2 */}
        <div className="article-row">
          {/* NBA Rank 81-90 Article */}
          <NavLink
            to="/nba-rank-81-90"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img
                  src={Bagley}
                  alt="Marvin Bagley III"
                  className="article-img"
                />
              </div>
              <h5 className="article-header">NBA Rank: 81-90</h5>
            </div>
          </NavLink>
          <div className="article-card">
            <img src={KingsLogo} alt="Kings logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img src={KingsLogo} alt="Kings logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
        </div>
        {/* Row 3 */}
        <div className="article-row">
          <div className="article-card">
            <img src={KingsLogo} alt="Kings logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img src={KingsLogo} alt="Kings logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img src={KingsLogo} alt="Kings logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kings;
