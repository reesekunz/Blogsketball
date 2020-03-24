import React from "react";
import "../articles.scss";
import ZionIMG from "../../images/Zion.jpeg";
function Zion() {
  return (
    <div className="article-container">
      <h3 className="article-header">Zion Williamson</h3>
      <h3 className="player-team">Forward, New Orleans Pelicans</h3>
      <div className="article-header-img-container">
        <img
          className="article-header-img"
          src={ZionIMG}
          alt="Zion Williamson"
        />
      </div>
      <div className="date-written">March 16th, 2020</div>
      <div className="article-content">
        <p>
          2019-20: 22.1 PPG, 7.5 REB, 2.2 AST, 57.6 FG%, 36.4 3PT%, 65.4 FT%
        </p>
        <p>Player comparison: Charles Barkley</p>
        <p>
          "What strikes me? His agility and his quickness. For his size, how
          strong he is, to be able to move like the way he moves, he's very
          impressive. I mean, everybody can see the athleticism. That's
          obviously, that's ridiculous. But the speed and the quickness that he
          moves [with] at that size is very impressive." - LeBron James
        </p>
        <p>
          Zion Williamson may be the most covered basketball teenager since
          LeBron James, and he’s already justified the amount of attention he’s
          been receiving only 19 games into the league. Obviously Zion is a
          walking highlight reel - he set a Duke record of a 45 inch vertical..
          at 280 pounds. But, what some people don’t realize about Zion is the
          intangibles he brings to the table to help his team win. He’s the type
          of player that can have a significant impact on a game and only score
          10 points.
        </p>
        <p>
          He’s also an amazing kid with the type of character you would want
          from someone who could potentially be the face of the league alongside
          guys like Luka Dončić and Giannis Antetokounmpo. Zion recently pledged
          to cover the salaries of the Smoothie King Center employees for the
          next 30 days with the season being postponed due to the coronavirus.
        </p>

        <p>
          "I am pledging to cover the salaries for all of those Smoothie King
          Center workers for the next 30 days. This is a small way for me to
          express my support and appreciation for these wonderful people who
          have been so great to me and my teammates and hopefully we can all
          join together to relieve some of the stress and hardship caused by
          this national health crisis." - Zion Williamson (via Instagram).
        </p>

        <p>
          Some people are concerned about the fact that Zion weighs 280 pounds,
          claiming that he is more susceptible to injury because of it. That may
          be at least somewhat valid, but Zion’s rare combination of elite size
          and athleticism is what makes him such a unique and dynamic player.
          He’s virtually unguardable if he’s already going downhill - and the
          scary thought is that he hasn’t even had enough experience yet to
          fully figure out how to optimize his skillset.
        </p>

        <p>
          Zion is an incredibly gifted athlete that has the potential to be an
          MVP in the league. At the very worst, assuming he stays healthy, Zion
          will have multiple all-star appearances on his resume. It’s safe to
          say the Pelicans have a new face of the franchise.
        </p>
      </div>
    </div>
  );
}

export default Zion;
