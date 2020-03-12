import React from "react";
import "./teams.scss";
import ClippersLogo from "../../images/Clippers.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import KobeChampionship from "../../images/KobeChampionship.jpeg";
import { NavLink } from "react-router-dom";
import Montrezl from "../../images/Montrezl.jpeg";
import Lou from "../../images/Lou.jpeg";
import Harrell from "../../images/Harrell.jpeg";
import Marcus from "../../images/Marcus.jpeg";
import LouWill from "../../images/LouWill.jpeg";
import PG13 from "../../images/PG13.jpeg";
import Kawhi from "../../images/Kawhi.jpeg";
function Clippers() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Los Angeles Clippers</h3>
        <div className="logo-container">
          <img src={ClippersLogo} alt="Clippers logo" className="team-logo" />
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

export default Clippers;
