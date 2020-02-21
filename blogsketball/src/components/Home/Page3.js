import React from "react";
import "./Home.scss";
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from "react-icons/io";
import { NavLink } from "react-router-dom";
import MPJ from "../../images/MPJ.jpeg";
import AG from "../../images/AG.jpeg";
import Lonzo from "../../images/Lonzo.jpeg";
import Oubre from "../../images/Oubre.jpeg";
import Buddy from "../../images/Buddy.jpeg";
import Murray from "../../images/Murray.jpeg";
import DLO from "../../images/DLO.jpeg";
import Tatum from "../../images/Tatum.jpeg";
import Klay from "../../images/Klay.jpeg";
import Joel from "../../images/Joel.jpeg";
import AD from "../../images/AD.jpeg";
import Harden from "../../images/Harden.jpeg";
function Page3() {
  return (
    <div className="home-container">
      <div className="second-section">
        <div className="latest-articles-container">
          {/* NBA Rank 11-15 */}
          <NavLink
            to="/nba-rank-11-15"
            activeClassName="activeNavButton"
            className="home-article-link"
          >
            <div className="article">
              <img
                src={Joel}
                className="latest-articles-img"
                alt="Joel Embiid"
              />
              <div className="article-content">
                <p className="article-date">Feb. 21 2020</p>
                <h3 className="latest-article-header">NBA Rank: 11-15</h3>
                <div className="article-tag">
                  Tags: 76ers, Rockets, Clippers, Timberwolves, Nets
                </div>
              </div>
            </div>
          </NavLink>
          {/* NBA Rank 6-10 */}
          <NavLink
            to="/nba-rank-6-10"
            activeClassName="activeNavButton"
            className="home-article-link"
          >
            <div className="article">
              <img
                src={AD}
                className="latest-articles-img"
                alt="Anthony Davis "
              />
              <div className="article-content">
                <p className="article-date">Feb. 21 2020</p>
                <h3 className="latest-article-header">NBA Rank: 6-10</h3>
                <div className="article-tag">
                  Tags: Clippers, Lakers, Mavericks, Trailblazers, Nuggets
                </div>
              </div>
            </div>
          </NavLink>
          {/* NBA Rank 1-5 */}
          <NavLink
            to="/nba-rank-1-5"
            activeClassName="activeNavButton"
            className="home-article-link"
          >
            <div className="article">
              <img
                src={Harden}
                className="latest-articles-img"
                alt="James Harden"
              />
              <div className="article-content">
                <p className="article-date">Feb. 21 2020</p>
                <h3 className="latest-article-header">NBA Rank: 1-5</h3>
                <div className="article-tag">
                  Tags: Lakers, Nets, Bucks, Rockets, Warriors
                </div>
              </div>
            </div>
          </NavLink>
          {/* NBA Rank 71-80 */}
          <NavLink
            to="/nba-rank-71-80"
            activeClassName="activeNavButton"
            className="home-article-link"
          >
            <div className="article">
              <img
                src={Harden}
                className="latest-articles-img"
                alt="Lonzo Ball"
              />
              <div className="article-content">
                <p className="article-date">Feb. 21 2020</p>
                <h3 className="latest-article-header">NBA Rank: 71-80</h3>
                <div className="article-tag">
                  Tags: Mavericks, Pelicans, Nets, Hawks, Raptors, Pistons,
                  Trailblazers, Heat, Nuggets, Rockets
                </div>
              </div>
            </div>
          </NavLink>
          {/* NBA Rank 61-70 */}
          <NavLink
            to="/nba-rank-61-70"
            activeClassName="activeNavButton"
            className="home-article-link"
          >
            <div className="article">
              <img
                src={Harden}
                className="latest-articles-img"
                alt="Kelly Oubre Jr."
              />
              <div className="article-content">
                <p className="article-date">Feb. 21 2020</p>
                <h3 className="latest-article-header">NBA Rank: 61-70</h3>
                <div className="article-tag">
                  Tags: Clippers, 76ers, Warriors, Suns, Bucks, Pacers, Thunder,
                  Jazz, Knicks
                </div>
              </div>
            </div>
          </NavLink>
          {/* NBA Rank 51-60 */}
          <NavLink
            to="/nba-rank-51-60"
            activeClassName="activeNavButton"
            className="home-article-link"
          >
            <div className="article">
              <img
                src={Harden}
                className="latest-articles-img"
                alt="Buddy Hield"
              />
              <div className="article-content">
                <p className="article-date">Feb. 21 2020</p>
                <h3 className="latest-article-header">NBA Rank: 51-60</h3>
                <div className="article-tag">
                  Tags: Kings, Celtics, Trailblazers, Wizards, Hawks, Thunder,
                  Grizzlies, Jazz, Pistons
                </div>
              </div>
            </div>
          </NavLink>
          {/* NBA Rank 41-50 */}
          <NavLink
            to="/nba-rank-41-50"
            activeClassName="activeNavButton"
            className="home-article-link"
          >
            <div className="article">
              <img
                src={Harden}
                className="latest-articles-img"
                alt="Jamal Murray"
              />
              <div className="article-content">
                <p className="article-date">Feb. 21 2020</p>
                <h3 className="latest-article-header">NBA Rank: 41-50</h3>
                <div className="article-tag">
                  Tags: Nuggets, Magic, Warriors, Spurs, Raptors, Pacers, Kings,
                  Clippers, Bulls, Celtics
                </div>
              </div>
            </div>
          </NavLink>
          {/* NBA Rank 31-40 */}
          <NavLink
            to="/nba-rank-31-40"
            activeClassName="activeNavButton"
            className="home-article-link"
          >
            <div className="article">
              <img
                src={Harden}
                className="latest-articles-img"
                alt="DLoading"
              />
              <div className="article-content">
                <p className="article-date">Feb. 21 2020</p>
                <h3 className="latest-article-header">NBA Rank: 31-40 </h3>
                <div className="article-tag">
                  Tags: Pelicans, Spurs, Pacers, Cavaliers, Suns, Timberwolves,
                  Grizzlies, Trailblazers
                </div>
              </div>
            </div>
          </NavLink>
          {/* NBA Rank 21-30 */}
          <NavLink
            to="/nba-rank-21-30"
            activeClassName="activeNavButton"
            className="home-article-link"
          >
            <div className="article">
              <img
                src={Harden}
                className="latest-articles-img"
                alt="Jayson Tatum"
              />
              <div className="article-content">
                <p className="article-date">Feb. 21 2020</p>
                <h3 className="latest-article-header">NBA Rank: 21-30 </h3>
                <div className="article-tag">
                  Tags: Suns, Jazz, Wizards, Pelicans, Bucks, Raptors, Celtics,
                  Heat
                </div>
              </div>
            </div>
          </NavLink>
          {/* NBA Rank 16-20 */}
          <NavLink
            to="/nba-rank-16-20"
            activeClassName="activeNavButton"
            className="home-article-link"
          >
            <div className="article">
              <img
                src={Harden}
                className="latest-articles-img"
                alt="Klay Thompson"
              />
              <div className="article-content">
                <p className="article-date">Feb. 21 2020</p>
                <h3 className="latest-article-header">NBA Rank: 16-20 </h3>
                <div className="article-tag">
                  Tags: Warriors, Hawks, Heat, Thunder, 76ers
                </div>
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
        to="/"
        activeClassName="activeNavButton"
        className="home-article-link"
      >
        <button>Previous</button>
      </NavLink>
    </div>
  );
}
export default Page3;
