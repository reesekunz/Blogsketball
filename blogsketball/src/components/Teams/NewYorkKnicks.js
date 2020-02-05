import React from "react";
import "./teams.scss";
import KnicksLogo from "../../images/Knicks.png";

function Knicks() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">New York Knicks</h3>
        <div className="logo-container">
          <img src={KnicksLogo} alt="Knicks logo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default Knicks;
