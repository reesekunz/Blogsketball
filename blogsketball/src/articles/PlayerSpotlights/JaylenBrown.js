import React from "react";
import "../articles.scss";
import JaylenIMG from "../../images/Jaylen.jpg";
function JaylenBrown() {
  return (
    <div className="article-container">
      <h3 className="article-header">Jaylen Brown</h3>
      <h3 className="player-team">Shooting Guard, Boston Celtics</h3>
      <div className="article-header-img-container">
        <img
          className="article-header-img"
          src={JaylenIMG}
          alt="Jaylen Brown"
        />
      </div>
      <div className="date-written">March 21st, 2020</div>
      <div className="article-content">
        <p>
          2019-20: 20.2 PPG, 6.4 REB, 2.2 AST, 49.5 FG%, 38.1 3PT%, 74.3 FT%
        </p>
        <p>Career: 12.7 PPG, 4.4 REB, 1.4 AST, 47.1 FG%, 36.8 3PT%, 68.0 FT%</p>
        <p>College: California </p>
        <p>Pick: 3rd overall</p>
        <p>Player Comparison: Kawhi Leonard</p>
        <p>
          Jaylen Brown has been heavily recruited ever since high school. He was
          the #4 recruit in his class behind Ben Simmons, Skal Labissiere, and
          Brandon Ingram.
        </p>

        <p>
          Brown actually reminded me more of Andre Iguodala coming into the
          league. He relied heavily on his athleticism and slashing ability to
          get open, and was already solid on the defensive end. Brown only
          averaged 6.6 points per game in his rookie season, and some were way
          too quick to call him a bust.{" "}
        </p>

        <p>
          He made a huge leap in his Sophomore campaign, increasing his scoring
          from 6.6 to 14.5 points per game. One aspect of his game that he’s
          improved the most is his shooting ability. Brown came into the league
          with a shooting split of 45/34/69, but is now much more efficient,
          shooting 49/38/74. His ability to shoot the three ball and combination
          of athleticism and solid instincts on the defensive end is why I
          compare him to a poor man’s Kawhi Leonard.
        </p>
        <p>Accolades:</p>
        <ul>
          <li>NBA All-Rookie Second Team</li>
          <li>First-team All-Pac-12</li>
          <li>McDonald’s All-American</li>
          <li>Mr. Georgia Basketball </li>
        </ul>
        <p>
          Outside of his basketball accomplishments, Jaylen Brown may be one of
          the most intelligent and ambitious students to play in the NBA. He
          took a masters-level class while at Berkeley, studies Spanish,
          history, meditation, and philosophy in his free time, and has publicly
          stated his goal is to learn three more languages before he turns 25.
        </p>
        <p>
          From averaging 6.6 points a game his rookie year, to recently signing
          a $115 million contract, Jaylen Brown has come a long way in the NBA.
          No one should be surprised with his progression, however, as he is one
          of the hardest working players in the NBA and a true student of the
          game.
        </p>
      </div>
    </div>
  );
}

export default JaylenBrown;
