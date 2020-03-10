import React from "react";
import "./teams.scss";
import "./lakers.scss";
import LakersLogo from "../../images/Lakers.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import KobeChampionship from "../../images/KobeChampionship.jpeg";
import { NavLink } from "react-router-dom";
import Rajon from "../../images/Rajon.jpeg";
import AD from "../../images/AD.jpeg";
import Lebron from "../../images/Lebron.jpeg";
function Lakers() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Los Angeles Lakers</h3>
        <div className="logo-container">
          <img src={LakersLogo} alt="Lakers logo" className="team-logo" />
        </div>
      </div>
      <div className="lakers-main-container">
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
                <img
                  src={KobeChampionship}
                  alt="Kobe championship"
                  className="article-img"
                />
              </div>
              <NavLink
                to="/legit-contenders"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">
                  Who Are Legitimate Title Contenders? Post Trade-Deadline
                  Edition
                </h5>
              </NavLink>
            </div>

            <div className="article-card">
              <div className="article-img-container">
                <img src={Rajon} alt="Rajon Rondo" className="article-img" />
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
            {/* NBA Rank 6-10 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={AD} alt="AD" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-6-10"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 6-10</h5>
              </NavLink>
            </div>
          </div>
          {/* Row 2 */}
          <div className="article-row">
            {/* NBA Rank 1-5 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Lebron} alt="Lebron" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-1-5"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 1-5</h5>
              </NavLink>
            </div>
            <div className="article-card">
              <div className="article-img-container">
                <img
                  src={LakersLogo}
                  alt="Lakers logo"
                  className="article-img"
                />
              </div>

              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <div className="article-img-container">
                <img
                  src={LakersLogo}
                  alt="Lakers logo"
                  className="article-img"
                />
              </div>

              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
          </div>
          {/* Row 3 */}
          <div className="article-row">
            <div className="article-card">
              <div className="article-img-container">
                <img
                  src={LakersLogo}
                  alt="Lakers logo"
                  className="article-img"
                />
              </div>

              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <div className="article-img-container">
                <img
                  src={LakersLogo}
                  alt="Lakers logo"
                  className="article-img"
                />
              </div>

              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <div className="article-img-container">
                <img
                  src={LakersLogo}
                  alt="Lakers logo"
                  className="article-img"
                />
              </div>

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

export default Lakers;
