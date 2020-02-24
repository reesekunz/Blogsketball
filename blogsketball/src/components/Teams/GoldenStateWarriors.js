import React from "react";
import "./teams.scss";
import WarriorsLogo from "../../images/Warriors.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Draymond from "../../images/Draymond.jpeg";
import Wiggins from "../../images/Wiggins.jpeg";
import Klay from "../../images/Klay.jpeg";
import Steph from "../../images/Steph.jpeg";
function Warriors() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Golden State Warriors</h3>
        <div className="logo-container">
          <img src={WarriorsLogo} alt="Warriors logo" className="team-logo" />
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
          {/* NBA Rank 61-70 Article */}
          <NavLink
            to="/nba-rank-61-70"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img
                  src={Draymond}
                  alt="Draymond Green"
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
                <img
                  src={Wiggins}
                  alt="Andrew Wiggins"
                  className="article-img"
                />
              </div>
              <h5 className="article-header">NBA Rank: 41-50</h5>
            </div>
          </NavLink>
          {/* NBA Rank 16-20 Article */}
          <NavLink
            to="/nba-rank-16-20"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={Klay} alt="Klay Thompson" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 16-20</h5>
            </div>
          </NavLink>
        </div>
        {/* Row 2 */}
        <div className="article-row">
          {/* NBA Rank 1-5 Article */}
          <NavLink
            to="/nba-rank-1-5"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={Steph} alt="Steph" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 1-5</h5>
            </div>
          </NavLink>
          <div className="article-card">
            <img
              src={WarriorsLogo}
              alt="Warriors logo"
              className="article-img"
            />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img
              src={WarriorsLogo}
              alt="Warriors logo"
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
              src={WarriorsLogo}
              alt="Warriors logo"
              className="article-img"
            />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img
              src={WarriorsLogo}
              alt="Warriors logo"
              className="article-img"
            />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img
              src={WarriorsLogo}
              alt="Warriors logo"
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

export default Warriors;
