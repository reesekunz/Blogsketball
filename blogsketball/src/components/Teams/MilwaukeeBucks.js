import React from "react";
import "./teams.scss";
import "./bucks.scss";
import BucksLogo from "../../images/Bucks.jpeg";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import KobeChampionship from "../../images/KobeChampionship.jpeg";
import { NavLink } from "react-router-dom";
import Donte from "../../images/Donte.jpeg";
import Brook from "../../images/Brook.jpeg";
import Eric from "../../images/Eric.jpeg";
import Khris from "../../images/Khris.jpeg";
import Giannis from "../../images/Giannis.jpeg";
function Bucks() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Milwaukee Bucks</h3>
        <div className="logo-container">
          <img src={BucksLogo} alt="Bucks logo" className="team-logo" />
        </div>
      </div>
      <div className="bucks-main-container">
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
            {/* Top 10 underrated article */}

            <div className="article-card">
              <img
                src={Donte}
                alt="Donte diving on the floor"
                className="article-img"
              />
              <NavLink
                to="/top-10-underrated"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">
                  {" "}
                  Ranking the Top 10 Most Underrated Players
                </h5>
              </NavLink>
            </div>
            {/* NBA Rank 81-90 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Brook} alt="Brook Lopez" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-81-90"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 81-90</h5>
              </NavLink>
            </div>
          </div>
          {/* Row 2 */}
          <div className="article-row">
            {/* NBA Rank 61-70 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Eric} alt="Eric Bledsoe" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-61-70"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 61-70</h5>
              </NavLink>
            </div>
            {/* NBA Rank 21-30 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img
                  src={Khris}
                  alt="Khris Middleton"
                  className="article-img"
                />
              </div>
              <NavLink
                to="/nba-rank-21-30"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 21-30</h5>
              </NavLink>
            </div>
            {/* NBA Rank 1-5 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Giannis} alt="Giannis" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-1-5"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 1-5</h5>
              </NavLink>
            </div>
          </div>
          {/* Row 3 */}
          <div className="article-row">
            <div className="article-card">
              <img src={BucksLogo} alt="Bucks logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img src={BucksLogo} alt="Bucks logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img src={BucksLogo} alt="Bucks logo" className="article-img" />
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

export default Bucks;
