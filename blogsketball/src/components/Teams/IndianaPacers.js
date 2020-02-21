import React from "react";
import "./teams.scss";
import PacersLogo from "../../images/Pacers.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Myles from "../../images/Myles.jpeg";
import Brogdon from "../../images/Brogdon.jpeg";
function Pacers() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Indiana Pacers</h3>
        <div className="logo-container">
          <img src={PacersLogo} alt="Pacers logo" className="team-logo" />
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
          {/* NBA Rank 91-100 Article */}
          <NavLink
            to="/nba-rank-91-100"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={Myles} alt="Myles Turner" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 91-100</h5>
            </div>
          </NavLink>
          {/* NBA Rank 81-90 Article */}
          <NavLink
            to="/nba-rank-81-90"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={Brogdon} alt="Brogdon" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 81-90</h5>
            </div>
          </NavLink>
          <div className="article-card">
            <img src={PacersLogo} alt="Pacers logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
        </div>
        {/* Row 2 */}
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
  );
}
export default Pacers;
