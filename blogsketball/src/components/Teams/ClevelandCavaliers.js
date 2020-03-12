import React from "react";
import "./teams.scss";
import CavsLogo from "../../images/Cavs.jpeg";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Zion from "../../images/Zion.jpeg";
import Collin from "../../images/Collin.jpeg";
import Andre from "../../images/Andre.jpeg";
// import KLove from "../../images/KLove.jpeg";
function Cavs() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Cleveland Cavaliers</h3>
        <div className="logo-container">
          <img src={CavsLogo} alt="Cavs logo" className="team-logo" />
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

export default Cavs;
