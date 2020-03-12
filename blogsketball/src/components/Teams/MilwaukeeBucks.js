import React from "react";
import "./teams.scss";
import BucksLogo from "../../images/Bucks.jpeg";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";
import KobeChampionship from "../../images/KobeChampionship.jpeg";
import { NavLink } from "react-router-dom";
import Donte from "../../images/Donte.jpeg";
import Brook from "../../images/Brook.jpeg";
import Eric from "../../images/Eric.jpeg";
import Khris from "../../images/Khris.jpeg";
import Giannis from "../../images/Giannis.jpeg";
function Bucks() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Milwaukee Bucks</h3>
        <div className="logo-container">
          <img src={BucksLogo} alt="Bucks logo" className="team-logo" />
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

export default Bucks;
