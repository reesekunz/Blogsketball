import React from "react";
import { Route, Link } from "react-router-dom";

import PlayerInfo from "./PlayerInfo";
import PlayerSummary from "./PlayerSummary";
// import playerdata from "../../data/playerData";
import "./Player.scss";
// Individual player page component

function Player(props) {
  console.log("Player", props);
  const player = props.playersList.find(
    player => player.id === parseInt(props.match.params.playerId, 10)
  );

  return (
    <>
      <div className="top-section">
        <div className="player-img-container ">
          <img className="player-img" src={player.img} alt={player.name} />
        </div>

        <div className="player-info-wrapper">
          <h1 className="player-name">{player.name}</h1>
          <h4 className="player-team">{player.team}</h4>
        </div>
      </div>

      {/* Need to figure out how to get it so the a tags are disabled if id = 0 on back btn or exceeds max range on next btn*/}
      {/* Or look into how to connect the first one with the last one */}
      {/* <a
          className="player-name-link"
          href="#"
          onClick={() =>
            props.history.push(`/player-spotlights/${player.id - 1}/info`)
          }
        >
          Back
        </a>
        <a
          className="player-name-link"
          href="#"
          onClick={() =>
            props.history.push(`/player-spotlights/${player.id + 1}/info`)
          }
        >
          Next
        </a> */}
      <div className="player-links">
        <nav>
          <Link className="link" to={`/player-spotlights/${player.id}/info`}>
            Info
          </Link>
          <Link className="link" to={`/player-spotlights/${player.id}/summary`}>
            Summary
          </Link>
        </nav>
      </div>
      <Route
        path="/player-spotlights/:playerId/info"
        render={props => <PlayerInfo {...props} player={player} />}
      />
      <Route
        path="/player-spotlights/:playerId/summary"
        render={props => <PlayerSummary {...props} player={player} />}
      />
    </>
  );
}

export default Player;
