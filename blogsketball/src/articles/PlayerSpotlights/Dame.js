import React from "react";
import "../articles.scss";
import DameIMG from "../../images/Dame.jpeg";
function Dame() {
  return (
    <div className="article-container">
      <h3 className="article-header">Damian Lillard</h3>
      <h3 className="player-team">Point Guard, Portland Trail Blazers</h3>
      <div className="article-header-img-container">
        <img className="article-header-img" src={DameIMG} alt="Dame Dolla" />
      </div>
      <div className="date-written">March 18th, 2020</div>
      <div className="article-content">
        <p>
          2019-20: 29.5 PPG, 4.4 REB, 7.9 AST, 46.0 FG%, 39.3 3PT%, 88.9 FT%
        </p>
        <p>Career: 24.1 PPG, 4.2 REB, 6.5 AST, 43.6 FG%, 37.1 3PT%, 88.9 FT%</p>
        <p>Player Comparison: Shawn Kemp/David Robinson/LeBron James</p>
        <p>College: Weber State</p>

        <p>Pick: 6th overall</p>

        <p>Player Comparison: Kyrie Irving/Stephen Curry</p>

        <p>
          “If you want to look good in front of thousands, you have to out work
          thousands in front of nobody.” - Damian Lillard
        </p>

        <p>
          Dame Dolla is not only a rapper, he’s the best point guard in the NBA
          this season. He’s also one of my personal favorite players. Something
          I really admire about him is his loyalty to the Trail Blazers
          organization.{" "}
        </p>
        <p>
          Lillard has stuck with the Blazers through thick and thin all 8
          seasons he’s been in the league. He’s repeatedly said that he wants to
          win with them instead of taking his talents elsewhere, which is pretty
          rare these days with stars like LeBron and Durant switching teams to
          increase their odds of winning a championship.
        </p>
        <p>Accolades:</p>
        <p>5x NBA All-Star</p>
        <p>All-NBA First Team</p>
        <p>2x All-NBA Second Team</p>
        <p>All-NBA Third Team</p>
        <p>NBA Rookie of the Year</p>
        <p>2x Big Sky Player of the Year</p>

        <p>
          Lillard, like his teammate, CJ McCollum, Stephen Curry, and a couple
          others, is another guard that was selected with a high pick coming out
          of a small school that has had tremendous success in the league. He
          was only a 2-star prospect coming out of high school and is an
          excellent example of someone who has outworked everyone else to get to
          where he is today.
        </p>
        <p>
          Last season, Dame led the Blazers to his first ever Western Conference
          Finals. The most memorable play during that playoff run was his
          37-foot game-winning 3 that eliminated the Thunder from the playoffs
          (yes, I bet on the Thunder to win that game.. It’s fine. I’m fine).
        </p>
        <p>
          In my opinion, Damian Lillard is the second best point guard, which is
          even more impressive in a guard-heavy league like today's NBA.
          Westbrook may have an MVP on his resume, and Kyrie Irving may have a
          championship, but I’m taking Dame Dolla over both of them 10 times out
          of 10.
        </p>
      </div>
    </div>
  );
}

export default Dame;
