import React from "react";
import "./teams.scss";
import NuggetsLogo from "../../images/Nuggets.jpeg";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Monte from "../../images/Monte.jpeg";
import Gary from "../../images/Gary.jpeg";
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
          <div className="article-card">
            <img src={NuggetsLogo} alt="Nuggets logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
        </div>
        {/* Row 2 */}
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
