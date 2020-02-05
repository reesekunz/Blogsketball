import React from "react";
import "./teams.scss";
import MagicLogo from "../../images/Magic.png";

function Magic() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Orlando Magic</h3>
        <div className="logo-container">
          <img src={MagicLogo} alt="Magic logo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default Magic;
