import React from "react";
import "./teams.scss";
import MavsLogo from "../../images/Mavs.jpeg";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Dorian from "../../images/Dorian.jpeg";
import Kristaps from "../../images/Kristaps.jpeg";
import Luka from "../../images/Luka.jpeg";
function Mavs() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Dallas Mavericks</h3>
        <div className="logo-container">
          <img src={MavsLogo} alt="Mavs logo" className="team-logo" />
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
export default Mavs;
