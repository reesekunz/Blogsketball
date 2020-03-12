import React from "react";
import "./teams.scss";
import NuggetsLogo from "../../images/Nuggets.jpeg";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Monte from "../../images/Monte.jpeg";
import Gary from "../../images/Gary.jpeg";
import MPJ from "../../images/MPJ.jpeg";
import Paul from "../../images/Paul.jpeg";
import Jamal from "../../images/Jamal.jpeg";
import Jokic from "../../images/Jokic.jpeg";
function Nuggets() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Denver Nuggets</h3>
        <div className="logo-container">
          <img src={NuggetsLogo} alt="Nuggetslogo" className="team-logo" />
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

export default Nuggets;
