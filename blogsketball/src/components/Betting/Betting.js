import React from "react";
import "./Betting.scss";
import AGGrid from "./AGGrid";
import TrailBlazers from "../../images/TrailBlazers.jpeg";
function Betting() {
  return (
    <div className="betting-container">
      {/* <h2 className="header">Betting</h2> */}
      <div className="pick-card">
        <div className="pick-wrapper">
          <h1>Pick of the Day</h1>

          <div className="pick-selection-wrapper">
            <img src={TrailBlazers} alt="Trailblazers" />
            <p className="pick-selection">
              Portland Trail Blazers -4.5 vs Phoenix Suns
            </p>
          </div>
          <div className="light"></div>
          <div className="light"></div>
        </div>
      </div>
      <div className="ag-grid-container">
        <h2 className="history">History</h2>
        <div className="ag-grid">
          <AGGrid />
        </div>
      </div>
    </div>
  );
}

export default Betting;
