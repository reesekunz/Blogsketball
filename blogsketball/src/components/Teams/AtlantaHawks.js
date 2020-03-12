import React from "react";
import "./teams.scss";
import HawksLogo from "../../images/Hawks.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Zion from "../../images/Zion.jpeg";
import Clint from "../../images/Clint.jpeg";
import John from "../../images/John.jpeg";
import Trae from "../../images/Trae.jpeg";

function Hawks() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Atlanta Hawks</h3>
        <div className="logo-container">
          <img src={HawksLogo} alt="Hawks logo" className="team-logo" />
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

export default Hawks;
