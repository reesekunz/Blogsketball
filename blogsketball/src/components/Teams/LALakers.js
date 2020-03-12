import React from "react";
import "./teams.scss";
import LakersLogo from "../../images/Lakers.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import KobeChampionship from "../../images/KobeChampionship.jpeg";
import { NavLink } from "react-router-dom";
import Rajon from "../../images/Rajon.jpeg";
import AD from "../../images/AD.jpeg";
import Lebron from "../../images/Lebron.jpeg";
function Lakers() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Los Angeles Lakers</h3>
        <div className="logo-container">
          <img src={LakersLogo} alt="Lakers logo" className="team-logo" />
        </div>
      </div>
      {/* <button onClick={Layout.PageReload}>
          <IoIosList size={35} />
        </button>
        <button onClick={Layout.CardLayout}>
          <IoIosBrowsers size={35} />
        </button> */}
    </div>
  );
}

export default Lakers;
