import React from "react";
import "./teams.scss";
import SunsLogo from "../../images/Suns.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Zion from "../../images/Zion.jpeg";
import Mikal from "../../images/Mikal.jpeg";
import Ricky from "../../images/Ricky.jpeg";
// import Kelly from "../../images/Kelly.jpeg";
import Ayton from "../../images/Ayton.jpeg";
import Booker from "../../images/Booker.jpeg";
function Suns() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Phoenix Suns</h3>
        <div className="logo-container">
          <img src={SunsLogo} alt="Suns logo" className="team-logo" />
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

export default Suns;
