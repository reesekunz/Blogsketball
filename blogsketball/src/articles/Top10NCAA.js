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
          impressive. What's interesting about SDSU is that three players in
          their starting lineup are transfers. Also, all four of San Diego
          State's top scorers are upperclassmen. They'll look to rely on that
          experience come March. Something else they'll look to rely on - the
          talent of Malachi Flynn, who is averaging 16.4 points a game. San
          Diego State has never been a one seed and has only been a two seed
          once in 2011. In fact, no team coming out of the Mountain West has
          ever gotten a one seed. Could this be the year they finally get that
          coveted one seed? If they win out, I see it very hard for them to not
          get it - especially with all the inconsistent play from the top teams
          this season. Regardless of seed, San Diego State is another team to
          watch out for to cut down the nets. They're a well balanced team that
          doesn't really have any weak points.
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
            Ryan McMahon G, SR: 8.8 PPG, 1.8 AST, 1.1 REB, 43.8 FG%, 46.1 3PT%,
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
          <li>
            {" "}
            Obi Toppin F, SO: 19.7 PPG, 2.1 AST, 7.9 REB, 63.1 FG%, 35.9 3PT%,
            71.8 FT%
          </li>
          <li>
            {" "}
            Jalen Crutcher G, JR: 14.7 PPG, 5.1 AST, 3.3 REB, 46.5 FG%, 41.8
            3PT%, 86.8 FT%
          </li>
          <li>
            {" "}
            Ibi Watson G, JR: 11.1 PPG, 1.3 AST, 2.6 REB, 50.0 FG%, 41.4 3PT%,
            84.3 FT%
          </li>
          <li>
            {" "}
            Trey Landers G, SR: 11.0 PPG, 2.6 AST, 6.2 REB, 58.8 FG%, 38.5 3PT%,
            66.7 FT%
          </li>
        </ul>
        <p>
          Dayton was unranked coming into the season and now sit at #6 in the AP
          Poll. Obi Toppin has to, at the very least, be a finalist for the
          Naismith Player of the Year, averaging almost 20 points a game on an
          extremely efficient 63% from the field. Dayton would be an incredible
          story if they could cap off this historic season with a National
          Championship. They have one of the most explosive offenses in the
          league, I just worry about their inconsistent defense at times. Still,
          with their only losses being at home vs Kansas and on the road against
          Colorado, Dayton definitely has a good enough roster to go far in the
          tournament.
        </p>
        {/* Duke*/}
        <h5>7. Duke</h5>
        <p>Record: 20-3 </p>
        <p>Vegas Odds: +1000 </p>
        <p>Top Players:</p>
        <ul>
          <li>
            Vernon Carey Jr. C, FR: 17.5 PPG, 1.1 AST, 8.9 REB, 58.3 FG%, 38.5
            3PT%, 63.8 FT%
          </li>
          <li>
            Tre Jones G, SO: 15.6 PPG, 6.6 AST, 4.7 REB, 43.4 FG%, 32.1 3PT%,
            73.5 FT%
          </li>
          <li>
            Cassius Stanley G, FR: 12.3 PPG, 1.1 AST, 6.2 REB, 48.5 FG%, 33.3
            3PT%, 74.1 FT%
          </li>
          <li>
            Matthew Hurt F, FR: 10.5 PPG, 0.9 AST, 3.6 REB, 49.2 FG%, 40.4 3PT%,
            78.9 FT%
          </li>
        </ul>
        <p>
          Another year, another talented, but inexperienced Duke basketball
          team. Out of all the teams on the top 10, Duke's top players are by
          far the youngest. The good news, like always, is that all four of the
          ones listed above are good enough to get drafted in the NBA. In my
          latest version of the{" "}
          <a href="blogsketball.com/nba-mock-draft">2020 NBA Mock Draft</a>, I
          have Veron Carey Jr going at #14, Tre Jones #31, Cassius Stanley #37,
          and Matthew Hurt #26. More good news for Duke - Coach K is still their
          coach. One thing about them that somewhat worries me is their guards'
          ability shoot. Tre Jones and Cassius Stanley are both very average
          shooters, and I just hope they have enough to make teams pay for
          helping out on Carey Jr. down low. Still, there's a reason Duke is
          tied for 2nd in Vegas odds to win it all. It's typically a "safe" bet
          to roll with coach K, a should-be Naismith finalist, and 3 or 4
          potential first round picks on the same team.
        </p>
        {/* Florida State */}
        <h5>8. Florida State</h5>
        <p>Record: 20-3 </p>
        <p>Vegas Odds: +3300 </p>
        <p>Top Players:</p>
        <ul>
          <li>
            {" "}
            Devin Vassell G, SO: 13.4PPG, 1.7 AST, 5.3 REB, 49.6 FG%, 42.0 3PT%,
            73.8 FT%
          </li>
          <li>
            {" "}
            Trent Forrest G, SR: 11.6 PPG, 4.3 AST, 4.5 REB, 44.5 FG%, 26.2
            3PT%, 84.5 FT%
          </li>
          <li>
            {" "}
            M.J. Walker G, JR: 10.4 PPG, 1.3 AST, 1.7 REB, 35.8 FG%, 34.8 3PT%,
            82.4 FT%
          </li>
          <li>
            {" "}
            Patrick Williams F, FR: 8.5 PPG, 1.1 AST, 3.5 REB, 45.6 FG%, 32.5
            3PT%, 86.7 FT%
          </li>
        </ul>
        <p>
          Florida State is probably the team I like the least out of the current
          top 10 in terms of their National Championship odds. Vegas seems to
          agree, with them and Maryland tied for last amongst the top 10 in odds
          to win it all at +3300. They're still a great team, but FSU's
          inconsistency on offense worries me. Too many times I've seen a
          sleeper team win over a lower seed because the lower seed got into
          offensive droughts where it was hard for them to find a bucket. While
          guards Vassell, Forrest, and Walker are all obviously extremely
          talented, their lack of offensive firepower worries me too much to
          confidently pick them to win it all this year. Florida State fans, if
          you're reading this, I've been wrong before.
        </p>
        {/* Maryland */}
        <h5>9. Maryland</h5>
        <p>Record: 19-4 </p>
        <p>Vegas Odds: +3300 </p>
        <p>Top Players:</p>
        <ul>
          <li>
            {" "}
            Anthony Cowan Jr. G, SR: 16.3 PPG, 4.6 AST, 3.6 REB, 39.0 FG%, 33.6
            3PT%, 78.2 FT%
          </li>
          <li>
            {" "}
            Jalen Smith F, SO: 15.1 PPG, 0.8 AST, 10.2 REB, 53.6 FG%, 39.1 3PT%,
            75.7 FT%
          </li>
          <li>
            {" "}
            Aaron Wiggins G, SO: 10.4 PPG, 1.5 AST, 5.3 REB, 35.7 FG%, 31.0
            3PT%, 75.0 FT%
          </li>
          <li>
            {" "}
            Darryl Morsell G, JR: 8.6 PPG, 1.9 AST, 4.8 REB, 44.3 FG%, 37.5
            3PT%, 78.0 FT%
          </li>
        </ul>
        <p>
          Maryland is 1st in the Big Ten at 19-4. I'm slightly concerned that
          they haven't been tested that much yet, with the highest ranked team
          they played at the time being #11 Ohio State at home, but they'll get
          a chance to add a big win to their resume this Saturday when they go
          on the road to play Michigan State. Maryland is another team that sets
          the tone on the defensive side of the ball, ranking #5 in adjD on
          KenPom (I'll analyze everyone's KenPom ratings in a later article).
          The question is, will the duo of Anthony Cowan Jr. and Jalen Smith be
          enough offense come tournament time? Maryland will go as far as those
          two can take them.
        </p>
        {/* Seton Hall */}
        <h5>10. Seton Hall</h5>
        <p>Record: 18-5 </p>
        <p>Vegas Odds: +2200 </p>
        <p>Top Players:</p>
        <ul>
          <li>
            {" "}
            Myles Powell G, SR: 21.4 PPG, 2.3 AST, 4.4 REB, 40.4 FG%, 31.0 3PT%,
            79.8 FT%
          </li>
          <li>
            {" "}
            Quincy McKnight G, SR: 11.8 PPG, 5.5 AST, 3.3 REB, 43.6 FG%, 35.0
            3PT%, 84.6 FT%
          </li>
          <li>
            {" "}
            Sandro Mamukelashvili F, JR: 10.5 PPG, 1.3 AST, 5.1 REB, 51.8 FG%,
            39.4 3PT%, 57.1 FT%
          </li>
          <li>
            {" "}
            Jared Rhoden G, SO: 9.2 PPG, 1.1 AST, 6.9 REB, 42.7 FG%, 29.9 3PT%,
            62.9 FT%
          </li>
        </ul>
        <p>
          Seton Hall sits atop the Big East with a 18-5 record. Myles Powell has
          a lot to do with them being first in the Big East, averaging an
          impressive 21.4 points per game. Like Florida State and Maryland,
          Seton Hall is a great defensive team (#8 in KenPom adjD). Powell,
          McKnight, and Rhoden all average over a steal per game. I just get
          worried looking at those field goal and three point percentages from
          their guards - Powell (40.4 FG%, 31.0 3PT%), McKnight (43.6%, 35.0%),
          and Rhoden (42.7%, 29.9%) need to be more efficient shooting the ball
          if they want to have a legitimate chance of winning it all.
        </p>

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
        experience. This year seems unique compared to past seasons because the
        majority of the collegiate star players aren't Freshman. With top
        potential NBA draft picks like James Wiseman, LaMelo Ball, and RJ
        Hampton, among others, deciding to forgo their NCAA experience and
        prepare for the NBA, veteran college teams seem to be dominating even
        more so than usual. Out of all the top players on each
        respective top ten team, the only Freshman is Vernon Carey Jr. What also
        makes this a crazy year is the fact that multiple teams in the top 10
        weren't even ranked in the preseason polls. San Diego State, Dayton, and
        Florida State were all unranked going into this season, and now are at
        least in the conversation as a team that could potentially win it all.
      </p>
      <p>March is coming.</p>
    </div>
  );
}

export default Top10NCAA;
