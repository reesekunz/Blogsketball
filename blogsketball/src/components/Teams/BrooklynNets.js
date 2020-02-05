import React from "react";
import "./teams.scss";
import NetsLogo from "../../images/Nets.png";

function Nets() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Brooklyn Nets</h3>
        <div className="logo-container">
          <img src={NetsLogo} alt="Nets logo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default Nets;
