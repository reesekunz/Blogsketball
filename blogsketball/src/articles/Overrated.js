import React from "react";
import "./articles.scss";
import Kyle from "../images/Kyle.jpeg";

function Overrated() {
  return (
    <div className="article-container">
      <h3 className="article-header">
        Ranking the Top 10 Most Overrated Players
      </h3>
      <div className="article-header-img-container">
        <img className="article-header-img" src={Kyle} alt="kyle lowry" />
        <div className="article-caption">Kyle Lowry</div>
      </div>
      <div className="date-written">February 19th, 2020</div>
      <div className="article-content">
        {/* Gary Harris, Denver*/}
        <h5>10. Gary Harris, Denver</h5>
        <p>Stats: 10.2 PPG, 2.2 AST, 2.9 REB, 40.0 FG%, 29.9 3PT%, 82.9 FT%</p>
        <p>
          Garry Harris’ production has dipped the past two seasons to the point
          where one could debate if he should even be starting for the Nuggets.
          I personally used to view Denver as having a potential big 3 in Jokic,
          Murray, and Harris because of how young and talented they were, but it
          seems like Jokic and Murray continue to get better while Harris is
          sadly regressing a bit. I just simply can’t trust someone out on the
          wing who is shooting 40% from the field and 30% from three. He isn’t a
          good enough playmaker to have such mediocre shooting splits and still
          justify being out there in the starting lineup as a net positive.
          Here’s hoping he gets back to his 2017-18 season where he averaged
          17.5 points and shot almost 40% from three, but right now he simply
          isn’t making a big enough impact.
        </p>
        {/* Montrezl Harrell, Los Angeles Clippers */}
        <h5>9. Montrezl Harrell, Los Angeles Clippers </h5>
        <p>Stats: 18.8 PPG, 1.8 AST, 7.1 REB, 57.6 FG%, 0.0 3PT%, 63.4 FT%</p>
        <p>
          Montrezl Harrell is a force down low and provides great energy off the
          bench for the Clippers. But, two things worry me about him. 1. His
          size. He’s 6’8. 2. His lack of a three point shot. I simply worry
          about undersized big men that can’t shoot in today’s NBA. One of the
          weak points for the Clippers is their lack of size - I’m iffy at best
          about Harrell holding his own against some of the bigs in the Western
          Conference like Jokic or Anthony Davis. He’s a solid player, I just
          don’t think he brings as much value as some people do.
        </p>
        {/* Julius Randle, New York */}
        <h5>8. Julius Randle, New York</h5>
        <p>Stats: 19.3 PPG, 3.2 AST, 9.6 REB, 45.5 FG%, 26.4 3PT%, 71.2 FT%</p>
        <p>
          Like Harrell, Randle is another undersized big man (6’9) that can’t
          shoot or stretch the floor particularly well. Randle is an old school
          big that plays with more of a “bully ball” mentality. He’s one of the
          best in the league at it, but as I mentioned earlier with Harrell, I
          don’t think that style of big man contributes to the overall success
          of the team as much as others perceive it to. I personally would
          rather have someone like Brook Lopez who can draw out opposing team’s
          big men and open up more of the lane on offense for my guards. Randle
          is a great player, I just think there’s a difference between being a
          great player and a player that contributes greatly to the team.
        </p>
        {/* Rajon Rondo, Los Angeles Lakers*/}
        <h5>7. Rajon Rondo, Los Angeles Lakers</h5>
        <p>Stats: 7.8 PPG, 5.3 AST, 3.3 REB, 42.9 FG%, 35.2 3PT%, 72.7 FT%</p>
        <p>
          NBA Twitter and a lot of the more die-hard NBA fans will argue that
          Rondo isn’t overrated at all because no one even rates highly enough
          to be considered overrated anymore. But, more casual fans, and
          apparently Frank Vogel, seem to be a little sentimental when gauging
          Rondo’s current talent. I will admit that part of it is the terrible
          fit of having someone who is a playmaker that isn’t a great shooter
          next to LeBron. Rondo’s unique skill-set would definitely be better
          served elsewhere. But, with the Lakers, Rondo is one of the glaring
          weak points on the team. He ranks 71st amongst point guards with a
          Real Plus-Minus (RPM) of -1.00.
        </p>

        {/* Collin Sexton, Cleveland Cavaliers*/}
        <h5>6. Collin Sexton, Cleveland</h5>
        <p>Stats: 17.9 PPG, 2.7 AST, 3.2 REB, 46.0 FG%, 36.5 3PT%, 85.9 FT%</p>
        <p>
          On paper, Sexton’s stats are very solid for someone that is only 21
          years old. But these rankings aren’t judging someone based on
          potential, it’s simply rating them on how they currently are and how
          people perceive their value. Sexton’s style of play is frustrating to
          watch at times. He dribbles way too much and passes way too little -
          not what I want for my point guard. Sexton is slightly above Rondo in
          RPM, coming in at 67th amongst point guards with a -0.90 RPM. Other
          names around that ranking include: Jeremy Pargo, Jalen Lecque,
          Jeremiah Martin, Josh Gray, Terry Rozier (who also happens to be on
          this list). Case closed.
        </p>
        {/* Harrison Barnes*/}
        <h5>5. Harrison Barnes, Sacramento</h5>
        <p>Stats: 14.5 PPG, 2.2 AST, 4.9 REB, 45.2 FG%, 36.2 3PT%, 80.2 FT%</p>
        <p>
          People forget that Harrison Barnes was a member of Team USA and has a
          salary of $24.15 million this season. His numbers are respectable, but
          Barnes is another guy that frustrates me when I watch play in terms of
          his style. I really just don’t like wing players that aren’t that
          great of shooters, but also aren’t great playmakers. I think you have
          to be either one or the other, if not both, to justify your worth as a
          solid NBA starter in today’s game. Barnes is 42nd amongst small
          forwards in RPM, with a rating of -0.48.
        </p>
        {/* Jae Crowder */}
        <h5>4. Jae Crowder, Miami</h5>
        <p>Stats: 10.4 PPG, 2.7 AST, 6.2 REB, 38.3 FG%, 31.5 3PT%, 79.8 FT%</p>
        <p>
          Jae Crowder has been playing very well for the Heat since they
          recently traded for him, averaging 18.0 points on 58.6% from the
          field. But history shows that he won’t sustain those numbers. A huge
          reason why I have Crowder on this list is the fact that many view him
          as another tough “3 and D” type player, but Crowder is a career 33%
          three point shooter. His 3PT% averages the past 4 seasons? 31.5, 33.1,
          31.6, 32.8. Crowder simply isn’t a good enough shooter to be regarded
          as highly as he is. Yes, he’s a solid defender. No, he’s not a 3 and D
          player.
        </p>
        {/* Jordan Clarkson */}
        <h5>3. Jordan Clarkson, Utah</h5>
        <p>Stats: 16.2 PPG, 1.7 AST, 2.8 REB, 48.7 FG%, 38.6 3PT%, 75.0 FT%</p>
        <p>
          Clarkson has actually been playing very well this season and has been
          a great addition for the Utah Jazz. He’s the one guy on his list that,
          when I was writing his stats down, was thinking “man, do I really want
          to include him on here?” But the short answer is yes, yes I do. For
          one, I trust what I saw from Clarkson the past 6 seasons before this
          more than this one season that is 53 games in. I think this is more of
          an anomaly - Clarkson the past two seasons before this shot 32.4% from
          three. I view him as more of a volume scorer that has a frustratingly
          low basketball IQ when I watch play. I hope he proves me wrong, but I
          don’t see him sustaining this level of play beyond this season.
        </p>
        {/*  Terry Rozier */}
        <h5>2. Terry Rozier, Charlotte</h5>
        <p>Stats: 17.8 PPG, 4.1 AST, 4.5 REB, 41.8 FG%, 38.5 3PT%, 86.8 FT%</p>
        <p>
          Happy for Terry Rozier that he got paid this past off-season, signing
          a three-year $58M contract with the Hornets. Sad for the Hornets that
          they paid Terry Rozier that much money this past off-season. Charlotte
          signed Rozier hoping that he would play better with an increased role
          compared to when he was in Boston, but all they got is someone that
          inefficiently scores 18 points a game. He has a RPM of -1.85, which is
          good for 78th amongst point guards.
        </p>
        {/* Kyle Lowry */}
        <h5>1. Kyle Lowry, Toronto</h5>
        <p>Stats: 19.6 PPG, 7.6 AST, 4.7 REB, 42.0 FG%, 35.7 3PT%, 85.5 FT%</p>
        <p>
          According to{" "}
          <a href="https://www.basketball-reference.com/players/l/lowryky01.html">
            Basketball Reference
          </a>{" "}
          Kyle Lowry has a 85.7% chance of making the Hall of Fame. He’s a great
          player, don’t get me wrong. I just think Lowry is overrated given how
          highly people value him. He’s a 6x All-Star and an NBA Champion, but
          Lowry has only been named to an All-NBA team once in his career (third
          team in 2016). Recency bias plays a role here when gauging Lowry’s
          value, and I simply think people are overvaluing his ability. I would
          take guys like Bradley Beal and Jrue Holiday over Kyle Lowry.
        </p>
        <h5>
          Honorable mentions: Andre Drummond, Gordon Hayward, Kristaps Porzingis
        </h5>

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
    </div>
  );
}

export default Overrated;
