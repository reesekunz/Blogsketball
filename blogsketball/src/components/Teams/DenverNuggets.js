import React from "react";
import "./teams.scss";
import NuggetsLogo from "../../images/Nuggets.jpeg";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Monte from "../../images/Monte.jpeg";
import Gary from "../../images/Gary.jpeg";
import MPJ from "../../images/MPJ.jpeg";
import Paul from "../../images/Paul.jpeg";
import Jamal from "../../images/Jamal.jpeg";
import Jokic from "../../images/Jokic.jpeg";
function Nuggets() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Denver Nuggets</h3>
        <div className="logo-container">
          <img src={NuggetsLogo} alt="Nuggetslogo" className="team-logo" />
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
                <img src={Monte} alt="Monte Morris" className="article-img" />
              </div>
              <h5 className="article-header">
                Ranking the Top 10 Most Underrated Players
              </h5>
            </div>
          </NavLink>
          {/* Top 10 Overrated Article */}
          <NavLink
            to="/top-10-overrated"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={Gary} alt="Gary Harris" className="article-img" />
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
                <img src={MPJ} alt="MPJ" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 91-100</h5>
            </div>
          </NavLink>
        </div>
        {/* Row 2 */}
        <div className="article-row">
          {/* NBA Rank 71-80 Article */}
          <NavLink
            to="/nba-rank-71-80"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={Paul} alt="Paul Millsap" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 71-80</h5>
            </div>
          </NavLink>
          {/* NBA Rank 41-50 Article */}
          <NavLink
            to="/nba-rank-41-50"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={Jamal} alt="Jamal Murray" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 41-50</h5>
            </div>
          </NavLink>
          {/* NBA Rank 6-10 Article */}
          <NavLink
            to="/nba-rank-6-10"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={Jokic} alt="Jokic" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 6-10</h5>
            </div>
          </NavLink>
        </div>
        {/* Row 3 */}
        <div className="article-row">
          <div className="article-card">
            <img src={NuggetsLogo} alt="Nuggets logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img src={NuggetsLogo} alt="Nuggets logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img src={NuggetsLogo} alt="Nuggets logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nuggets;
