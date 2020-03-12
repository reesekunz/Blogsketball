import React from "react";
import "./teams.scss";
import PelicansLogo from "../../images/Pelicans.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Zion from "../../images/Zion.jpeg";
import Lonzo from "../../images/Lonzo.jpeg";
import Ball from "../../images/Ball.jpeg";
import Jrue from "../../images/Jrue.jpeg";
import Williamson from "../../images/Williamson.jpeg";
import BI from "../../images/BI.jpeg";
function Pelicans() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">New Orleans Pelicans</h3>
        <div className="logo-container">
          <img src={PelicansLogo} alt="Pelicans logo" className="team-logo" />
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

export default Pelicans;
