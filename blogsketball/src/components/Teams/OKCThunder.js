import React from "react";
import "./teams.scss";
import ThunderLogo from "../../images/Thunder.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Layout from "../../helpers/Layout";
import Adams from "../../images/Adams.jpeg";
import Dennis from "../../images/Dennis.jpeg";
import Danilo from "../../images/Danilo.jpeg";
import CP3 from "../../images/CP3.jpeg";

function Thunder() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Oklahoma City Thunder</h3>
        <div className="logo-container">
          <img src={ThunderLogo} alt="Thunder logo" className="team-logo" />
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
export default Thunder;
