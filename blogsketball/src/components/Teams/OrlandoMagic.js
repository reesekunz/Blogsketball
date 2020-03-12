import React from "react";
import "./teams.scss";
import MagicLogo from "../../images/Magic.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Evan from "../../images/Evan.jpeg";
import Isaac from "../../images/Isaac.jpeg";
import Vuc from "../../images/Vuc.jpeg";
function Magic() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Orlando Magic</h3>
        <div className="logo-container">
          <img src={MagicLogo} alt="Magic logo" className="team-logo" />
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
export default Magic;
