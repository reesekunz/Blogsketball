import React from "react";
import "./Player.scss";

function PlayerSummary(props) {
  return (
    <div className="player-summary-container">
      {props.player.summary.map(each_summary => (
        <p key={each_summary}>{each_summary}</p>
      ))}
    </div>
  );
}

export default PlayerSummary;
