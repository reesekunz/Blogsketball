import React from "react";
import "./teams.scss";
import "./spurs.scss";
import SpursLogo from "../../images/Spurs.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Derrick from "../../images/Derrick.jpeg";
import Dejounte from "../../images/Dejounte.jpeg";
import Aldridge from "../../images/Aldridge.jpeg";
import Demar from "../../images/Demar.jpeg";
function Spurs() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">San Antonio Spurs</h3>
        <div className="logo-container">
          <img src={SpursLogo} alt="Spurs logo" className="team-logo" />
        </div>
      </div>
      <div className="spurs-main-container">
        <button onClick={Layout.PageReload}>
          <IoIosList size={35} />
        </button>
        <button onClick={Layout.CardLayout}>
          <IoIosBrowsers size={35} />
        </button>
        <div className="article-container">
          {/* Row 1  */}
          <div className="article-row">
            {/* Top 10 underrated article */}

            <div className="article-card">
              <img src={Derrick} alt="Derrick White" className="article-img" />
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
            {/* NBA Rank 91-100 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img
                  src={Dejounte}
                  alt="Dejounte Murray"
                  className="article-img"
                />
              </div>
              <NavLink
                to="/nba-rank-91-100"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 91-100</h5>
              </NavLink>
            </div>
            {/* NBA Rank 41-50 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Aldridge} alt="Aldridge" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-41-50"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 41-50</h5>
              </NavLink>
            </div>
          </div>
          {/* Row 2 */}
          <div className="article-row">
            {/* NBA Rank 31-40 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Demar} alt="DeMar DeRozan" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-31-40"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 31-40</h5>
              </NavLink>
            </div>
            <div className="article-card">
              <img src={SpursLogo} alt="Spurs logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img src={SpursLogo} alt="Spurs logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
          </div>
          {/* Row 3 */}
          <div className="article-row">
            <div className="article-card">
              <img src={SpursLogo} alt="Spurs logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img src={SpursLogo} alt="Spurs logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img src={SpursLogo} alt="Spurs logo" className="article-img" />
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

export default Spurs;
