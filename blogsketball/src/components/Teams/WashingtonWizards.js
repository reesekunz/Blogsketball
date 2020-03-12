import React from "react";
import "./teams.scss";
import WizardsLogo from "../../images/Wizards.jpeg";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Zion from "../../images/Zion.jpeg";
import Bertans from "../../images/Bertans.jpeg";
import JohnWall from "../../images/JohnWall.jpeg";
import Beal from "../../images/Beal.jpeg";
function Wizards() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Washington Wizards</h3>
        <div className="logo-container">
          <img src={WizardsLogo} alt="Wizards logo" className="team-logo" />
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
export default Wizards;
