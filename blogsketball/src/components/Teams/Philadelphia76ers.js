import React from "react";
import "./teams.scss";
import SixersLogo from "../../images/Sixers.jpeg";

function Sixers() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Philadelphia 76'ers</h3>
        <div className="logo-container">
          <img src={SixersLogo} alt="Sixers logo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default Sixers;
