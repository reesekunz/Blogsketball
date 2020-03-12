import React from "react";
import "./teams.scss";
import RocketsLogo from "../../images/Rockets.jpeg";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import KobeChampionship from "../../images/KobeChampionship.jpeg";
import { NavLink } from "react-router-dom";
import RoCo from "../../images/RoCo.jpeg";
import PJ from "../../images/PJ.jpeg";
import Westbrook from "../../images/Westbrook.jpeg";
import Harden from "../../images/Harden.jpeg";
function Rockets() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Houston Rockets</h3>
        <div className="logo-container">
          <img src={RocketsLogo} alt="Rockets logo" className="team-logo" />
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

export default Rockets;
