import React from "react";
import "./teams.scss";
import "./jazz.scss";
import JazzLogo from "../../images/Jazz.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Joe from "../../images/Joe.jpeg";
import Jordan from "../../images/Jordan.jpeg";
import Conley from "../../images/Conley.jpeg";
import Ingles from "../../images/Ingles.jpeg";
import Bojan from "../../images/Bojan.jpeg";
import Rudy from "../../images/Rudy.jpeg";
function Jazz() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Utah Jazz</h3>
        <div className="logo-container">
          <img src={JazzLogo} alt="Jazz logo" className="team-logo" />
        </div>
      </div>
      <div className="jazz-main-container">
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

            <div className="article-card">
              <img src={Joe} alt="Joe Ingles" className="article-img" />
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

            <div className="article-card">
              <div className="article-img-container">
                <img
                  src={Jordan}
                  alt="Jordan Clarkson"
                  className="article-img"
                />
              </div>
              <NavLink
                to="/top-10-overrated"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">
                  Ranking the Top 10 Most Overrated Players
                </h5>
              </NavLink>
            </div>
            {/* NBA Rank 91-100 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img
                  src={Conley}
                  alt="Mike Conley Jr."
                  className="article-img"
                />
              </div>
              <NavLink
                to="/nba-rank-91-100"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 91-100</h5>
              </NavLink>
            </div>
          </div>
          {/* Row 2 */}
          <div className="article-row">
            {/* NBA Rank 61-70 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Ingles} alt="Joe Ingles" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-61-70"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 61-70</h5>
              </NavLink>
            </div>
            {/* NBA Rank 51-60 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Bojan} alt="Bojan" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-51-60"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 51-60</h5>
              </NavLink>
            </div>
            {/* NBA Rank 21-30 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Rudy} alt="Rudy Gobert" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-21-30"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 21-30</h5>
              </NavLink>
            </div>
          </div>
          {/* Row 3 */}
          <div className="article-row">
            <div className="article-card">
              <img src={JazzLogo} alt="Jazz logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img src={JazzLogo} alt="Jazz logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img src={JazzLogo} alt="Jazz logo" className="article-img" />
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
export default Jazz;
