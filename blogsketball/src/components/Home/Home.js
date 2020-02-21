import React from "react";
import "./Home.scss";
import BlogsketballIMG from "../../images/Blogsketball.png";
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from "react-icons/io";
import { NavLink } from "react-router-dom";
import KobeChampionship from "../../images/KobeChampionship.jpeg";
import Zion from "../../images/Zion.jpeg";
import Baylor from "../../images/Baylor.jpeg";
import CutNet from "../../images/CutNet.jpeg";
import AllStarGame from "../../images/AllStarGame.jpeg";
import Mikal from "../../images/Mikal.jpeg";
import Kyle from "../../images/Kyle.jpeg";
import Lou from "../../images/Lou.jpeg";
import Bracket from "../../images/Bracketology.png";

function Home() {
  return (
    <div className="home-container">
      <div className="top-section">
        {/* Legit contenders article */}
        <NavLink
          to="/legit-contenders"
          activeClassName="activeNavButton"
          className="home-article-link"
        >
          <div className="main-img-container">
            <img
              src={KobeChampionship}
              alt="kobe championship"
              className="main-article-img"
            />
            <h3 className="home-main-article-header">
              Who Are Legitimate Title Contenders? Post Trade-Deadline Edition
              <div className="article-tag">
                Tags: Trades, Lakers, Bucks, Clippers, Rockets, 76ers
              </div>
            </h3>
          </div>
        </NavLink>
      </div>
      <h3 className="header">Latest</h3>
      <div className="second-section">
        <div className="latest-articles-container">
          {/* 2019 redraft article */}
          <NavLink
            to="/2019-redraft"
            activeClassName="activeNavButton"
            className="home-article-link"
          >
            <div className="article">
              <img
                src={Zion}
                className="latest-articles-img"
                alt="Zion article"
              />
              <div className="article-content">
                <p className="article-date">Feb. 12 2020</p>
                <h3 className="latest-article-header">2019 Lottery Redraft </h3>
                <div className="article-tag">
                  Tags: Pelicans, Grizzlies, Knicks, Hawks, Cavaliers,
                  Timberwolves, Bulls, Wizards, Suns, Hornets, Heat, Celtics
                </div>
              </div>
            </div>
          </NavLink>
          {/* Top 10 ncaa article */}
          <NavLink
            to="/top-10-ncaa"
            activeClassName="activeNavButton"
            className="home-article-link"
          >
            <div className="article">
              <img
                src={Baylor}
                className="latest-articles-img"
                alt="Baylor Bears "
              />
              <div className="article-content">
                <p className="article-date">Feb. 12 2020</p>
                <h3 className="latest-article-header">
                  Breaking Down The Top-10 Ranked College Basketball Teams
                </h3>
                <div className="article-tag">Tags: NCAA</div>
              </div>
            </div>
          </NavLink>
          {/* KenPom analysis article */}
          <NavLink
            to="/kenpom-analysis"
            activeClassName="activeNavButton"
            className="home-article-link"
          >
            <div className="article">
              <img
                src={CutNet}
                className="latest-articles-img"
                alt="Literally just cutting a net"
              />
              <div className="article-content">
                <p className="article-date">Feb. 14 2020</p>
                <h3 className="latest-article-header">
                  Using KenPom Ratings to Evaluate Potential National Champions
                </h3>
                <div className="article-tag">Tags: NCAA</div>
              </div>
            </div>
          </NavLink>
          {/* 2020 NBA All star game article */}
          <NavLink
            to="/2020-all-star-game"
            activeClassName="activeNavButton"
            className="home-article-link"
          >
            <div className="article">
              <img
                src={AllStarGame}
                className="latest-articles-img"
                alt="NBA all star game"
              />
              <div className="article-content">
                <p className="article-date">Feb. 16 2020</p>
                <h3 className="latest-article-header">
                  2020 NBA All-Star Game Epitomized "Mamba Mentality"
                </h3>
                <div className="article-tag">Tags: News and Analysis</div>
              </div>
            </div>
          </NavLink>
          {/* Top 10 Underrated article */}
          <NavLink
            to="/top-10-underrated"
            activeClassName="activeNavButton"
            className="home-article-link"
          >
            <div className="article">
              <img
                src={Mikal}
                className="latest-articles-img"
                alt="Mikal Bridges"
              />
              <div className="article-content">
                <p className="article-date">Feb. 18 2020</p>
                <h3 className="latest-article-header">
                  Ranking the Top 10 Most Underrated Players
                </h3>
                <div className="article-tag">
                  Tags: Nuggets, Kings, Pelicans, Timberwolves, Spurs, Suns,
                  Bucks, Jazz, Mavericks
                </div>
              </div>
            </div>
          </NavLink>
          {/* Top 10 Overrated article */}
          <NavLink
            to="/top-10-overrated"
            activeClassName="activeNavButton"
            className="home-article-link"
          >
            <div className="article">
              <img
                src={Kyle}
                className="latest-articles-img"
                alt="Kyle Lowry"
              />
              <div className="article-content">
                <p className="article-date">Feb. 19 2020</p>
                <h3 className="latest-article-header">
                  Ranking the Top 10 Most Overrated Players
                </h3>
                <div className="article-tag">
                  Tags: Nuggets, Clippers, Knicks, Lakers, Cavaliers, Kings,
                  Heat, Jazz, Hornets, Raptors
                </div>
              </div>
            </div>
          </NavLink>
          {/* Clippers Bench article */}
          <NavLink
            to="/clippers-are-loaded"
            activeClassName="activeNavButton"
            className="home-article-link"
          >
            <div className="article">
              <img src={Lou} className="latest-articles-img" alt="Lou Will" />
              <div className="article-content">
                <p className="article-date">Feb. 19 2020</p>
                <h3 className="latest-article-header">
                  Clippers Now Officially Have Deepest Team in the League{" "}
                </h3>
                <div className="article-tag">Tags: Clippers</div>
              </div>
            </div>
          </NavLink>
          {/* Clippers Bench article */}
          <NavLink
            to="/march-is-coming"
            activeClassName="activeNavButton"
            className="home-article-link"
          >
            <div className="article">
              <img
                src={Bracket}
                className="latest-articles-img"
                alt="Bracketology"
              />
              <div className="article-content">
                <p className="article-date">Feb. 20 2020</p>
                <h3 className="latest-article-header">March is Coming </h3>
                <div className="article-tag">Tags: NCAA</div>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="side-bar">
          <div className="side-bar-wrapper">
            <h2 className="side-bar-header">Bet of the Day:</h2>
            <h3 className="bet-of-the-day-pick">
              Los Angeles Lakers -8 @ Phoenix Suns
            </h3>
            <button>View History</button>
          </div>
          <div className="side-bar-wrapper">
            {" "}
            <h2 className="side-bar-header">Follow Blogsketball: </h2>
            <div className="icons">
              <div className="icon">
                <IoLogoInstagram /> Instagram
              </div>
              <div className="icon">
                <IoLogoFacebook /> Facebook
              </div>
              <div className="icon">
                <IoLogoTwitter /> Twitter
              </div>
            </div>
          </div>
          <div className="side-bar-wrapper">
            <h2 className="side-bar-header">Our Other Sites: </h2>
            <h3 className="other-site">
              Not Pablo:{" "}
              <a href="https://www.notpablo.com" target="_blank">
                notpablo.com
              </a>{" "}
            </h3>
          </div>
        </div>
      </div>
      <NavLink
        to="/page-2"
        activeClassName="activeNavButton"
        className="home-article-link"
      >
        <button>Next Page</button>
      </NavLink>
    </div>
  );
}
export default Home;
