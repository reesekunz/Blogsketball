import React from "react";
import "./teams.scss";
import GrizzliesLogo from "../../images/Grizzlies.png";

function Grizzlies() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Memphis Grizzlies</h3>
        <div className="logo-container">
          <img src={GrizzliesLogo} alt="Grizzlies logo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default Grizzlies;
