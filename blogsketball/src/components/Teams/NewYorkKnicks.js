import React from "react";
import "./teams.scss";
import "./knicks.scss";
import KnicksLogo from "../../images/Knicks.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Zion from "../../images/Zion.jpeg";
import Julius from "../../images/Julius.jpeg";
import Robinson from "../../images/Robinson.jpeg";
import Randle from "../../images/Randle.jpeg";

function Knicks() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">New York Knicks</h3>
        <div className="logo-container">
          <img src={KnicksLogo} alt="Knicks logo" className="team-logo" />
        </div>
      </div>
      <div className="knicks-main-container">
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
              <img src={Zion} alt="Zion Williamson" className="article-img" />
              <NavLink
                to="/2019-redraft"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">2019 Lottery Re-Draft</h5>
              </NavLink>
            </div>
            {/* Top 10 overrated article */}

            <div className="article-card">
              <img src={Julius} alt="Julius Randle" className="article-img" />
              <NavLink
                to="/top-10-overrated"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">
                  {" "}
                  Ranking the Top 10 Most Overrated Players
                </h5>
              </NavLink>
            </div>
            {/* NBA Rank 91-100 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img
                  src={Robinson}
                  alt="Mitchell Robinson"
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
          </div>
          {/* Row 2 */}
          <div className="article-row">
            {/* NBA Rank 61-70 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Randle} alt="Julius Randle" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-61-70"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 61-70</h5>
              </NavLink>
            </div>
            <div className="article-card">
              <img src={KnicksLogo} alt="Knicks logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img src={KnicksLogo} alt="Knicks logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
          </div>
          {/* Row 3 */}
          <div className="article-row">
            <div className="article-card">
              <img src={KnicksLogo} alt="Knicks logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img src={KnicksLogo} alt="Knicks logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img src={KnicksLogo} alt="Knicks logo" className="article-img" />
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

export default Knicks;
