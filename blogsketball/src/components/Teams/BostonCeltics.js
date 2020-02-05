import React from "react";
import "./teams.scss";
import CelticsLogo from "../../images/Celtics.png";

function Celtics() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Boston Celtics</h3>
        <div className="logo-container">
          <img src={CelticsLogo} alt="Celtics logo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default Celtics;
