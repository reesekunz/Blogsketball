import React from "react";
import "./teams.scss";
import "./pacers.scss";
import PacersLogo from "../../images/Pacers.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Myles from "../../images/Myles.jpeg";
import Brogdon from "../../images/Brogdon.jpeg";
import TJ from "../../images/TJ.jpeg";
import Sabonis from "../../images/Sabonis.jpeg";
import Oladipo from "../../images/Oladipo.jpeg";
function Pacers() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Indiana Pacers</h3>
        <div className="logo-container">
          <img src={PacersLogo} alt="Pacers logo" className="team-logo" />
        </div>
      </div>
      <div className="pacers-main-container">
        <button onClick={Layout.PageReload}>
          <IoIosList size={35} />
        </button>
        <button onClick={Layout.CardLayout}>
          <IoIosBrowsers size={35} />
        </button>
        <div className="article-container">
          {/* Row 1  */}
          <div className="article-row">
            {/* NBA Rank 91-100 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Myles} alt="Myles Turner" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-91-100"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 91-100</h5>
              </NavLink>
            </div>
            {/* NBA Rank 81-90 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Brogdon} alt="Brogdon" className="article-img" />
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
                <img src={TJ} alt="TJ Warren" className="article-img" />
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
            {/* NBA Rank 41-50 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Sabonis} alt="Sabonis" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-41-50"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 41-50</h5>
              </NavLink>
            </div>
            {/* NBA Rank 31-40 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Oladipo} alt="Oladipo" className="article-img" />
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
              <img src={PacersLogo} alt="Pacers logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
          </div>
          {/* Row 3 */}
          <div className="article-row">
            <div className="article-card">
              <img src={PacersLogo} alt="Pacers logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img src={PacersLogo} alt="Pacers logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img src={PacersLogo} alt="Pacers logo" className="article-img" />
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
export default Pacers;
