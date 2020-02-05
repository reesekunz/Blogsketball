import React from "react";
import "./teams.scss";
import SunsLogo from "../../images/Suns.png";

function Suns() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Phoenix Suns</h3>
        <div className="logo-container">
          <img src={SunsLogo} alt="Suns logo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default Suns;
