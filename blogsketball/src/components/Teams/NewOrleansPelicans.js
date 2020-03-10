import React from "react";
import "./teams.scss";
import "./pelicans.scss";
import PelicansLogo from "../../images/Pelicans.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Zion from "../../images/Zion.jpeg";
import Lonzo from "../../images/Lonzo.jpeg";
import Ball from "../../images/Ball.jpeg";
import Jrue from "../../images/Jrue.jpeg";
import Williamson from "../../images/Williamson.jpeg";
import BI from "../../images/BI.jpeg";
function Pelicans() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">New Orleans Pelicans</h3>
        <div className="logo-container">
          <img src={PelicansLogo} alt="Pelicans logo" className="team-logo" />
        </div>
      </div>
      <div className="pelicans-main-container">
        <button onClick={Layout.PageReload}>
          <IoIosList size={35} />
        </button>
        <button onClick={Layout.CardLayout}>
          <IoIosBrowsers size={35} />
        </button>
        <div className="article-container">
          {/* Row 1  */}
          <div className="article-row">
            {/* Loterry redraft article */}

            <div className="article-card">
              <img src={Zion} alt="Zion Williamson" className="article-img" />
              <NavLink
                to="/2019-redraft"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">2019 Lottery Re-Draft</h5>
              </NavLink>
            </div>
            {/* Top 10 underrated article */}

            <div className="article-card">
              <img src={Lonzo} alt="Lonzo ball" className="article-img" />
              <NavLink
                to="/top-10-underrated"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">
                  {" "}
                  Ranking the Top 10 Most Underrated Players
                </h5>
              </NavLink>
            </div>
            {/* NBA Rank 71-80 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Ball} alt="Lonzo Ball" className="article-img" />
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
            {/* NBA Rank 31-40 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Jrue} alt="Jrue Holiday" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-31-40"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 31-40</h5>
              </NavLink>
            </div>
            {/* NBA Rank 31-40 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Williamson} alt="Zion" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-31-40"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 31-40</h5>
              </NavLink>
            </div>
            {/* NBA Rank 21-30 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={BI} alt="BI" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-21-30"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 21-30</h5>
              </NavLink>
            </div>
          </div>
          {/* Row 3 */}
          <div className="article-row">
            <div className="article-card">
              <img
                src={PelicansLogo}
                alt="Pelicans logo"
                className="article-img"
              />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img
                src={PelicansLogo}
                alt="Pelicans logo"
                className="article-img"
              />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img
                src={PelicansLogo}
                alt="Pelicans logo"
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

export default Pelicans;
