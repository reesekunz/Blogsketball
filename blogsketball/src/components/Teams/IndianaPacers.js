import React from "react";
import "./teams.scss";
import PacersLogo from "../../images/Pacers.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Myles from "../../images/Myles.jpeg";
import Brogdon from "../../images/Brogdon.jpeg";
import TJ from "../../images/TJ.jpeg";
import Sabonis from "../../images/Sabonis.jpeg";
import Oladipo from "../../images/Oladipo.jpeg";
function Pacers() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Indiana Pacers</h3>
        <div className="logo-container">
          <img src={PacersLogo} alt="Pacers logo" className="team-logo" />
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
export default Pacers;
