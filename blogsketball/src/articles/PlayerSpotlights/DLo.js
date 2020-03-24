import React from "react";
import "../articles.scss";
import DLoIMG from "../../images/DLO.jpeg";
function DLo() {
  return (
    <div className="article-container">
      <h3 className="article-header">D’Angelo Russell</h3>
      <h3 className="player-team">Point Guard, Minnesota Timberwolves</h3>
      <div className="article-header-img-container">
        <img
          className="article-header-img"
          src={DLoIMG}
          alt="DAngelo Russell"
        />
      </div>
      <div className="date-written">March 19th, 2020</div>
      <div className="article-content">
        <p>2019-20: 23.6 PPG, 3.7 REB, 6.2 AST, 43.0 FG%, 37.4 3PT% 78.5 FT%</p>
        <p>Career: 17.3 PPG, 3.7 REB, 5.2 AST, 42.1 FG%, 35.8 3PT%, 76.8 FT%</p>
        <p>College: Ohio State</p>
        <p>Pick: 2nd overall</p>

        <p>
          DLo is only 24 years old and has already played on four different NBA
          teams (Lakers, Nets, Warriors, Timberwolves). But, alongside his good
          friend Karl Anthony-Towns, he seems to have finally found a home in
          Minnesota.
        </p>

        <p>
          The Lakers are obviously fine now, but they should definitely regret
          getting rid of Russell so easily. In 2017, D’Angelo Russell and
          Timofey Mozgov were traded to Brooklyn for Brook Lopez and the 27th
          pick in the NBA draft (which turned out to be Kyle Kuzma).
        </p>
        <p>
          One year later, D’Angelo drastically improved and was selected to the
          NBA All-Star game. That season, he averaged 21.1 PPG, 7.0 AST, and 3.9
          REB.
        </p>
        <p>
          The following year (this past offseason), The Brooklyn Nets signed
          both Kevin Durant and Kyrie Irving to max contracts, meaning they
          didn’t have enough cap space to keep Russell. Instead, he went to
          Golden State via a sign and trade, signing for $117 million over four
          years.{" "}
        </p>

        <p>
          Analysts were always questioning Russell’s fit with the Warriors when
          Steph Curry and Klay Thompson returned from their respective injuries.
          As good as Russell is, he’s a negative on defense and is much better
          suited with the ball in his hands running the offense.
        </p>
        <p>
          In what appears to be a long-term trade for Minnesota to keep their
          coveted star Karl-Anthony Towns happy, the Timberwolves traded Andrew
          Wiggins, a 2021 protected first-round pick and a 2021 second-round
          pick to acquire D’Angelo Russell.
        </p>
        <p>
          Minnesota finally seems like they're on the right track in terms of
          building a young core, with Towns (24 years old) and Russell (24)
          being the franchise cornerstones to build around. I say this as a
          loyal Suns fan... please stay away from recruiting your other good
          friend Devin Booker.
        </p>
        <p>
          Fun fact: DLO wears #0 because it represents the number of people who
          can guard him.{" "}
        </p>
      </div>
    </div>
  );
}

export default DLo;
