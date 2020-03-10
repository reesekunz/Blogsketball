import React from "react";
import "./teams.scss";
import "./bulls.scss";
import BullsLogo from "../../images/Bulls.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Zion from "../../images/Zion.jpeg";
import Zach from "../../images/Zach.jpeg";
function Bulls() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Chicago Bulls</h3>
        <div className="logo-container">
          <img src={BullsLogo} alt="Bulls logo" className="team-logo" />
        </div>
      </div>
      <div className="bulls-main-container">
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
            {/* NBA Rank 41-50 Article */}

            <div className="article-card">
              <div className="article-img-container">
                <img src={Zach} alt="Zach LaVine" className="article-img" />
              </div>
              <NavLink
                to="/nba-rank-41-50"
                activeClassName="activeNavButton"
                className="team-link"
              >
                <h5 className="article-header">NBA Rank: 41-50</h5>
              </NavLink>
            </div>
            <div className="article-card">
              <img src={BullsLogo} alt="Bulls logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
          </div>
          {/* Row 2 */}
          <div className="article-row">
            <div className="article-card">
              <img src={BullsLogo} alt="Bulls logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img src={BullsLogo} alt="Bulls logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img src={BullsLogo} alt="Bulls logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
          </div>
          {/* Row 3 */}
          <div className="article-row">
            <div className="article-card">
              <img src={BullsLogo} alt="Bulls logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img src={BullsLogo} alt="Bulls logo" className="article-img" />
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
            </div>
            <div className="article-card">
              <img src={BullsLogo} alt="Bulls logo" className="article-img" />
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
export default Bulls;
