import React from "react";
import "./Home.scss";
import BlogsketballIMG from "../../images/Blogsketball.png";
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="top-section">
        <NavLink
          to="/legit-contenders"
          activeClassName="activeNavButton"
          className="article-link"
        >
          <div className="main-img-container">
            <img
              src={BlogsketballIMG}
              alt="main-article"
              className="main-article-img"
            />
            <h3 className="main-article-header">
              Who Are Legitimate Title Contenders? Post Trade-Deadline Edition
            <div className="article-tag">Trades</div>
            </h3>
          </div>
        </NavLink>
      </div>
      <h3 className="header">Latest</h3>
      <div className="second-section">
        <div className="latest-articles-container">
          <div className="article">
            <img
              src={BlogsketballIMG}
              className="latest-articles-img"
              alt="latest article"
            />
            <div className="article-content">
              <p className="article-date">Feb. 6 2020</p>
              <h3 className="latest-article-header">Latest Article Header</h3>
              <div className="article-tag">College Basketball</div>
            </div>
          </div>
          <div className="article">
            <img
              src={BlogsketballIMG}
              className="latest-articles-img"
              alt="latest article"
            />
            <div className="article-content">
              <p className="article-date">Feb. 6 2020</p>
              <h3 className="latest-article-header">Latest Article Header</h3>
              <div className="article-tag">College Basketball</div>
            </div>
          </div>
          <div className="article">
            <img
              src={BlogsketballIMG}
              className="latest-articles-img"
              alt="latest article"
            />
            <div className="article-content">
              <p className="article-date">Feb. 6 2020</p>
              <h3 className="latest-article-header">Latest Article Header</h3>
              <div className="article-tag">College Basketball</div>
            </div>
          </div>
          <div className="article">
            <img
              src={BlogsketballIMG}
              className="latest-articles-img"
              alt="latest article"
            />
            <div className="article-content">
              <p className="article-date">Feb. 6 2020</p>
              <h3 className="latest-article-header">Latest Article Header</h3>
              <div className="article-tag">College Basketball</div>
            </div>
          </div>
          <div className="article">
            <img
              src={BlogsketballIMG}
              className="latest-articles-img"
              alt="latest article"
            />
            <div className="article-content">
              <p className="article-date">Feb. 6 2020</p>
              <h3 className="latest-article-header">Latest Article Header</h3>
              <div className="article-tag">College Basketball</div>
            </div>
          </div>
          <div className="article">
            <img
              src={BlogsketballIMG}
              className="latest-articles-img"
              alt="latest article"
            />
            <div className="article-content">
              <p className="article-date">Feb. 6 2020</p>
              <h3 className="latest-article-header">Latest Article Header</h3>
              <div className="article-tag">College Basketball</div>
            </div>
          </div>
          <div className="article">
            <img
              src={BlogsketballIMG}
              className="latest-articles-img"
              alt="latest article"
            />
            <div className="article-content">
              <p className="article-date">Feb. 6 2020</p>
              <h3 className="latest-article-header">Latest Article Header</h3>
              <div className="article-tag">College Basketball</div>
            </div>
          </div>
          <div className="article">
            <img
              src={BlogsketballIMG}
              className="latest-articles-img"
              alt="latest article"
            />
            <div className="article-content">
              <p className="article-date">Feb. 6 2020</p>
              <h3 className="latest-article-header">Latest Article Header</h3>
              <div className="article-tag">College Basketball</div>
            </div>
          </div>
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
    </div>
  );
}
export default Home;
