import React from "react";
import "./teams.scss";
import PelicansLogo from "../../images/Pelicans.png";

function Pelicans() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">New Orleans Pelicans</h3>
        <div className="logo-container">
          <img src={PelicansLogo} alt="Pelicans logo" className="team-logo" />
        </div>
      </div>
    </div>
  );
}

export default Pelicans;
