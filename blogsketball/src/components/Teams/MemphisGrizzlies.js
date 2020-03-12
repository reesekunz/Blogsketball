import React from "react";
import "./teams.scss";
import GrizzliesLogo from "../../images/Grizzlies.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Zion from "../../images/Zion.jpeg";
import Jonas from "../../images/Jonas.jpeg";
import Jaren from "../../images/Jaren.jpeg";
import Morant from "../../images/Morant.jpeg";
function Grizzlies() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Memphis Grizzlies</h3>
        <div className="logo-container">
          <img src={GrizzliesLogo} alt="Grizzlies logo" className="team-logo" />
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

export default Grizzlies;
