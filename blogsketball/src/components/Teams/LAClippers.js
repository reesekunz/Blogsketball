import React from "react";
import "./teams.scss";
import ClippersLogo from "../../images/Clippers.png";

function Clippers() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Los Angeles Clippers</h3>
        <div className="logo-container">
          <img src={ClippersLogo} alt="Clippers logo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default Clippers;
