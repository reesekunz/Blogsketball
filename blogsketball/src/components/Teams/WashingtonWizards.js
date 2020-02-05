import React from "react";
import "./teams.scss";
import WizardsLogo from "../../images/Wizards.jpeg";

function Wizards() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Washington Wizards</h3>
        <div className="logo-container">
          <img src={WizardsLogo} alt="Wizards logo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default Wizards;
