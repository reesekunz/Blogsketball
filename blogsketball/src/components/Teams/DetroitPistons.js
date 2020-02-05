import React from "react";
import "./teams.scss";
import PistonsLogo from "../../images/Pistons.png";

function Pistons() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Detroit Pistons</h3>
        <div className="logo-container">
          <img src={PistonsLogo} alt="Pistons logo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default Pistons;
