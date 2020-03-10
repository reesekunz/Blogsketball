import React from "react";
import "./teams.scss";
import "./twolves.scss";
import TWolvesLogo from "../../images/TWolves.jpeg";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Zion from "../../images/Zion.jpeg";
import Malik from "../../images/Malik.jpeg";
import DLO from "../../images/DLO.jpeg";
import Towns from "../../images/Towns.jpeg";
function TWolves() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Minnesota Timberwolves</h3>
        <div className="logo-container">
          <img src={TWolvesLogo} alt="TWolves logo" className="team-logo" />
        </div>
      </div>
      <div className="twolves-main-container">
        <button onClick={Layout.PageReload}>
          <IoIosList size={35} />
        </button>
        <button onClick={Layout.CardLayout}>
          <IoIosBrowsers size={35} />
        </button>
        <div className="article-container">
          {/* Row 1  */}
          <div className="article-row">
            {/* 2019 lottery redraft */}

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
              <img src={Malik} alt="Malik beasley" className="article-img" />
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
            {/* NBA Rank 31-40 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={DLO} alt="DLO" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-31-40"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 31-40</h5>
              </NavLink>
            </div>
          </div>
          {/* Row 2 */}
          <div className="article-row">
            {/* NBA Rank 11-15 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Towns} alt="KAT" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-11-15"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 11-15</h5>
              </NavLink>
            </div>
            <div className="article-card">
              <img
                src={TWolvesLogo}
                alt="TWolves logo"
                className="article-img"
              />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img
                src={TWolvesLogo}
                alt="TWolves logo"
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
                src={TWolvesLogo}
                alt="TWolves logo"
                className="article-img"
              />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img
                src={TWolvesLogo}
                alt="TWolves logo"
                className="article-img"
              />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img
                src={TWolvesLogo}
                alt="TWolves logo"
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

export default TWolves;
