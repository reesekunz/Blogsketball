import React from "react";
import "./teams.scss";
import ThunderLogo from "../../images/Thunder.png";

function Thunder() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Oklahoma City Thunder</h3>
        <div className="logo-container">
          <img src={ThunderLogo} alt="Thunder logo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default Thunder;
