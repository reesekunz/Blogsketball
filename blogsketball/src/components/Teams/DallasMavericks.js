import React from "react";
import "./teams.scss";
import MavsLogo from "../../images/Mavs.jpeg";

function Mavs() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Dallas Mavericks</h3>
        <div className="logo-container">
          <img src={MavsLogo} alt="Mavs logo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default Mavs;
