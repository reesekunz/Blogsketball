import React from "react";
import "./articles.scss";
import Projections from "../images/538Projections.png";

function NBARank1to5() {
  return (
    <div className="article-container">
      <h3 className="article-header">NBA Rank: 1-5</h3>
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
        {/* Lebron James */}
        <h5>1. LeBron James, Los Angeles Lakers</h5>
        <p>
          2019-20 Stats: 25.0 PPG, 7.8 REB, 10.8 AST, 48.9 FG%, 34.5 3PT%, 68.7
          FT%
        </p>
        <p>
          Career Stats: 27.1 PPG, 7.4 REB, 7.4 AST, 50.4 FG%, 34.4 3PT%, 73.5
          FT%
        </p>
        {/* Kevin Durant */}
        <h5>2. Kevin Durant, Brooklyn Nets</h5>
        <p>
          2018-19: 26.0 PPG, 6.4 REB, 5.9 AST, 52.1 FG%, 35.3 3PT%, 88.5 FT%
        </p>
        <p>Career: 27.0 PPG, 7.1 REB, 4.1 AST, 49.3 FG%, 38.1 3PT%, 88.3 FT%</p>
        {/* Giannis  */}
        <h5>3. Giannis Antetokounmpo, Milwaukee</h5>
        <p>
          2019-20: 30.0 PPG, 13.5 REB, 5.8 AST, 54.9 FG%, 31.3 3PT%, 61.4 FT%
        </p>
        <p>Career: 19.8 PPG, 8.8 REB, 4.3 AST, 52.5 FG%, 28.5 3PT%, 72.3 FT%</p>
        {/* James Harden */}
        <h5>4. James Harden, Houston</h5>
        <p>
          2019-20: 35.3 PPG, 6.5 REB, 7.3 AST, 43.7 FG%, 35.8 3PT%, 86.9 FT%
        </p>
        <p>Career: 25.0 PPG, 5.3 REB, 6.3 AST, 44.3 FG%, 36.4 3PT%, 85.8 FT%</p>
        {/* Steph Curry */}
        <h5>5. Stephen Curry, Golden State</h5>
        <p>
          2018-19: 27.3 PPG, 5.3 REB, 5.2 AST, 47.2 FG%, 43.7 3PT%, 91.6 FT%
        </p>
        <p>Career: 23.5 PPG, 4.5 REB, 6.6 AST, 47.6 FG%, 43.5 3PT%, 90.5 FT%</p>
      </div>
    </div>
  );
}

export default NBARank1to5;
