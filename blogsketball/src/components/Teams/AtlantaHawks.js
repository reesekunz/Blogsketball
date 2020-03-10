import React from "react";
import "./teams.scss";
import "./hawks.scss";
import HawksLogo from "../../images/Hawks.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Zion from "../../images/Zion.jpeg";
import Clint from "../../images/Clint.jpeg";
import John from "../../images/John.jpeg";
import Trae from "../../images/Trae.jpeg";

function Hawks() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Atlanta Hawks</h3>
        <div className="logo-container">
          <img src={HawksLogo} alt="Hawks logo" className="team-logo" />
        </div>
      </div>
      <div className="hawks-main-container">
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
              <img src={Zion} alt="Zion Williamson" className="article-img" />
              <NavLink
                to="/2019-redraft"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">2019 Lottery Re-Draft</h5>
              </NavLink>
            </div>
            {/* NBA Rank 71-80 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Clint} alt="Clint Capela" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-71-80"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 71-80</h5>
              </NavLink>
            </div>
            {/* NBA Rank 51-60 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={John} alt="John" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-51-60"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 51-60</h5>
              </NavLink>
            </div>
          </div>
          {/* Row 2 */}
          <div className="article-row">
            {/* NBA Rank 16-20 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Trae} alt="Trae Young" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-16-20"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 16-20</h5>
              </NavLink>
            </div>
            <div className="article-card" id="rumors">
              <img src={HawksLogo} alt="Hawks logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card" id="rumors">
              <img src={HawksLogo} alt="Hawks logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
          </div>
          {/* Row 3 */}
          <div className="article-row">
            <div className="article-card" id="rumors">
              <img src={HawksLogo} alt="Hawks logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card" id="game-analysis">
              <img src={HawksLogo} alt="Hawks logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card" id="game-analysis">
              <img src={HawksLogo} alt="Hawks logo" className="article-img" />
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

export default Hawks;
