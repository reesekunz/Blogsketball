import React from "react";
import "../articles.scss";
import JokicIMG from "../../images/Jokic.jpeg";
function Jokic() {
  return (
    <div className="article-container">
      <h3 className="article-header">Nikola Jokic</h3>
      <h3 className="player-team">Center, Denver Nuggets</h3>
      <div className="article-header-img-container">
        <img className="article-header-img" src={JokicIMG} alt="Nikola Jokic" />
      </div>
      <div className="date-written">March 17th, 2020</div>
      <div className="article-content">
        <p>
          2019-20: 20.6 PPG, 10.2 REB, 6.9 AST, 51.8 FG%, 32.9 3PT%, 81.0 FT%
        </p>
        <p>Career: 16.9 PPG, 9.7 REB, 5.4 AST, 52.2 FG%, 34.2 3PT%, 82.5 FT%</p>
        <p>Player comparison: Vlade Divac </p>
        <p>
          “Passing makes two people happy. Scoring only makes one person happy.”
          - Nikola Jokic
        </p>
        <p>
          Nikola Jokic may already be the best passing big man in NBA history.
          This year, his average of 6.9 nice assists is good for 15th best in
          the league, ahead of guards like Chris Paul and De’Aaron Fox. Not to
          mention, he already is in the top 10 for most triple doubles of
          all-time at the age of 25.
        </p>
        <p>
          From Serbia, Jokic was drafted 41st overall by the Denver Nuggets in
          2014. He was quite the find coming over from the Serbian League. Jokic
          finished third in Rookie of the Year voting. The following year, Jokic
          finished second in Most Improved Player voting, increasing his
          production from 10.0 PPG, 7.0 REB, 2.4 AST to 16.7 PPG, 9.8 REB, 4.9
          AST.
        </p>

        <p>
          One knock on Jokic is his lateral quickness and ability defensively to
          switch out to guards on the perimeter. He’s not a great shot blocker,
          but is good at contesting shots in the post, which is an undervalued
          skill. He more than makes up for it on the offensive end, however, as
          a big man that you can run the offense through and depend on to make
          the right play.
        </p>

        <p>
          One of my favorite stats is Real Plus Minus, or RPM. It’s one of the
          most accurate measurements of talent I’ve seen in terms of the
          league’s best players being atop the list (Giannis, LeBron, Harden are
          the top three). Jokic ranks 7th in RPM this season, and is the only
          big man in the top 10.
        </p>

        <p>
          When discussing the league’s best center, I’m taking Jokic over
          Embiid. The thing that gives him the edge in my opinion is his
          playmaking ability and the way you can efficiently run an offense
          through him.
        </p>
      </div>
    </div>
  );
}

export default Jokic;
