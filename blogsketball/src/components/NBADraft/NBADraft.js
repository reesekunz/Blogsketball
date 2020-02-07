import React from "react";
import "./NBADraft.scss";
import MockDraft from "./AGGridMockDraft";

function NBADraft() {
  return (
    <div className="nba-draft-container">
      <h3 className="nba-draft-header">2020 NBA Mock Draft</h3>
      <h4 className="last-updated">Last updated: 02-06-2020</h4>
      <div className="round-table-container">
        <MockDraft />
      </div>
    </div>
  );
}

export default NBADraft;
