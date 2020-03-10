import React from "react";
import "./teams.scss";
import "./rockets.scss";
import RocketsLogo from "../../images/Rockets.jpeg";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import KobeChampionship from "../../images/KobeChampionship.jpeg";
import { NavLink } from "react-router-dom";
import RoCo from "../../images/RoCo.jpeg";
import PJ from "../../images/PJ.jpeg";
import Westbrook from "../../images/Westbrook.jpeg";
import Harden from "../../images/Harden.jpeg";
function Rockets() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Houston Rockets</h3>
        <div className="logo-container">
          <img src={RocketsLogo} alt="Rockets logo" className="team-logo" />
        </div>
      </div>
      <div className="rockets-main-container">
        <button onClick={Layout.PageReload}>
          <IoIosList size={35} />
        </button>
        <button onClick={Layout.CardLayout}>
          <IoIosBrowsers size={35} />
        </button>
        <div className="article-container">
          {/* Row 1  */}
          <div className="article-row">
            {/* Legit Title Contenders Article */}

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
            {/* NBA Rank 91-100 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={RoCo} alt="RoCo" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-91-100"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 91-100</h5>
              </NavLink>
            </div>
            {/* NBA Rank 71-80 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={PJ} alt="PJ Tucker" className="article-img" />
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
            {/* NBA Rank 11-15 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Westbrook} alt="Westbrook" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-11-15"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 11-15</h5>
              </NavLink>
            </div>
            {/* NBA Rank 1-5 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Harden} alt="Harden" className="article-img" />
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
              <img
                src={RocketsLogo}
                alt="Rockets logo"
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
                src={RocketsLogo}
                alt="Rockets logo"
                className="article-img"
              />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img
                src={RocketsLogo}
                alt="Rockets logo"
                className="article-img"
              />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img
                src={RocketsLogo}
                alt="Rockets logo"
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

export default Rockets;
