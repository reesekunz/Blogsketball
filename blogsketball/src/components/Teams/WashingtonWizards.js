import React from "react";
import "./teams.scss";
import WizardsLogo from "../../images/Wizards.jpeg";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Zion from "../../images/Zion.jpeg";
import Bertans from "../../images/Bertans.jpeg";
import JohnWall from "../../images/JohnWall.jpeg";
import Beal from "../../images/Beal.jpeg";
function Wizards() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Washington Wizards</h3>
        <div className="logo-container">
          <img src={WizardsLogo} alt="Wizards logo" className="team-logo" />
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
          {/* NBA Rank 91-100 Article */}
          <NavLink
            to="/nba-rank-91-100"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img
                  src={Bertans}
                  alt="Davis Bertans"
                  className="article-img"
                />
              </div>
              <h5 className="article-header">NBA Rank: 91-100</h5>
            </div>
          </NavLink>
          {/* NBA Rank 51-60 Article */}
          <NavLink
            to="/nba-rank-51-60"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={JohnWall} alt="John Wall" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 51-60</h5>
            </div>
          </NavLink>
        </div>
        {/* Row 2 */}
        <div className="article-row">
          {/* NBA Rank 21-30 Article */}
          <NavLink
            to="/nba-rank-21-30"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={Beal} alt="Bradley Beal" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 21-30</h5>
            </div>
          </NavLink>
          <div className="article-card">
            <img src={WizardsLogo} alt="Wizards logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img src={WizardsLogo} alt="Wizards logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
        </div>
        {/* Row 3 */}
        <div className="article-row">
          <div className="article-card">
            <img src={WizardsLogo} alt="Wizards logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img src={WizardsLogo} alt="Wizards logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img src={WizardsLogo} alt="Wizards logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Wizards;
