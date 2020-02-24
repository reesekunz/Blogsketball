import React from "react";
import "./teams.scss";
import TrailBlazersLogo from "../../images/TrailBlazers.jpeg";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Nurkic from "../../images/Nurkic.jpeg";
import Hassan from "../../images/Hassan.jpeg";
import CJ from "../../images/CJ.jpeg";
import Dame from "../../images/Dame.jpeg";
function Trailblazers() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Portland Trail Blazers</h3>
        <div className="logo-container">
          <img
            src={TrailBlazersLogo}
            alt="Trail Blazers logo"
            className="team-logo"
          />
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
          {/* NBA Rank 71-80 Article */}
          <NavLink
            to="/nba-rank-71-80"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={Nurkic} alt="Nurkic" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 71-80</h5>
            </div>
          </NavLink>
          {/* NBA Rank 51-60 Article */}
          <NavLink
            to="/nba-rank-51-60"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img
                  src={Hassan}
                  alt="Hassan Whiteside"
                  className="article-img"
                />
              </div>
              <h5 className="article-header">NBA Rank: 51-60</h5>
            </div>
          </NavLink>
          {/* NBA Rank 31-40 Article */}
          <NavLink
            to="/nba-rank-31-40"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={CJ} alt="CJ" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 31-40</h5>
            </div>
          </NavLink>
        </div>
        {/* Row 2 */}
        <div className="article-row">
          {/* NBA Rank 6-10 Article */}
          <NavLink
            to="/nba-rank-6-10"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={Dame} alt="Dame Dolla" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 6-10</h5>
            </div>
          </NavLink>
          <div className="article-card">
            <img
              src={TrailBlazersLogo}
              alt="TrailBlazers logo"
              className="article-img"
            />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img
              src={TrailBlazersLogo}
              alt="TrailBlazers logo"
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
              src={TrailBlazersLogo}
              alt="TrailBlazers logo"
              className="article-img"
            />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img
              src={TrailBlazersLogo}
              alt="TrailBlazers logo"
              className="article-img"
            />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img
              src={TrailBlazersLogo}
              alt="TrailBlazers logo"
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

export default Trailblazers;
