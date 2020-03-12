import React from "react";
import "./teams.scss";
import CelticsLogo from "../../images/Celtics.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Zion from "../../images/Zion.jpeg";
import Gordon from "../../images/Gordon.jpeg";
import Jaylen from "../../images/Jaylen.jpeg";
import Kemba from "../../images/Kemba.jpeg";
function Celtics() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Boston Celtics</h3>
        <div className="logo-container">
          <img src={CelticsLogo} alt="Celtics logo" className="team-logo" />
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

export default Celtics;
