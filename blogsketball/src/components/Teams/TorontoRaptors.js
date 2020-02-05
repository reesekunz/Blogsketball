import React from "react";
import "./teams.scss";
import RaptorsLogo from "../../images/Raptors.png";

function Raptors() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Toronto Raptors</h3>
        <div className="logo-container">
          <img src={RaptorsLogo} alt="Raptors logo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default Raptors;
