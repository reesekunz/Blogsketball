import React from "react";
import "./teams.scss";
import WarriorsLogo from "../../images/Warriors.png";

function Warriors() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Golden State Warriors</h3>
        <div className="logo-container">
          <img src={WarriorsLogo} alt="Warriors logo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default Warriors;
