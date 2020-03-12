import React from "react";
import "./teams.scss";
import SixersLogo from "../../images/Sixers.jpeg";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import KobeChampionship from "../../images/KobeChampionship.jpeg";
import { NavLink } from "react-router-dom";
import Al from "../../images/Al.jpeg";
import Tobias from "../../images/Tobias.jpeg";
import Ben from "../../images/Ben.jpeg";
import Embiid from "../../images/Embiid.jpeg";
function Sixers() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Philadelphia 76'ers</h3>
        <div className="logo-container">
          <img src={SixersLogo} alt="Sixers logo" className="team-logo" />
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

export default Sixers;
