import React from "react";
import "./teams.scss";
import GrizzliesLogo from "../../images/Grizzlies.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Zion from "../../images/Zion.jpeg";
import Jonas from "../../images/Jonas.jpeg";
import Jaren from "../../images/Jaren.jpeg";
import Morant from "../../images/Morant.jpeg";
function Grizzlies() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Memphis Grizzlies</h3>
        <div className="logo-container">
          <img src={GrizzliesLogo} alt="Grizzlies logo" className="team-logo" />
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
            to="/2019-redraft"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <img src={Zion} alt="Zion Williamson" className="article-img" />
              <h5 className="article-header">2019 Lottery Re-Draft</h5>
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
                <img
                  src={Jonas}
                  alt="My name is Jonas"
                  className="article-img"
                />
              </div>
              <h5 className="article-header">NBA Rank: 81-90</h5>
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
                  src={Jaren}
                  alt="Jaren Jackson Jr."
                  className="article-img"
                />
              </div>
              <h5 className="article-header">NBA Rank: 51-60</h5>
            </div>
          </NavLink>
        </div>
        {/* Row 2 */}
        <div className="article-row">
          {/* NBA Rank 31-40 Article */}
          <NavLink
            to="/nba-rank-31-40"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={Morant} alt="Ja Morant" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 31-40</h5>
            </div>
          </NavLink>
          <div className="article-card">
            <img
              src={GrizzliesLogo}
              alt="Grizzlies logo"
              className="article-img"
            />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img
              src={GrizzliesLogo}
              alt="Grizzlies logo"
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
              src={GrizzliesLogo}
              alt="Grizzlies logo"
              className="article-img"
            />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img
              src={GrizzliesLogo}
              alt="Grizzlies logo"
              className="article-img"
            />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img
              src={GrizzliesLogo}
              alt="Grizzlies logo"
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

export default Grizzlies;
