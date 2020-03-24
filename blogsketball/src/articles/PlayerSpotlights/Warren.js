import React from "react";
import "../articles.scss";
import WarrenIMG from "../../images/Warren.jpeg";
function Warren() {
  return (
    <div className="article-container">
      <h3 className="article-header">T.J. Warren</h3>
      <h3 className="player-team">Small Forward, Indiana Pacers</h3>
      <div className="article-header-img-container">
        <img className="article-header-img" src={WarrenIMG} alt="TJ Warren" />
      </div>
      <div className="date-written">March 16th, 2020</div>
      <div className="article-content">
        <p>
          2019-20: 18.5 PPG, 3.7 REB, 1.4 AST, 53.0 FG%, 37.3 3PT%, 79.8 FT%
        </p>
        <p>Career: 15.1 PPG, 4.1 REB, 1.2 AST, 50.3 FG%, 34.8 3PT%, 77.3 FT%</p>
        <p>Player comparison: Caron Butler</p>

        <p>“I’m worth more than cash considerations.” - T.J. Warren</p>

        <p>
          Well, he’s not wrong. The Phoenix Suns traded Warren AND their 32nd
          overall pick in the 2019 draft to the Indiana Pacers for cash
          considerations.
        </p>
        <p>
          The Suns have certainly improved their roster with the cleared cap
          space, most notably re-signing Kelly Oubre Jr. (2 yr, $30 million) and
          signing Ricky Rubio (3 yr, $51 million). But, still, T.J. Warren is
          probably the Pacers third best player behind Sabonis and Oladipo. He’s
          a solid wing player that is almost shooting 40% from three.
        </p>
        <p>
          Warren went to college at North Carolina State, where he was named ACC
          Player of the Year in his sophomore season over Duke's Jabari Parker.
          In that season, Warren led the ACC in scoring at 24.8 ppg on 53.2 FG%.
          He also had back-to-back games scoring 41 points and 42 points against
          Pittsburgh and Boston College, respectively.
        </p>

        <p>
          One thing I’ve always admired about Warren’s game is his efficiency.
          He shoots over 50% from the field in his career and is shooting 53%
          from the field this season. Guys shooting around that clip you ask?
          Giannis, Andre Drummond, and DeMar DeRozan.
        </p>
        <p>
          T.J. Warren is one of the most underrated players in the league. The
          Pacers got a steal in acquiring Warren. Biggest steal since Jackie
          Moon traded away a washing machine for Ed Monix.
        </p>
      </div>
    </div>
  );
}

export default Warren;
