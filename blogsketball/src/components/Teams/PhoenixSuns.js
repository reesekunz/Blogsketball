import React from "react";
import "./teams.scss";
import "./suns.scss";
import SunsLogo from "../../images/Suns.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Zion from "../../images/Zion.jpeg";
import Mikal from "../../images/Mikal.jpeg";
import Ricky from "../../images/Ricky.jpeg";
// import Kelly from "../../images/Kelly.jpeg";
import Ayton from "../../images/Ayton.jpeg";
import Booker from "../../images/Booker.jpeg";
function Suns() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Phoenix Suns</h3>
        <div className="logo-container">
          <img src={SunsLogo} alt="Suns logo" className="team-logo" />
        </div>
      </div>
      <div className="suns-main-container">
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
            {/* Top 10 underrated article */}

            <div className="article-card">
              <img src={Mikal} alt="Mikal Bridges" className="article-img" />
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
            {/* NBA Rank 61-70 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Ricky} alt="Ricky" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-61-70"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 61-70</h5>
              </NavLink>
            </div>
          </div>
          {/* Row 2 */}
          <div className="article-row">
            {/* NBA Rank 31-40 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Ayton} alt="Ayton" className="article-img" />
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
                <img src={Booker} alt="Devin Booker" className="article-img" />
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
              <img src={SunsLogo} alt="Suns logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
          </div>
          {/* Row 3 */}
          <div className="article-row">
            <div className="article-card">
              <img src={SunsLogo} alt="Suns logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img src={SunsLogo} alt="Suns logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img src={SunsLogo} alt="Suns logo" className="article-img" />
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

export default Suns;
