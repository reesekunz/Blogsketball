import React from "react";
import "./teams.scss";
import NuggetsLogo from "../../images/Nuggets.jpeg";

function Nuggets() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Denver Nuggets</h3>
        <div className="logo-container">
          <img src={NuggetsLogo} alt="Nuggetslogo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default Nuggets;
