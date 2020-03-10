import React from "react";
import "./teams.scss";
import "./raptors.scss";
import RaptorsLogo from "../../images/Raptors.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Kyle from "../../images/Kyle.jpeg";
import Fred from "../../images/Fred.jpeg";
import Serge from "../../images/Serge.jpeg";
import Lowry from "../../images/Lowry.jpeg";
import Pascal from "../../images/Pascal.jpeg";
function Raptors() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Toronto Raptors</h3>
        <div className="logo-container">
          <img src={RaptorsLogo} alt="Raptors logo" className="team-logo" />
        </div>
      </div>
      <div className="raptors-main-container">
        <button onClick={Layout.PageReload}>
          <IoIosList size={35} />
        </button>
        <button onClick={Layout.CardLayout}>
          <IoIosBrowsers size={35} />
        </button>
        <div className="article-container">
          {/* Row 1  */}
          <div className="article-row">
            <div className="article-card">
              <div className="article-img-container">
                <img src={Kyle} alt="Kyle Lowry" className="article-img" />
              </div>
              <NavLink
                to="/top-10-overrated"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">
                  Ranking the Top 10 Most Overrated Players
                </h5>
              </NavLink>
            </div>
            {/* NBA Rank 81-90 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Fred} alt="Fred" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-81-90"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 81-90</h5>
              </NavLink>
            </div>
            {/* NBA Rank 71-80 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Serge} alt="Serge Ibaka" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-71-80"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 71-80</h5>
              </NavLink>
            </div>
          </div>
          {/* Row 2 */}
          <div className="article-row">
            {/* NBA Rank 41-50 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Lowry} alt="Kyle Lowry" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-41-50"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 41-50</h5>
              </NavLink>
            </div>
            {/* NBA Rank 21-30 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Pascal} alt="Pascal" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-21-30"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 21-30</h5>
              </NavLink>
            </div>
            <div className="article-card">
              <img
                src={RaptorsLogo}
                alt="Raptors logo"
                className="article-img"
              />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
          </div>
          {/* Row 3 */}
          <div className="article-row">
            <div className="article-card">
              <img
                src={RaptorsLogo}
                alt="Raptors logo"
                className="article-img"
              />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img
                src={RaptorsLogo}
                alt="Raptors logo"
                className="article-img"
              />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img
                src={RaptorsLogo}
                alt="Raptors logo"
                className="article-img"
              />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Raptors;
