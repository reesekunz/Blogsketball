import React from "react";
import "./teams.scss";
import "./sixers.scss";
import SixersLogo from "../../images/Sixers.jpeg";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import KobeChampionship from "../../images/KobeChampionship.jpeg";
import { NavLink } from "react-router-dom";
import Al from "../../images/Al.jpeg";
import Tobias from "../../images/Tobias.jpeg";
import Ben from "../../images/Ben.jpeg";
import Embiid from "../../images/Embiid.jpeg";
function Sixers() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Philadelphia 76'ers</h3>
        <div className="logo-container">
          <img src={SixersLogo} alt="Sixers logo" className="team-logo" />
        </div>
      </div>
      <div className="sixers-main-container">
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
            {/* NBA Rank 81-90 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Al} alt="Al Horford" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-81-90"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 81-90</h5>
              </NavLink>
            </div>
            {/* NBA Rank 61-70 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Tobias} alt="Tobias Harris" className="article-img" />
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
            {/* NBA Rank 16-20 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Ben} alt="Ben" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-16-20"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 16-20</h5>
              </NavLink>
            </div>
            {/* NBA Rank 11-15 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Embiid} alt="Embiid" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-11-15"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 11-15</h5>
              </NavLink>
            </div>
            <div className="article-card">
              <img src={SixersLogo} alt="Sixers logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
          </div>
          {/* Row 3 */}
          <div className="article-row">
            <div className="article-card">
              <img src={SixersLogo} alt="Sixers logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img src={SixersLogo} alt="Sixers logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img src={SixersLogo} alt="Sixers logo" className="article-img" />
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

export default Sixers;
