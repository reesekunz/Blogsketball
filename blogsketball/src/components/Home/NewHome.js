import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.scss";
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from "react-icons/io";
// images
import KobeChampionship from "../../images/KobeChampionship.jpeg";
import Zion from "../../images/Zion.jpeg";
import Baylor from "../../images/Baylor.jpeg";
import CutNet from "../../images/CutNet.jpeg";
import AllStarGame from "../../images/AllStarGame.jpeg";
import Mikal from "../../images/Mikal.jpeg";
import Kyle from "../../images/Kyle.jpeg";
// import Lou from "../../images/Lou.jpeg";

function NewHome() {
  return (
    <div className="home-container">
      <div className="column1">
        {/* Main Article */}
        <NavLink
          to="/legit-contenders"
          activeClassName="activeNavButton"
          className="home-article-link"
        >
          <div className="main-article-container">
            <img
              src={KobeChampionship}
              alt="kobe championship"
              className="main-article-img"
            />
            <div className="article-date">FEB. 8</div>
            <h3 className="article-header">
              Who Are Legitimate Title Contenders? Post Trade-Deadline Edition
            </h3>
            <p className="article-text">
              With the trade deadline finally behind us, we can finally stop
              playing out hypothetical scenarios and matching up potential teams
              with one another. I, for one, was sick of the "x team offered
              garbage package for an all-star caliber player" type conversations
              I was getting into with most likely 16-year olds on Instagram who
              kept using the 🤡 emoji...
            </p>
          </div>
        </NavLink>
        {/* Second Article  */}
        <NavLink
          to="/2019-redraft"
          activeClassName="activeNavButton"
          className="home-article-link"
        >
          <div className="second-article-container">
            <div className="second-article-text">
              <div className="article-date">FEB. 12</div>
              <h3 className="article-header">Re-drating the 2019 Lottery</h3>
            </div>
            <img src={Zion} alt="Zion" className="second-article-img" />
          </div>
        </NavLink>
        {/* Third Article */}
        <NavLink
          to="/top-10-ncaa"
          activeClassName="activeNavButton"
          className="home-article-link"
        >
          <div className="second-article-container">
            <div className="second-article-text">
              <div className="article-date">FEB. 12</div>
              <h3 className="article-header">
                {" "}
                Breaking Down The Top-10 Ranked College Basketball Teams
              </h3>
            </div>
            <img src={Baylor} alt="Baylor" className="second-article-img" />
          </div>
        </NavLink>
        {/* Fourth Article  */}
        <NavLink
          to="/kenpom-analysis"
          activeClassName="activeNavButton"
          className="home-article-link"
        >
          <div className="second-article-container">
            <div className="second-article-text">
              <div className="article-date">FEB. 14</div>
              <h3 className="article-header">
                {" "}
                Using KenPom to Find Potential National Champions
              </h3>
            </div>
            <img
              src={CutNet}
              alt="Cutting down the net"
              className="second-article-img"
            />
          </div>
        </NavLink>
      </div>
      <div className="column2">
        {/* 2020 NBA All star game article */}
        <NavLink
          to="/2020-all-star-game"
          activeClassName="activeNavButton"
          className="home-article-link"
        >
          <div className="column2-img-container">
            <img
              src={AllStarGame}
              className="column2-img"
              alt="NBA all star game"
            />
          </div>
          <div className="column2-content">
            <div className="article-date">FEB. 16</div>
            <h3 className="article-header">
              2020 NBA All-Star Game Epitomized "Mamba Mentality"
            </h3>
            <p className="article-text">
              In a night that was heavily dedicated towards honoring the lives
              of Kobe Bryant, Gianna Bryant, and the other victims of the tragic
              helicopter crash, Kobe would not have been more proud...
            </p>
          </div>
        </NavLink>
        {/* Top 10 Underrated */}
        <NavLink
          to="/top-10-underrated"
          activeClassName="activeNavButton"
          className="home-article-link"
        >
          <div className="column2-img-container">
            <img src={Mikal} className="column2-img" alt="Mikal Bridges" />
          </div>
          <div className="column2-content">
            <div className="article-date">FEB. 18</div>
            <h3 className="article-header">
              Ranking the Top 10 Most Underrated Players
            </h3>
            <p className="article-text">
              Monte Morris is constantly atop the league in assist-to-turnover
              ratio (currently in first with a 5.5 ratio). He takes care of the
              ball and shoots three pointers at a 40% rate...
            </p>
          </div>
        </NavLink>
        {/* Top 10 Overrated */}
        <NavLink
          to="/top-10-overrated"
          activeClassName="activeNavButton"
          className="home-article-link"
        >
          <div className="column2-img-container">
            <img src={Kyle} className="column2-img" alt="Kyle Lowry" />
          </div>
          <div className="column2-content">
            <div className="article-date">FEB. 19</div>
            <h3 className="article-header">
              Ranking the Top 10 Most Overrated Players
            </h3>
            <p className="article-text">
              Garry Harris’ production has dipped the past two seasons to the
              point where one could debate if he should even be starting for the
              Nuggets...
            </p>
          </div>
        </NavLink>
      </div>
      <div className="column3">
        <h4 className="latest-articles-header">Latest Articles</h4>
        <div className="articles-list">
          {/* Clippers Bench Article */}
          {/* <ul> */}
          <NavLink
            to="/clippers-are-loaded"
            activeClassName="activeNavButton"
            className="home-article-link"
          >
            <li>Clippers Now Officially Have Deepest Team in the League</li>
          </NavLink>
          {/* Top 10 College Coaches */}
          <NavLink
            to="/top-10-college-coaches"
            activeClassName="activeNavButton"
            className="home-article-link"
          >
            <li> Ranking the Top-10 Coaches in Men's College Basketball</li>
          </NavLink>
          {/* Top 10 College Coaches */}
          <NavLink
            to="/top-10-college-coaches"
            activeClassName="activeNavButton"
            className="home-article-link"
          >
            <li> Article Number 3 Here</li>
          </NavLink>
          {/* Top 10 College Coaches */}
          <NavLink
            to="/top-10-college-coaches"
            activeClassName="activeNavButton"
            className="home-article-link"
          >
            <li> Article Number 4 Here</li>
          </NavLink>
          {/* Top 10 College Coaches */}
          <NavLink
            to="/top-10-college-coaches"
            activeClassName="activeNavButton"
            className="home-article-link"
          >
            <li> Article Number 5 Here</li>
          </NavLink>
          {/* </ul> */}
        </div>
        <h4 className="latest-articles-header">Bet of the Day</h4>
        <h3>New Orleans Pelicans -5 @ Chicago Bulls </h3>
        <div>Last updated: 03/03/20 </div>
        <div className="view-history-btn">
          <NavLink className="btn-link" to="/betting">
            View History 🏀
          </NavLink>
        </div>
        <h4 className="latest-articles-header">Follow Us</h4>
        <div className="icons">
          <div className="icon">
            <IoLogoInstagram size={30} color="#222222" /> Instagram
          </div>
          <div className="icon">
            <IoLogoFacebook size={30} color="#3b5998 " /> Facebook
          </div>
          <div className="icon">
            <IoLogoTwitter size={30} color="#1da1f2" /> Twitter
          </div>
        </div>
        <h4 className="latest-articles-header">Our Other Sites</h4>
        <a className="other-sites" href="https://notpablo.com" target="_blank">
          Not Pablo
        </a>
        More coming soon 👀
      </div>
    </div>
  );
}

export default NewHome;
