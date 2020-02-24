import React from "react";
import "./teams.scss";
import HeatLogo from "../../images/Heat.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Zion from "../../images/Zion.jpeg";
import Jae from "../../images/Jae.jpeg";
import Dragic from "../../images/Dragic.jpeg";
import Bam from "../../images/Bam.jpeg";
import Jimmy from "../../images/Jimmy.jpeg";
function Heat() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Miami Heat</h3>
        <div className="logo-container">
          <img src={HeatLogo} alt="Heat logo" className="team-logo" />
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
          <NavLink
            to="/2019-redraft"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <img src={Zion} alt="Zion Williamson" className="article-img" />
              <h5 className="article-header">2019 Lottery Re-Draft</h5>
            </div>
          </NavLink>
          <NavLink
            to="/top-10-overrated"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={Jae} alt="Jae Crowder" className="article-img" />
              </div>
              <h5 className="article-header">
                Ranking the Top 10 Most Overrated Players
              </h5>
            </div>
          </NavLink>
          {/* NBA Rank 71-80 Article */}
          <NavLink
            to="/nba-rank-71-80"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={Dragic} alt="Dragic" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 71-80</h5>
            </div>
          </NavLink>
        </div>
        {/* Row 2 */}
        <div className="article-row">
          {/* NBA Rank 21-30 Article */}
          <NavLink
            to="/nba-rank-21-30"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={Bam} alt="Bam Bam" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 21-30</h5>
            </div>
          </NavLink>
          {/* NBA Rank 16-20 Article */}
          <NavLink
            to="/nba-rank-16-20"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={Jimmy} alt="Jimmy Butler" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 16-20</h5>
            </div>
          </NavLink>
          <div className="article-card">
            <img src={HeatLogo} alt="Heat logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
        </div>
        {/* Row 3 */}
        <div className="article-row">
          <div className="article-card">
            <img src={HeatLogo} alt="Heat logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img src={HeatLogo} alt="Heat logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img src={HeatLogo} alt="Heat logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Heat;
