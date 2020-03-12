import React from "react";
import "./teams.scss";
import TWolvesLogo from "../../images/TWolves.jpeg";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Zion from "../../images/Zion.jpeg";
import Malik from "../../images/Malik.jpeg";
import DLO from "../../images/DLO.jpeg";
import Towns from "../../images/Towns.jpeg";
function TWolves() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Minnesota Timberwolves</h3>
        <div className="logo-container">
          <img src={TWolvesLogo} alt="TWolves logo" className="team-logo" />
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

export default TWolves;
