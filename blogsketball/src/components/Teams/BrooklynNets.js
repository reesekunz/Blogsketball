import React from "react";
import "./teams.scss";
import "./nets.scss";
import NetsLogo from "../../images/Nets.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import DJ from "../../images/DJ.jpeg";
import Dinwiddie from "../../images/Dinwiddie.jpeg";
import Kyrie from "../../images/Kyrie.jpeg";
import KD from "../../images/KD.jpeg";
function Nets() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Brooklyn Nets</h3>
        <div className="logo-container">
          <img src={NetsLogo} alt="Nets logo" className="team-logo" />
        </div>
      </div>
      <div className="nets-main-container">
        <button onClick={Layout.PageReload}>
          <IoIosList size={35} />
        </button>
        <button onClick={Layout.CardLayout}>
          <IoIosBrowsers size={35} />
        </button>
        <div className="article-container">
          {/* Row 1  */}
          <div className="article-row">
            {/* NBA Rank 91-100 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={DJ} alt="DeAndre Jordan" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-91-100"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 91-100</h5>
              </NavLink>
            </div>
            {/* NBA Rank 71-80 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img
                  src={Dinwiddie}
                  alt="Spencer Dinwiddie"
                  className="article-img"
                />
              </div>
              <NavLink
                to="/nba-rank-71-80"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 71-80</h5>
              </NavLink>
            </div>
            {/* NBA Rank 11-15 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Kyrie} alt="Kyrie" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-11-15"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 11-15</h5>
              </NavLink>
            </div>
          </div>
          {/* Row 2 */}
          <div className="article-row">
            {/* NBA Rank 1-5 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={KD} alt="KD" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-1-5"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 1-5</h5>
              </NavLink>
            </div>
            <div className="article-card">
              <img src={NetsLogo} alt="Nets logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img src={NetsLogo} alt="Nets logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
          </div>
          {/* Row 3 */}
          <div className="article-row">
            <div className="article-card">
              <img src={NetsLogo} alt="Nets logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img src={NetsLogo} alt="Nets logo" className="article-img" />
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
export default Nets;
