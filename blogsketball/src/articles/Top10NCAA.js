import React from "react";
import "./articles.scss";
import Baylor from "../images/Baylor.jpeg";

function Top10NCAA() {
  return (
    <div className="article-container">
      <h3 className="article-header">
        Breaking Down The Top-10 Ranked College Basketball Teams
      </h3>
      <div className="article-header-img-container">
        <img className="article-header-img" src={Baylor} alt="Baylor Bears" />
        <div className="article-caption">
          Could this be the year Baylor finally wins it all?
        </div>
      </div>
      <div className="date-written">February 12th, 2020</div>
      <div className="article-content">
        {/* Celtics */}
        <p>
          Note: The rankings for the top 10 teams are based off the AP Top 25 as
          of February 12th, not my own personal rankings.{" "}
        </p>
        {/* Baylor  */}
        <h5>1. Baylor</h5>
        <p>Record: 21-1 </p>
        <p>Vegas Odds: +1000 </p>
        <p>Top Players:</p>
        <ul>
          <li>
            Jared Butler, G, SO: 15 PPG, 3.0 AST, 2.6 REB, 41.1 FG%, 36.4 3PT%,
            82.3 FT%
          </li>
          <li>
            MaCio Teague, G, JR: 14.4 PPG, 5.0 REB, 2.0 AST, 40.7 FG%, 35.7
            3PT%, 83.2 FT%
          </li>
          <li>
            Freddie Gillespie, F, SR: 9.8 PPG, 8.9 REB, 0.4 AST, 56.6 FG%, 69.7
            FT%
          </li>
          <li>
            Davion Mitchell, G, SO: 9.8 PPG, 3.4 AST, 2.8 REB, 41.3 FG%, 32.9
            3PT%, 67.7 FT%
          </li>
        </ul>
        <p>
          With only one loss on the season to Washington, Baylor has probably
          been the most consistent team in the country this season. Their roster
          is well-suited for March Madness, too, with none of their top players
          being freshman and three out of four of them listed above being
          guards. Like Baylor teams in the past, they thrive on the defensive
          end. Baylor is obviously more than capable of winning it all this
          year; could this be the year they finally do it?
        </p>
        {/* Gonzaga */}
        <h5>2. Gonzaga</h5>
        <p>Record: 25-1</p>
        <p>Vegas Odds: +900 (best) </p>
        <p>Top Players:</p>
        <ul>
          <li>
            Filip Petrusev F, SO: 17.2 PPG, 1.3 AST, 7.9 REB, 57.6 FG%, 18.2
            3PT%, 64.7 FT%
          </li>
          <li>
            Corey Kispert F, JR: 13.8 PPG, 2.2 AST, 3.8 REB, 48.0 FG%, 44.0
            3PT%, 81.2 FT%
          </li>
          <li>
            Killian Tillie F, SR: 13.0 PPG, 1.9 AST, 4.8 REB, 50.9 FG%, 39.7
            3PT%, 72.5 FT%
          </li>
          <li>
            Joel Ayayi G, SO: 10.7 PPG, 3.4 AST, 6.2 REB, 49.0 FG%, 35.4 3PT%,
            78.3 FT%
          </li>
        </ul>
        <p>
          Gonzaga is so deep it was hard to decide who to list as their top
          players. They have seven players averaging over 10 points this season,
          which is ridiculous. There’s a reason they have slightly the best
          Vegas odds to win it all. They’re talented, experienced, and deep. The
          only question is, how will their defense fare against stronger teams?
        </p>
        {/* Kansas */}
        <h5>3. Kansas</h5>
        <p>Record: 20-3 </p>
        <p>Vegas Odds: +1000 </p>
        <p>Top Players:</p>
        <ul>
          <li>
            Devon Dotson G, SO: 18.0 PPG, 4.4 AST, 4.0 REB, 46.5 FG%, 28.1 3PT%,
            79.7 FT%
          </li>
          <li>
            Udoka Azubuike C, SR: 13.0 PPG, 0.9 AST, 9.7 REB, 75.9 FG%, 0.0
            3PT%, 43.0 FT%
          </li>
          <li>
            Ochai Agbaji G, SO: 10.3 PPG, 2.1 AST, 4.3REB, 42.3 FG%, 35.6 3PT%,
            72.5 FT%
          </li>
          <li>
            Marcus Garrett G, JR: 9.2 PPG, 4.5 AST, 4.2 REB, 46.2 FG%, 29.4
            3PT%, 64.8 FT%
          </li>
        </ul>
        <p>
          Like Baylor, Kansas has a great combination of veterans, solid guard
          play, and an outstanding defense, all of which is vital to survive and
          advance come tournament time. Out of everyone in the country, Devin
          Dotson is the player I would choose to have the ball if I needed a
          bucket down the stretch, which is always nice to have on your side.
          Kansas is actually my way-too-early pick to win the National
          Championship. Don't worry fans of other teams, I'll probably change my
          mind about twenty times before I actually submit an official bracket
          in March.
        </p>
        {/* San Diego State */}
        <h5>4. San Diego State</h5>
        <p>Record: 24-0 </p>
        <p>Vegas Odds: +1400 </p>
        <p>Top Players:</p>
        <ul>
          <li>
            {" "}
            Malachi Flynn G, JR: 16.4 PPG, 5.1 AST, 4.1 REB, 43.9 FG%, 37.2
            3PT%, 83.2 FT%
          </li>
          <li>
            {" "}
            Matt Mitchell F, JR: 12.5 PPG, 1.6 AST, 4.8 REB, 48.6 FG%, 40.5
            3PT%, 86.0 FT%
          </li>
          <li>
            {" "}
            Yanni Wetzell F, SR: 12.0 PPG, 1.4 AST, 6.5 REB, 60.7 FG%, 36.8
            3PT%, 63.8 FT%
          </li>
          <li>
            {" "}
            Jordan Schakel G, JR: 10.0 PPG, 0.6 AST, 3.4 REB, 45.8 FG%, 43.9
            3PT%, 92.1 FT%
          </li>
        </ul>
        <p>
          I don't care what conference you play in, 25-0 is extremely
          impressive. What's interesting about SDSU is that three players in their
          starting lineup are transfers. Also, all four of San Diego State's
          top scorers are upperclassmen. They'll look to rely on that experience
          come March. Something else they'll look to rely on - the talent of
          Malachi Flynn, who is averaging 16.4 points a game. San Diego State
          has never been a one seed and has only been a two seed once in 2011.
          In fact, no team coming out of the Mountain West has ever gotten a one
          seed. Could this be the year they finally get that coveted one seed?
          If they win out, I see it very hard for them to not get it -
          especially with all the inconsistent play from the top teams this
          season. Regardless of seed, San Diego State is definitely another team
          to watch out for to cut down the nets. They're a well balanced team
          that doesn't really have any weak points.
        </p>
        {/* Louisville */}
        <h5>5. Lousiville</h5>
        <p>Record: 21-3 </p>
        <p>Vegas Odds: +1000 </p>
        <p>Top Players:</p>
        <ul>
          <li>
            {" "}
            Jordan Nwora F, JR: 19.5 PPG, 1.3 AST, 7.4 REB, 46.3 FG%, 44.1 3PT%,
            81.8 FT%
          </li>
          <li>
            {" "}
            Steven Enoch C, SR: 10.5 PPG, 0.4 AST, 6.0 REB, 52.7 FG%, 32.0 3PT%,
            75.8 FT%
          </li>
          <li>
            {" "}
            Dwayne Sutton F, SR: 8.8 PPG, 2.0 AST, 8.4 REB, 50.0 FG%, 34.4 3PT%,
            70.0 FT%
          </li>
          <li>
            {" "}
            Ryan McMahon G, SR: 8.8 PPG, 1.8 AST, 1.1 REB, 43.8FG%, 46.1 3PT%,
            93.5 FT%
          </li>
        </ul>
        <p>
          The more I watch Jordan Nwoara play, the more I think he should be
          close to a lottery pick. He's an excellent shooter at 44.1% from three
          (on 6 attempts a game) and has great size at 6'7". Lead by Nwora,
          Louisville has an offense that can compete with anyone in the country.
          How far they go in the tournament is dependant on whether or not they
          can match that on the defensive end. They certainly have the talent
          and experience to put them right in the conversation for teams that
          could win it all.
        </p>

        {/* Dayton */}
        <h5>6. Dayton</h5>
        <p>Record: 21-1 </p>
        <p>Vegas Odds: +1600 </p>
        <p>Top Players:</p>
        <ul>
          <li>Player 1</li>
          <li>Player 2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        <p>Blah blah blah</p>
        {/* Duke*/}
        <h5>7. Duke</h5>
        <p>Record: 20-3 </p>
        <p>Vegas Odds: +1000 </p>
        <p>Top Players:</p>
        <ul>
          <li>Player 1</li>
          <li>Player 2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        <p>Blah blah blah</p>
        {/* Florida State */}
        <h5>8. Florida State</h5>
        <p>Record: 20-3 </p>
        <p>Vegas Odds: +3300 </p>
        <p>Top Players:</p>
        <ul>
          <li>Player 1</li>
          <li>Player 2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        <p>Blah blah blah</p>
        {/* Maryland */}
        <h5>9. Maryland</h5>
        <p>Record: 19-4 </p>
        <p>Vegas Odds: +3300 </p>
        <p>Top Players:</p>
        <ul>
          <li>Player 1</li>
          <li>Player 2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        <p>Blah blah blah</p>
        {/* Seton Hall */}
        <h5>10. Seton Hall</h5>
        <p>Record: 18-5 </p>
        <p>Vegas Odds: +2200 </p>
        <p>Top Players:</p>
        <ul>
          <li>Player 1</li>
          <li>Player 2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        <p>Blah blah blah</p>

        {/* <div className="article-img-container">
          <img
            className="article-img"
            src={Projections}
            alt="538 final odds projections"
          />
          <div className="article-caption">
            This is the article caption lmaoo
          </div>
        </div> */}
      </div>
      <p>
        I'm seeing a common theme here with the top teams this season -
        experience. It seems like this year is a little more unique compared to
        past seasons because the majority of the star players or best players on
        top teams this season aren't Freshman.{" "}
      </p>
    </div>
  );
}

export default Top10NCAA;
