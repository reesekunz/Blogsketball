import React from "react";
import "./teams.scss";
import HornetsLogo from "../../images/Hornets.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Zion from "../../images/Zion.jpeg";
import Terry from "../../images/Terry.jpeg";

function Hornets() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Charlotte Hornets</h3>
        <div className="logo-container">
          <img src={HornetsLogo} alt="Hornets logo" className="team-logo" />
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

export default Hornets;
