import React from "react";
import "./teams.scss";
import TWolvesLogo from "../../images/TWolves.jpeg";

function TWolves() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Minnesota Timberwolves</h3>
        <div className="logo-container">
          <img src={TWolvesLogo} alt="TWolves logo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default TWolves;
