import React from "react";
import "./teams.scss";
import BullsLogo from "../../images/Bulls.png";

function Bulls() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Chicago Bulls</h3>
        <div className="logo-container">
          <img src={BullsLogo} alt="Bulls logo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default Bulls;
