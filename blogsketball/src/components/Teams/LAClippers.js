import React from "react";
import "./teams.scss";
import ClippersLogo from "../../images/Clippers.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import KobeChampionship from "../../images/KobeChampionship.jpeg";
import { NavLink } from "react-router-dom";
import Montrezl from "../../images/Montrezl.jpeg";
import Lou from "../../images/Lou.jpeg";
import Harrell from "../../images/Harrell.jpeg";
import Marcus from "../../images/Marcus.jpeg";
import LouWill from "../../images/LouWill.jpeg";
import PG13 from "../../images/PG13.jpeg";
import Kawhi from "../../images/Kawhi.jpeg";
function Clippers() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Los Angeles Clippers</h3>
        <div className="logo-container">
          <img src={ClippersLogo} alt="Clippers logo" className="team-logo" />
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
            to="/legit-contenders"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img
                  src={KobeChampionship}
                  alt="Kobe championship"
                  className="article-img"
                />
              </div>
              <h5 className="article-header">
                Who Are Legitimate Title Contenders? Post Trade-Deadline Edition
              </h5>
            </div>
          </NavLink>
          <NavLink
            to="/top-10-overrated"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={Montrezl} alt="Montrezl" className="article-img" />
              </div>
              <h5 className="article-header">
                Ranking the Top 10 Most Overrated Players
              </h5>
            </div>
          </NavLink>
          <NavLink
            to="/clippers-are-loaded"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={Lou} alt="Lou will" className="article-img" />
              </div>
              <h5 className="article-header">
                Clippers Now Officially Have Deepest Team in the League{" "}
              </h5>
            </div>
          </NavLink>
        </div>

        {/* Row 2 */}
        <div className="article-row">
          {/* NBA Rank 81-90 Article */}
          <NavLink
            to="/nba-rank-81-90"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={Harrell} alt="Montrezl" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 81-90</h5>
            </div>
          </NavLink>
          {/* NBA Rank 61-70 Article */}
          <NavLink
            to="/nba-rank-61-70"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img
                  src={Marcus}
                  alt="Marcus Morris Sr."
                  className="article-img"
                />
              </div>
              <h5 className="article-header">NBA Rank: 61-70</h5>
            </div>
          </NavLink>
          {/* NBA Rank 41-50 Article */}
          <NavLink
            to="/nba-rank-41-50"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={LouWill} alt="Lou Will" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 41-50</h5>
            </div>
          </NavLink>
        </div>
        {/* Row 3 */}
        <div className="article-row">
          {/* NBA Rank 11-15 Article */}
          <NavLink
            to="/nba-rank-11-15"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={PG13} alt="Paul George" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 11-15</h5>
            </div>
          </NavLink>
          {/* NBA Rank 6-10 Article */}
          <NavLink
            to="/nba-rank-6-10"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={Kawhi} alt="Kawhi Leonard" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 6-10</h5>
            </div>
          </NavLink>
          <div className="article-card">
            <img
              src={ClippersLogo}
              alt="Clippers logo"
              className="article-img"
            />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clippers;
