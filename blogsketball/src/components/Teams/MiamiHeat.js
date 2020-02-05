import React from "react";
import "./teams.scss";
import HeatLogo from "../../images/Heat.png";

function Heat() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Miami Heat</h3>
        <div className="logo-container">
          <img src={HeatLogo} alt="Heat logo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default Heat;
