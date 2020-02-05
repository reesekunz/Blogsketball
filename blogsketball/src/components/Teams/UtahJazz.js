import React from "react";
import "./teams.scss";
import JazzLogo from "../../images/Jazz.png";

function Jazz() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Utah Jazz</h3>
        <div className="logo-container">
          <img src={JazzLogo} alt="Jazz logo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default Jazz;
