import React from "react";
import "./teams.scss";
import JazzLogo from "../../images/Jazz.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Joe from "../../images/Joe.jpeg";
import Jordan from "../../images/Jordan.jpeg";
import Conley from "../../images/Conley.jpeg";
import Ingles from "../../images/Ingles.jpeg";
import Bojan from "../../images/Bojan.jpeg";
import Rudy from "../../images/Rudy.jpeg";
function Jazz() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Utah Jazz</h3>
        <div className="logo-container">
          <img src={JazzLogo} alt="Jazz logo" className="team-logo" />
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
export default Jazz;
