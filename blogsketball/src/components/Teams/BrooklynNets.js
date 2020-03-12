import React from "react";
import "./teams.scss";
import NetsLogo from "../../images/Nets.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import DJ from "../../images/DJ.jpeg";
import Dinwiddie from "../../images/Dinwiddie.jpeg";
import Kyrie from "../../images/Kyrie.jpeg";
import KD from "../../images/KD.jpeg";
function Nets() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Brooklyn Nets</h3>
        <div className="logo-container">
          <img src={NetsLogo} alt="Nets logo" className="team-logo" />
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
export default Nets;
