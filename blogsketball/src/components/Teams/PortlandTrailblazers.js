import React from "react";
import "./teams.scss";
import TrailBlazersLogo from "../../images/TrailBlazers.jpeg";

function Trailblazers() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Portland Trail Blazers</h3>
        <div className="logo-container">
          <img
            src={TrailBlazersLogo}
            alt="Trail Blazers logo"
            className="team-logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Trailblazers;
