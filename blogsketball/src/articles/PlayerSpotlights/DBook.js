import React from "react";
import "../articles.scss";
import DLoIMG from "../../images/DLO.jpeg";
function DBook() {
  return (
    <div className="article-container">
      <h3 className="article-header">Devin Booker</h3>
      <h3 className="player-team">Shooting Guard, Phoenix Suns</h3>
      <div className="article-header-img-container">
        <img
          className="article-header-img"
          src={DLoIMG}
          alt="DAngelo Russell"
        />
      </div>
      <div className="date-written">March 21st, 2020</div>
      <div className="article-content">
        <p>
          2019-20: 26.4 PPG, 4.2 REB, 6.3 AST, 49.6 FG%, 35.8 3PT%, 92.0 FT%
        </p>
        <p>Career: 22.2 PPG, 3.6 REB, 4.6 AST, 44.7 FG%, 35.5 3PT, 86.8 FT%</p>
        <p>College: Kentucky</p>
        <p>Pick: 13th overall</p>

        <p>Player Comparison: Kobe Bryant</p>

        <p>
          "You know, what? I’m going to be honest. If it’s someone who is under
          the radar right now that I believe is going to be a really, really,
          really good, all-star player in the league – it’s Devin Booker from
          the Phoenix Suns.” - LeBron James
        </p>
        <p>
          One year later, D’Angelo drastically improved and was selected to the
          NBA All-Star game. That season, he averaged 21.1 PPG, 7.0 AST, and 3.9
          REB.
        </p>
        <p>
          Devin Booker needed a Damian Lillard injury to get into his first
          all-star game this season, but something tells me that if the players
          themselves were voting he would have EASILY been in. DBook has a ton
          of respect from players around the league, but is oftentimes
          underappreciated outside of players because of the lack of team
          success the Suns have had.
        </p>

        <p>
          Booker was underrated coming into the league, too, as he was picked
          13th overall out of Kentucky. A large part of the reason was his lack
          of opportunity to shine at Kentucky, which was loaded at the time.
          Booker only played 21.5 minutes per game and averaged 10.0 points, 2.0
          rebounds and 1.1 assists. Scouts were enamored with his shooting, but
          underestimated his scoring and playmaking ability.
        </p>
        <p>
          On March 24th, 2017, DBook became the youngest player in NBA history
          to score over 60 points in a game, dropping a Kobe-esque 70 point game
          against the Celtics. Here are some of his other accolades:
        </p>
        <ul>
          <li>NBA All-Star</li>
          <li>NBA Three-Point Contest Champion</li>
          <li>NBA All-Rookie First Team</li>
          <li>SEC Sixth Man of the Year</li>
          <li>SEC All-Freshman Team</li>
        </ul>
        <p>
          Booker’s efficiency has increased since the Suns signed Ricky Rubio
          this past offseason to allow Booker to focus more on scoring and less
          on orchestrating the offense. Last season, he had shooting splits of
          46/32/86, compared to this season where he is shooting 49/36/91.
        </p>
        <p>
          As long as Devin Booker stays healthy, he should be a perennial
          all-star in the league. Booker is only 23 and hasn’t even entered his
          prime yet, which is a scary thought for the rest of the league.
        </p>
        <p>
          Before Kobe Bryant passed away, he challenged Devin Booker to “be
          legendary.” It’s safe to say Booker has been fulfilling that challenge
          so far.{" "}
        </p>
      </div>
    </div>
  );
}

export default DBook;
