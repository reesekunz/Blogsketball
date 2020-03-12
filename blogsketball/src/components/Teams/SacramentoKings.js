import React from "react";
import "./teams.scss";
import KingsLogo from "../../images/Kings.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import { NavLink } from "react-router-dom";
import Buddy from "../../images/Buddy.jpeg";
import Harrison from "../../images/Harrison.jpeg";
import Bogdan from "../../images/Bogdan.jpeg";
import Bagley from "../../images/Bagley.jpeg";
import Hield from "../../images/Hield.jpeg";
import Fox from "../../images/Fox.jpeg";
function Kings() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Sacramento Kings</h3>
        <div className="logo-container">
          <img src={KingsLogo} alt="Kings logo" className="team-logo" />
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

export default Kings;
