import React from "react";
import "../articles.scss";
import RJIMG from "../../images/RJ.jpeg";
function RJ() {
  return (
    <div className="article-container">
      <h3 className="article-header">R.J. Barrett</h3>
      <h3 className="player-team">SG/SF, New York Knicks</h3>
      <div className="article-header-img-container">
        <img className="article-header-img" src={RJIMG} alt="RJ Barrett" />
      </div>
      <div className="date-written">March 19th, 2020</div>
      <div className="article-content">
        <p>
          2019-20: 14.3 PPG, 5.0 REB, 2.6 AST, 40.2 FG%, 32.0 3PT%, 61.4 FT%{" "}
        </p>
        <p>College: Duke</p>
        <p>Pick: 3rd overall </p>
        <p>Player Comparison: Penny Hardaway</p>
        <p>
          “He’s an incredibly talented, well-rounded basketball player. He does
          a bit of everything. I think he will evolve into a great playmaker
          because that’s a natural ability for him that he doesn’t necessarily
          get to shine in at this stage of his career.” - Steve Nash (Barrett’s
          godfather).
        </p>
        <p>
          If anyone knows about playmaking, it’s Steve Nash. Barrett is just
          about as underrated as anyone who was the number one high school
          recruit, 3rd overall NBA Draft selection, and playing in New York can
          be.
        </p>

        <p>
          He needs to improve his shooting efficiency, but Barrett has excellent
          size (6’6), athleticism, ball-handling, vision, and versatility to
          thrive in the NBA. People are impatient in today’s NBA and forget that
          Barrett is only 19 years old; he has plenty of time to develop his
          shot. The man doesn’t even know if he should shoot with his left or
          right hand yet!
        </p>

        <p>Here’s Barrett’s accolades to date (among others):</p>
        <ul>
          <li>First-team All-American</li>
          <li>Jerry West Award</li>
          <li>First-team All-ACC</li>
          <li>ACC All-Freshman team</li>
          <li>Gatorade National Player of the Year</li>
          <li>Mr. Basketball USA</li>
          <li>Naismith Prep Player of the Year</li>
        </ul>

        <p>
          R.J. really does have potential to be an All-Star in the league. He
          was showing glimpses of what he’s capable of during the month of
          March, where he averaged 18.7 PPG, 4.5 REB, and 3.3 AST, 1.7 STL on
          44.8 FG%, 33.3 3PT%, and 75.8 FT%. He could be a very good defender at
          the NBA level too, as someone who is capable of guarding multiple
          positions with his size and athleticism.
        </p>
        <p>
          Barrett has been receiving less attention than his rookie classmates
          Zion Williamson, Ja Morant, and even Tyler Herro. But if he can adjust
          to the NBA and develop a jump shot, he really could be the face of the
          New York Knicks for the next decade. R.J. should not be flying under
          the radar as much as he has been; people are specifically sleeping on
          his playmaking ability. The Knicks need to turn the keys over the R.J.
          and revolve the offense around him instead of playing 3 veteran power
          forwards or whatever it is they’re doing over there.
        </p>
        <p>I see multiple All-Star appearances in R.J. Barrett’s future.</p>
      </div>
    </div>
  );
}

export default RJ;
