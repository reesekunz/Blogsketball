import React from "react";
import { NavLink } from "react-router-dom";
import "./PlayerSpotlights.scss";
import Zion from "../../images/Zion.jpg";
import Warren from "../../images/Warren.jpg";
import Jokic from "../../images/Jokic.jpg";
import RoCo from "../../images/RoCo.jpg";
import Giannis from "../../images/Giannis.jpg";
import Dame from "../../images/Dame.jpg";
import DLo from "../../images/DLO.jpg";
import RJ from "../../images/RJ.jpg";
import DBook from "../../images/DBook.jpg";
import Jaylen from "../../images/Jaylen.jpg";
import { IoIosSearch } from "react-icons/io";
import SearchBarForm from "./SearchBarForm";
function PlayerSpotlights() {
  return (
    <div className="player-spotlights-container">
      <h2 className="player-spotlights-header">Player Spotlights</h2>

      <div className="search-bar-container">
        <div className="search-bar">
          {/* <IoIosSearch size={20} />
          Search player */}
          <SearchBarForm />
        </div>
      </div>
      <div className="players-container">
        <div className="row">
          <div className="player" id="Dame-Dolla">
            <NavLink
              to="/dame"
              activeClassName="activeNavButton"
              className="player-spotlight-link"
            >
              <div className="player-img-container">
                <img className="player-img-red" src={Dame} alt="Dame Dolla" />
              </div>
              <div className="player-info-container">
                <h5 className="player-name">Damian Lillard</h5>
                <p className="player-info">Portland Trail Blazers</p>
              </div>
            </NavLink>
          </div>
          <div className="player">
            <NavLink
              to="/dlo"
              activeClassName="activeNavButton"
              className="player-spotlight-link"
            >
              <div className="player-img-container">
                <img className="player-img-blue" src={DLo} alt="DLo" />
              </div>
              <div className="player-info-container">
                <h5 className="player-name">D'Angelo Russell</h5>
                <p className="player-info"> Minnesota Timberwolves</p>
              </div>
            </NavLink>
          </div>
          <div className="player">
            <NavLink
              to="/dbook"
              activeClassName="activeNavButton"
              className="player-spotlight-link"
            >
              <div className="player-img-container">
                <img
                  className="player-img-orange"
                  src={DBook}
                  alt="Devin Booker"
                />
              </div>
              <div className="player-info-container">
                <h5 className="player-name">Devin Booker</h5>
                <p className="player-info">Phoenix Suns</p>
              </div>
            </NavLink>
          </div>

          <div className="player">
            <NavLink
              to="/giannis"
              activeClassName="activeNavButton"
              className="player-spotlight-link"
            >
              <div className="player-img-container">
                <img className="player-img-green" src={Giannis} alt="Giannis" />
              </div>
              <div className="player-info-container">
                <h5 className="player-name">Giannis Ante.</h5>
                <p className="player-info">Milwaukee Bucks</p>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="player">
            <NavLink
              to="/jaylen-brown"
              activeClassName="activeNavButton"
              className="player-spotlight-link"
            >
              <div className="player-img-container">
                <img
                  className="player-img-green"
                  src={Jaylen}
                  alt="Jaylen Brown"
                />
              </div>
              <div className="player-info-container">
                <h5 className="player-name">Jaylen Brown</h5>
                <p className="player-info">Boston Celtics</p>
              </div>
            </NavLink>
          </div>
          <div className="player">
            <NavLink
              to="/jokic"
              activeClassName="activeNavButton"
              className="player-spotlight-link"
            >
              <div className="player-img-container">
                <img
                  className="player-img-blue"
                  src={Jokic}
                  alt="Nikola Jokic"
                />
              </div>
              <div className="player-info-container">
                <h5 className="player-name">Nikola Jokic</h5>
                <p className="player-info"> Denver Nuggets</p>
              </div>
            </NavLink>
          </div>
          <div className="player">
            <NavLink
              to="/rj"
              activeClassName="activeNavButton"
              className="player-spotlight-link"
            >
              <div className="player-img-container">
                <img className="player-img-orange" src={RJ} alt="RJ Barrett" />
              </div>
              <div className="player-info-container">
                <h5 className="player-name">R.J. Barrett</h5>
                <p className="player-info">New York Knicks</p>
              </div>
            </NavLink>
          </div>
          <div className="player">
            <NavLink
              to="/covington"
              activeClassName="activeNavButton"
              className="player-spotlight-link"
            >
              <div className="player-img-container">
                <img
                  className="player-img-red"
                  src={RoCo}
                  alt="Robert Covington"
                />
              </div>
              <div className="player-info-container">
                <h5 className="player-name">Robert Covington </h5>
                <p className="player-info">Houston Rockets</p>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="player">
            <NavLink
              to="/warren"
              activeClassName="activeNavButton"
              className="player-spotlight-link"
            >
              <div className="player-img-container">
                <img
                  className="player-img-yellow"
                  src={Warren}
                  alt="TJ Warren"
                />
              </div>
              <div className="player-info-container">
                <h5 className="player-name">T.J. Warren</h5>
                <p className="player-info">Indiana Pacers</p>
              </div>
            </NavLink>
          </div>

          <div className="player">
            <NavLink
              to="/zion"
              activeClassName="activeNavButton"
              className="player-spotlight-link"
            >
              <div className="player-img-container">
                <img className="player-img-blue" src={Zion} alt="zion" />
              </div>
              <div className="player-info-container">
                <h5 className="player-name">Zion Williamson</h5>
                <p className="player-info">New Orleans Pelicans</p>
              </div>
            </NavLink>
          </div>
        </div>
        {/* <div className="row">
          <div className="player">
            <div className="player-img-container">
              <img className="player-img" src={Zion} alt="zion" />
            </div>
            <h5 className="player-name">Zion Williamson</h5>
            <p className="player-info">New Orleans Pelicans</p>
          </div>
          <div className="player">
            <div className="player-img-container">
              <img className="player-img" src={Zion} alt="zion" />
            </div>
            <h5 className="player-name">Zion Williamson</h5>
            <p className="player-info">New Orleans Pelicans</p>
          </div>
          <div className="player">
            <div className="player-img-container">
              <img className="player-img" src={Zion} alt="zion" />
            </div>
            <h5 className="player-name">Zion Williamson</h5>
            <p className="player-info"> New Orleans Pelicans</p>
          </div>
          <div className="player">
            <div className="player-img-container">
              <img className="player-img" src={Zion} alt="zion" />
            </div>
            <h5 className="player-name">Zion Williamson</h5>
            <p className="player-info">New Orleans Pelicans</p>
          </div>
          <div className="player">
            <div className="player-img-container">
              <img className="player-img" src={Zion} alt="zion" />
            </div>
            <h5 className="player-name">Zion Williamson</h5>
            <p className="player-info">New Orleans Pelicans</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default PlayerSpotlights;
