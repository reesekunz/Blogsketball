import React from "react";
import "./teams.scss";
import WarriorsLogo from "../../images/Warriors.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Draymond from "../../images/Draymond.jpeg";
import Wiggins from "../../images/Wiggins.jpeg";
import Klay from "../../images/Klay.jpeg";
import Steph from "../../images/Steph.jpeg";
function Warriors() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Golden State Warriors</h3>
        <div className="logo-container">
          <img src={WarriorsLogo} alt="Warriors logo" className="team-logo" />
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

export default Warriors;
