import React from "react";
import "./articles.scss";
import Projections from "../images/538Projections.png";

function NBARank41to50() {
  return (
    <div className="article-container">
      <h3 className="article-header">NBA Rank: 41-50</h3>
      <div className="article-header-img-container">
        <img
          className="article-header-img"
          src={Projections}
          alt="article image"
        />
        <div className="article-caption">NBA Rank </div>
      </div>
      <div className="date-written">February 21st, 2020</div>
      <div className="article-content">
        <p>Blah blah blah.</p>
      </div>
    </div>
  );
}

export default NBARank41to50;
