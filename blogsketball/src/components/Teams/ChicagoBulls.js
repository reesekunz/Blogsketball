import React from "react";
import "./teams.scss";
import BullsLogo from "../../images/Bulls.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Zion from "../../images/Zion.jpeg";
import Zach from "../../images/Zach.jpeg";
function Bulls() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Chicago Bulls</h3>
        <div className="logo-container">
          <img src={BullsLogo} alt="Bulls logo" className="team-logo" />
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
export default Bulls;
