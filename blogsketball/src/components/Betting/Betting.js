import React from "react";
import "./Betting.scss";
import AGGrid from "./AGGrid";

function Betting() {
  return (
    <div className="betting-container">
      <div className="pick-card">
        <div className="pick-wrapper">
          <h1>Pick of the Day:</h1>
          <div className="light"></div>
          <div className="light"></div>
          <p className="pick-selection">
            New Orleans Pelicans -5 @ Chicago Bulls
          </p>
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
