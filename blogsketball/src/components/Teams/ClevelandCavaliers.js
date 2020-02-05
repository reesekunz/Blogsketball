import React from "react";
import "./teams.scss";
import CavsLogo from "../../images/Cavs.jpeg";

function Cavs() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Cleveland Cavaliers</h3>
        <div className="logo-container">
          <img src={CavsLogo} alt="Cavs logo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default Cavs;
