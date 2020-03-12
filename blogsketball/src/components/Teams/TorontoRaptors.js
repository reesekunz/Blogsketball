import React from "react";
import "./teams.scss";
import RaptorsLogo from "../../images/Raptors.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Kyle from "../../images/Kyle.jpeg";
import Fred from "../../images/Fred.jpeg";
import Serge from "../../images/Serge.jpeg";
import Lowry from "../../images/Lowry.jpeg";
import Pascal from "../../images/Pascal.jpeg";
function Raptors() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Toronto Raptors</h3>
        <div className="logo-container">
          <img src={RaptorsLogo} alt="Raptors logo" className="team-logo" />
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

export default Raptors;
