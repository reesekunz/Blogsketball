import React from "react";
import "./teams.scss";
import KnicksLogo from "../../images/Knicks.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Zion from "../../images/Zion.jpeg";
import Julius from "../../images/Julius.jpeg";
import Robinson from "../../images/Robinson.jpeg";
import Randle from "../../images/Randle.jpeg";

function Knicks() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">New York Knicks</h3>
        <div className="logo-container">
          <img src={KnicksLogo} alt="Knicks logo" className="team-logo" />
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

export default Knicks;
