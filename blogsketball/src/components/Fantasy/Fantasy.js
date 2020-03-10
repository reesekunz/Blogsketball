import React from "react";
import "./Fantasy.scss";
import { NavLink } from "react-router-dom";

import Baylor from "../../images/Baylor.jpeg";
import CutNet from "../../images/CutNet.jpeg";
import Jay from "../../images/Jay.jpeg";

function Fantasy() {
  return (
    <div className="fantasy-container">
      <h2 className="header">Fantasy Basketball</h2>

      <div className="col-container">
        <div className="col1">
          <img className="main-article-img" src={Baylor} alt="Baylor" />
          <div className="date-written">FEB. 12</div>
          <NavLink
            to="/top-10-ncaa"
            activeClassName="activeNavButton"
            className="home-article-link"
          >
            <h3 className="main-article-header">
              Breaking Down the Top-10 Ranked College Basketball Teams
            </h3>
          </NavLink>
          <p className="text">
            With only one loss on the season to Washington, Baylor has probably
            been the most consistent team in the country this season. Their
            roster is well-suited for March Madness, too, with none of their top
            players being freshman and three out of four of them listed above
            being guards...
          </p>
        </div>

        <div className="col2">
          <div className="top">
            {" "}
            <img
              className="secondary-article-img"
              src={CutNet}
              alt="Cutting down the nets"
            />
            <div className="date-written">FEB. 14</div>
            <NavLink
              to="/kenpom-analysis"
              activeClassName="activeNavButton"
              className="home-article-link"
            >
              <h3 className="secondary-article-header">
                Using KenPom to Find Potential National Champions
              </h3>
            </NavLink>
          </div>
          <div className="bottom">
            {" "}
            <img className="secondary-article-img" src={Jay} alt="Jay Wright" />
            <div className="date-written">FEB. 20</div>
            <NavLink
              to="/top-10-college-coaches"
              activeClassName="activeNavButton"
              className="home-article-link"
            >
              <h3 className="secondary-article-header">
                Ranking the Top-10 Coaches in Men's College Basketball
              </h3>
            </NavLink>
          </div>
        </div>
        <div className="col3">
          <div className="top">Top Section</div>
          <div className="bottom">Bottom Section</div>
        </div>
      </div>
    </div>
  );
}

export default Fantasy;
