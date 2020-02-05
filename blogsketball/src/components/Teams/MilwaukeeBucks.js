import React from "react";
import "./teams.scss";
import BucksLogo from "../../images/Bucks.jpeg";

function Bucks() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Milwaukee Bucks</h3>
        <div className="logo-container">
          <img src={BucksLogo} alt="Bucks logo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default Bucks;
