import React from "react";
import "./teams.scss";
import TrailBlazersLogo from "../../images/TrailBlazers.jpeg";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Nurkic from "../../images/Nurkic.jpeg";
import Hassan from "../../images/Hassan.jpeg";
import CJ from "../../images/CJ.jpeg";
import Dame from "../../images/Dame.jpeg";
function Trailblazers() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Portland Trail Blazers</h3>
        <div className="logo-container">
          <img
            src={TrailBlazersLogo}
            alt="Trail Blazers logo"
            className="team-logo"
          />
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

export default Trailblazers;
