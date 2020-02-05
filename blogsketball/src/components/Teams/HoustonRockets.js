import React from "react";
import "./teams.scss";
import RocketsLogo from "../../images/Rockets.jpeg";

function Rockets() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Houston Rockets</h3>
        <div className="logo-container">
          <img src={RocketsLogo} alt="Rockets logo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default Rockets;
