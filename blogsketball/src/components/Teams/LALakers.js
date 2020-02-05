import React from "react";
import "./teams.scss";
import LakersLogo from "../../images/Lakers.png";

function Lakers() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Los Angeles Lakers</h3>
        <div className="logo-container">
          <img src={LakersLogo} alt="Lakers logo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default Lakers;
