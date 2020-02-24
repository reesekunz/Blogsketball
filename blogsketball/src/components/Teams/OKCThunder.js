import React from "react";
import "./teams.scss";
import ThunderLogo from "../../images/Thunder.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Layout from "../../helpers/Layout";
import Adams from "../../images/Adams.jpeg";
import Dennis from "../../images/Dennis.jpeg";
import Danilo from "../../images/Danilo.jpeg";
import CP3 from "../../images/CP3.jpeg";

function Thunder() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Oklahoma City Thunder</h3>
        <div className="logo-container">
          <img src={ThunderLogo} alt="Thunder logo" className="team-logo" />
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
          {/* NBA Rank 81-90 Article */}
          <NavLink
            to="/nba-rank-81-90"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={Adams} alt="Steven Adams" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 81-90</h5>
            </div>
          </NavLink>
          {/* NBA Rank 61-80 Article */}
          <NavLink
            to="/nba-rank-61-70"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img
                  src={Dennis}
                  alt="Dennis Schroder"
                  className="article-img"
                />
              </div>
              <h5 className="article-header">NBA Rank: 61-70</h5>
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
                <img src={Danilo} alt="Danilo" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 51-60</h5>
            </div>
          </NavLink>
        </div>
        {/* Row 2 */}
        <div className="article-row">
          {/* NBA Rank 16-20 Article */}
          <NavLink
            to="/nba-rank-16-20"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={CP3} alt="Chris Paul" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 16-20</h5>
            </div>
          </NavLink>
          <div className="article-card">
            <img src={ThunderLogo} alt="Thunder logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img src={ThunderLogo} alt="Thunder logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
        </div>
        {/* Row 3 */}
        <div className="article-row">
          <div className="article-card">
            <img src={ThunderLogo} alt="Thunder logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img src={ThunderLogo} alt="Thunder logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img src={ThunderLogo} alt="Thunder logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Thunder;
