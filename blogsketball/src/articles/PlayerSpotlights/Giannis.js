import React from "react";
import "../articles.scss";
import GiannisIMG from "../../images/Giannis.jpeg";
function Giannis() {
  return (
    <div className="article-container">
      <h3 className="article-header">Giannis Antetokounmpo</h3>
      <h3 className="player-team">Forward, Milwaukee Bucks</h3>
      <div className="article-header-img-container">
        <img className="article-header-img" src={GiannisIMG} alt="Giannis" />
      </div>
      <div className="date-written">March 18th, 2020</div>
      <div className="article-content">
        <p>
          2019-20: 30.0 PPG, 13.5 REB, 5.8 AST, 54.9 FG%, 31.3 3PT%, 61.4 FT%
        </p>
        <p>Career: 19.8 PPG, 8.8 REB, 4.3 AST, 52.5 FG%, 28.5 3PT%, 72.3 FT%</p>
        <p>Player Comparison: Shawn Kemp/David Robinson/LeBron James</p>
        <p>
          Giannis should be receiving his second consecutive MVP award whenever
          this season actually finishes up. His league-leading RPM of 7.96 is a
          whole one point higher than LeBron’s, who is second on the list at
          6.86.
        </p>
        <p>
          There’s a reason people call him the “Greek Freak”. Giannis is unlike
          anything we’ve ever seen before, which made his player comparison
          pretty difficult. Here’s what he actually reminds me of:
        </p>

        <p>Shawn Kemp - height, athleticism, ability to drive to the hoop</p>

        <p>
          David Robinson - height, athleticism, ball handling ability relative
          to size
        </p>

        <p>LeBron James - point-forward/ playmaking ability</p>
        <p>Shaquille O'Neal - sheer dominance in the paint</p>
        <p>
          David Robinson was an extremely underrated ball handler for a big. He
          definitely had potential to be the original Giannis, but wasn't’
          really developed to be a playmaker. Here’s a
          <a href="https://www.youtube.com/watch?v=pvD3DlzusBI&feature=youtu.be ">
            good video of his ball handling ability:
          </a>
        </p>
        <p>
          If those are the four players that you’re a hybrid of, you’re probably
          going to be in the Hall of Fame and win multiple MVPs.
        </p>
        <p>
          Giannis has steadily improved his three point shot to the point where
          it is now respectable, which only makes him even more impossible to
          guard. Giannis came into the league shooting around 25% from three his
          first four seasons, and is now shooting 30.6% from three this season.
        </p>
        <p>
          "I wish I could be 7-feet, run and just dunk. That takes no skill at
          all," Harden said. "I gotta actually learn how to play basketball and
          how to have skill. I'll take that any day." - James Harden.
        </p>
        <p>
          I’m actually a huge advocate for James Harden and think he’s
          underrated, but he couldn’t be more off here. That might have been
          true when Giannis first came into the league, but he’s worked
          extremely hard to become a top 3 player in the league and definitely
          deserves more respect than this.{" "}
        </p>
        <p>
          One thing that will determine how highly Giannis is regarded in terms
          of where he falls on the all-time list is whether or not he wins a
          championship. The Bucks have had a historical season and could
          certainly win it all when the season resumes. But, until he gets that
          ring, it’s hard to put him in the same conversation as guys like Kevin
          Durant.
        </p>
      </div>
    </div>
  );
}

export default Giannis;
