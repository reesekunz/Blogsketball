import React from "react";
import "./teams.scss";
import HornetsLogo from "../../images/Hornets.png";

function Hornets() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Charlotte Hornets</h3>
        <div className="logo-container">
          <img src={HornetsLogo} alt="Hornets logo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default Hornets;
