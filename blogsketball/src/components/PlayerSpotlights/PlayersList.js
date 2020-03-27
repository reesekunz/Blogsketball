import React from "react";
import "./PlayersList.scss";
// Main Player Spotlight Page
function PlayersList(props) {
  console.log("Props from PlayersList", props);
  return (
    <div className="players-list-container">
      <div className="players-wrapper">
        {props.playersList.map(player => (
          <div className="player-card" key={player.id}>
            <div className="player-img-container">
              <a
                className="player-name-link"
                href="#"
                onClick={() =>
                  props.history.push(`/player-spotlights/${player.id}/info`)
                }
              >
                <img
                  src={player.img}
                  alt={player.name}
                  className="player-img"
                />
              </a>
            </div>
            <div className="player-name-container">
              <h3 className="player-name">
                <a
                  className="player-name-link"
                  href="#"
                  onClick={() =>
                    props.history.push(`/player-spotlights/${player.id}/info`)
                  }
                >
                  {player.name}
                </a>
              </h3>

              <p className="player-team">{player.team}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayersList;
