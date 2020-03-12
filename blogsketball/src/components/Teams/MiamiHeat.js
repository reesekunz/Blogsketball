import React from "react";
import "./teams.scss";
import HeatLogo from "../../images/Heat.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Zion from "../../images/Zion.jpeg";
import Jae from "../../images/Jae.jpeg";
import Dragic from "../../images/Dragic.jpeg";
import Bam from "../../images/Bam.jpeg";
import Jimmy from "../../images/Jimmy.jpeg";
function Heat() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Miami Heat</h3>
        <div className="logo-container">
          <img src={HeatLogo} alt="Heat logo" className="team-logo" />
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
export default Heat;
