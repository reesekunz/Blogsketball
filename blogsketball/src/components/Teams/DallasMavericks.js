import React from "react";
import "./teams.scss";
import MavsLogo from "../../images/Mavs.jpeg";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Dorian from "../../images/Dorian.jpeg";
import Kristaps from "../../images/Kristaps.jpeg";
import Luka from "../../images/Luka.jpeg";
function Mavs() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Dallas Mavericks</h3>
        <div className="logo-container">
          <img src={MavsLogo} alt="Mavs logo" className="team-logo" />
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
          {/* Top 10 underrated article */}
          <NavLink
            to="/top-10-underrated"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <img
                src={Dorian}
                alt="Dorian getting buckets"
                className="article-img"
              />
              <h5 className="article-header">
                {" "}
                Ranking the Top 10 Most Underrated Players
              </h5>
            </div>
          </NavLink>
          {/* NBA Rank 71-80 Article */}
          <NavLink
            to="/nba-rank-71-80"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={Kristaps} alt="Kristaps" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 71-80</h5>
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
                <img src={Luka} alt="Luka" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 6-10</h5>
            </div>
          </NavLink>
        </div>
        {/* Row 2 */}
        <div className="article-row">
          <div className="article-card">
            <img src={MavsLogo} alt="Mavs logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img src={MavsLogo} alt="Mavs logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img src={MavsLogo} alt="Mavs logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
        </div>
        {/* Row 3 */}
        <div className="article-row">
          <div className="article-card">
            <img src={MavsLogo} alt="Mavs logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img src={MavsLogo} alt="Mavs logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img src={MavsLogo} alt="Mavs logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Mavs;
