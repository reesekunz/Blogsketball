import React from "react";
import "./articles.scss";
import AllStarGame from "../images/AllStarGame.jpeg";

function ASG() {
  return (
    <div className="article-container">
      <h3 className="article-header">
        2020 NBA All-Star Game Epitomized "Mamba Mentality"
      </h3>
      <div className="article-header-img-container">
        <img
          className="article-header-img"
          src={AllStarGame}
          alt="NBA All Star Game"
        />
        <div className="article-caption">
          The 4th quarter lived up to the hype.
        </div>
      </div>
      <div className="date-written">February 16th, 2020</div>
      <div className="article-content">
        <p>
          In a night that was heavily dedicated towards honoring the lives of
          Kobe Bryant, Gianna Bryant, and the other victims of the tragic
          helicopter crash, Kobe would not have been more proud of the “mamba
          mentality” that transpired throughout the game - particularly in the
          fourth quarter.
        </p>
        <p>
          The life of Kobe was celebrated during the All-Star game with multiple
          some really touching tributes:
        </p>
        <ul>
          <li>
            Team LeBron players all wore #2 (Gianna’s number) and Team Giannis
            players all wore #24
          </li>
          <li>
            Dr. Dre and Jennifer Hudson created a video tribute for Kobe before
            the game that was really well-done
          </li>
          <li>
            Magic Johnson lead an 8 second moment of silence to honor Kobe
            Bryant and David Stern before the game
          </li>
          <li>
            The Kia All-Star Game MVP Award was renamed to the Kia NBA Kobe
            Bryant All-Star MVP
          </li>
        </ul>

        <p>
          But, the one that had the biggest impact from an entertainment
          standpoint was how the winner was determined. Instead of a normal 4th
          quarter scoring, the league decided to make it first to the target
          score, which would be 24 points added to the score of the team that
          was leading after the end of the 3rd quarter. Team Giannis was beating
          Team LeBron 133-124 after the 3rd quarter, so the winner of the game
          would have to get to the target score of 157.
        </p>
        <p>
          The first three quarters of the game are exactly what you would expect
          of an all-star game that has that score - little defense was played,
          with alley-oops and three pointers galore. To put things in
          perspective, even Chris Paul was on the receiving-end of an alley-oop.
        </p>
        <p>
          But the 4th quarter was the epitome of “mamba mentality.” Kyle Lowry
          took two charges, players were actually complaining about foul calls,
          both coaches challenges were used - one of which was successful.
        </p>
        <p>
          The 4th quarter legitimately had the intensity of a playoff game or,
          better yet, an Olympic game with all of that talent on the floor.
        </p>
        <p>
          The score was Team LeBron: 156, Team Giannis: 155 when Anthony Davis
          was fouled while posting up Kyle Lowry. Team LeBron was in the bonus,
          meaning AD went to the line to win the game (and money for charity).
          Davis claims he intentionally missed the first free throw to challenge
          himself to make the second. He did just that and Team LeBron won
          157-155.
        </p>
        <p>
          Kawhi Leonard was named the Kia NBA Kobe Bryant All-Star MVP with 30
          points and 7 rebounds.
        </p>
        <p>
          Kawhi Leonard was named the Kia NBA Kobe Bryant All-Star MVP with 30
          points and 7 rebounds.
        </p>
        <p>
          While this was arguably the most entertaining all-star game I can
          remember, this is the one suggestion I have to improve upon it:
        </p>
        <p>
          Either double the amount of fouls it takes to get in the penalty or
          have players check up the ball when they get fouled instead of
          awarding them free throws. The game was so suspenseful in the fourth
          quarter, but had such an anti-climactic finish. I personally would
          rather teams just check up the ball on fouls, but I can also see why
          they wouldn’t want to do that with teams intentionally fouling too
          much when they’re at a disadvantage defensively. I think the simpler
          solution would be to just double the amount of fouls it takes to get
          into the penalty.{" "}
        </p>
        <p>
          Nonetheless, it was a really captivating game with a lot of new faces
          this year. The league continues to move in the right direction, and
          this successful All-Star game was just the latest example of that.
          #MambaOut
        </p>
      </div>
    </div>
  );
}

export default ASG;
