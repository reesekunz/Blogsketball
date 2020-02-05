import React from "react";
import "./teams.scss";
import PacersLogo from "../../images/Pacers.png";

function Pacers() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Indiana Pacers</h3>
        <div className="logo-container">
          <img src={PacersLogo} alt="Pacers logo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default Pacers;
