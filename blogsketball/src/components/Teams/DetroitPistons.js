import React from "react";
import "./teams.scss";
import PistonsLogo from "../../images/Pistons.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Blake from "../../images/Blake.jpeg";
import DRose from "../../images/DRose.jpeg";

function Pistons() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Detroit Pistons</h3>
        <div className="logo-container">
          <img src={PistonsLogo} alt="Pistons logo" className="team-logo" />
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
          {/* NBA Rank 71-80 Article */}
          <NavLink
            to="/nba-rank-71-80"
            activeClassName="activeNavButton"
            className="team-link"
          >
            <div className="article-card">
              <div className="article-img-container">
                <img src={Blake} alt="Blake Griffin" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 71-80</h5>
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
                <img src={DRose} alt="D-Rose" className="article-img" />
              </div>
              <h5 className="article-header">NBA Rank: 51-60</h5>
            </div>
          </NavLink>
          <div className="article-card">
            <img src={PistonsLogo} alt="Pistons logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
        </div>
        {/* Row 2 */}
        <div className="article-row">
          <div className="article-card">
            <img src={PistonsLogo} alt="Pistons logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img src={PistonsLogo} alt="Pistons logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img src={PistonsLogo} alt="Pistons logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
        </div>
        {/* Row 3 */}
        <div className="article-row">
          <div className="article-card">
            <img src={PistonsLogo} alt="Pistons logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img src={PistonsLogo} alt="Pistons logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img src={PistonsLogo} alt="Pistons logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pistons;
