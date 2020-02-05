import React from "react";
import "./teams.scss";
import SpursLogo from "../../images/Spurs.png";

function Spurs() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">San Antonio Spurs</h3>
        <div className="logo-container">
          <img src={SpursLogo} alt="Spurs logo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default Spurs;
