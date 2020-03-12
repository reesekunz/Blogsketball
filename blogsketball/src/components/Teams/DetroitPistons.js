import React from "react";
import "./teams.scss";
import PistonsLogo from "../../images/Pistons.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Blake from "../../images/Blake.jpeg";
import DRose from "../../images/DRose.jpeg";

function Pistons() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Detroit Pistons</h3>
        <div className="logo-container">
          <img src={PistonsLogo} alt="Pistons logo" className="team-logo" />
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
export default Pistons;
