import React from "react";
import "./Player.scss";
function PlayerInfo(props) {
  return (
    <div className="player-info-container">
      <div className="section">
        <p>
          <strong>Position: </strong>
          {props.player.position}
        </p>
        <p>
          <strong>Height: </strong>
          {props.player.height}
        </p>
        <p>
          {" "}
          <strong>Weight: </strong>
          {props.player.weight}
        </p>
        <p>
          <strong> College: </strong>
          {props.player.college}
        </p>
        <p>
          <strong>Pick: </strong>
          {props.player.pick}
        </p>
        <p>
          <strong>Player Comparison: </strong>
          {props.player.player_comparison}
        </p>
      </div>
      <div className="section">
        <p>
          <strong>2019-20: </strong> {props.player.year_stats}
        </p>
        <p>
          <strong>Career: </strong>
          {props.player.career_stats}
        </p>

        <strong>Accolades: </strong>
        <ul>
          {props.player.accolades.map(each_accolade => (
            <li key={each_accolade}>{each_accolade}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PlayerInfo;
