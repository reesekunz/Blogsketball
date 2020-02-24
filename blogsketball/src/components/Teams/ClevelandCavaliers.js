import React from "react";
import "./teams.scss";
import CavsLogo from "../../images/Cavs.jpeg";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Zion from "../../images/Zion.jpeg";
import Collin from "../../images/Collin.jpeg";
import Andre from "../../images/Andre.jpeg";
// import KLove from "../../images/KLove.jpeg";
function Cavs() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Cleveland Cavaliers</h3>
        <div className="logo-container">
          <img src={CavsLogo} alt="Cavs logo" className="team-logo" />
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
          <NavLink
            to="/2019-redraft"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <img src={Zion} alt="Zion Williamson" className="article-img" />
              <h5 className="article-header">2019 Lottery Re-Draft</h5>
            </div>
          </NavLink>
          <NavLink
            to="/top-10-overrated"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={Collin} alt="Collin" className="article-img" />
              </div>
              <h5 className="article-header">
                Ranking the Top 10 Most Overrated Players
              </h5>
            </div>
          </NavLink>
          {/* NBA Rank 31-40 Article */}
          <NavLink
            to="/nba-rank-31-40"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={Andre} alt="Andre Drummond" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 31-40</h5>
            </div>
          </NavLink>
        </div>
        {/* Row 2 */}
        <div className="article-row">
          <div className="article-card">
            <img src={CavsLogo} alt="Cavs logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img src={CavsLogo} alt="Cavs logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img src={CavsLogo} alt="Cavs logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
        </div>
        {/* Row 3 */}
        <div className="article-row">
          <div className="article-card">
            <img src={CavsLogo} alt="Cavs logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img src={CavsLogo} alt="Cavs logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img src={CavsLogo} alt="Cavs logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cavs;
