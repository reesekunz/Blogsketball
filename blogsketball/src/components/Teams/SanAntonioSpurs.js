import React from "react";
import "./teams.scss";
import SpursLogo from "../../images/Spurs.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Derrick from "../../images/Derrick.jpeg";
import Dejounte from "../../images/Dejounte.jpeg";
import Aldridge from "../../images/Aldridge.jpeg";
import Demar from "../../images/Demar.jpeg";
function Spurs() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">San Antonio Spurs</h3>
        <div className="logo-container">
          <img src={SpursLogo} alt="Spurs logo" className="team-logo" />
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

export default Spurs;
