import React from "react";
import "./teams.scss";
import HawksLogo from "../../images/Hawks.png";

function Hawks() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Atlanta Hawks</h3>
        <div className="logo-container">
          <img src={HawksLogo} alt="Hawks logo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default Hawks;
