import React from "react";
import "./articles.scss";
import Projections from "../images/538Projections.png";

function LegitContenders() {
  return (
    <div className="article-container">
      <h3 className="article-header">Legitimate Champsionship Contenders</h3>
      <div className="article-header-img-container">
        <img
          className="article-header-img"
          src={Projections}
          alt="article image"
        />
        <div className="article-caption">
          FiveThirtyEights projections based off their RAPTOR model
        </div>
      </div>
      <div className="article-content">
        <p>
          With the trade deadline finally behind us, we can finally stop playing
          out hypothetical scenarios and matching up potential teams with one
          another. I, for one, was sick of the "x team offered garbage package
          for an all-star caliber player" type conversations I was getting into
          with most likely 16-year olds on Instagram. The Knicks offer of Bobby
          Portis, Kevin Knox, Frank Ntilikina, Allonzo Trier and a 2nd round
          pick for D'Angelo Russell comes to mind.
        </p>
        <p>
          Enough about the Knicks, were strictly talking about 2020
          Champsionship contenders from here on out.
        </p>
        <p>
          According to{" "}
          <a href="https://projects.fivethirtyeight.com/2020-nba-predictions/?ex_cid=endlink">
            FiveThirtyEight's projections
          </a>
          , the top teams and their projected odds of winning the Finals are:
        </p>
        <ul>
          <li>LA Clippers: 21%</li>
          <li>LA Lakers: 21% </li>
          <li>Milwaukee Bucks: 19% </li>
          <li>Philadelphia 76ers: 15% </li>
          <li>Houston Rockets: 13% </li>
        </ul>

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
        <p>
          This is pretty similar to the Championship odds currently on{" "}
          <a href="https://www.bovada.lv/sports/basketball">Bovada</a> as of
          February 8th:
        </p>
        <ul>
          <li>LA Lakers: +225</li>
          <li>Milwaukee Bucks: +275</li>
          <li>LA Clippers: +325</li>
          <li>Houston Rockets: +1400</li>
          <li>Philadelphia 76ers: +1600</li>
        </ul>
        <p>
          The biggest differences being the Lakers are noticeably above the
          Bucks and Clippers, and the discrepancy between the
          Lakers/Bucks/Clippers tier and the Rockets/76ers/Nuggets,etc. tier is
          a lot larger
        </p>
        <p>
          Both seem pretty accurate, but I'm siding with Bovada's odds on the
          ones that I agree more with. While the NBA seems more exciting this
          year for a casual fan because it isn't as top-heavy as year's past, I
          still think that, generally speaking, there are only two or maybe
          three teams that have a legitimate shot to win the NBA Champsionship
          on a yearly basis (I will also be the first to admit that I did not
          include the Raptors in that tier last year.)
        </p>
        <p>
          I categorized the projected playoff teams into different tiers: "No
          Shot", "You're Saying There's a Chance", "Decent Shot", "Great Shot"
        </p>
        <h4>No Shot</h4>
        <h5>- Toronto Raptors</h5>
        <h5>- Indiana Pacers</h5>
        <h5>- Brooklyn Nets</h5>
        <h5>- Orlando Magic</h5>
        <h5>- Oklahoma City Thunder</h5>
        <h5>- Dallas Mavericks</h5>
        <h5>- Memphis Grizzlies</h5>
        <h4>You're Saying There's a Chance</h4>
        <h5>Boston Celtics</h5>
        <p>
          Boston is currently 3rd in the East and on paper has arguably a top 5
          starting lineup in the league. Combine that with one of the best
          coaches in the league in Brad Stevens and the fact that they're in the
          East, and you have to give them at least somewhat of a chance.
        </p>
        <h5>Miami Heat</h5>
        <p>
          Miami's addition of Andre Iguodala should help an already loaded
          roster in terms of depth. My only concern with them is that they are
          too young and not top-heavy enough to take down some of the stronger
          teams in the playoffs.
        </p>
        <h5>Denver Nuggets</h5>
        <p>
          Denver is 3rd in the West at 36-16. But, until they prove it in the
          playoffs, I will always consider them a team that is better suited for
          the regular season. I genuinely hope this is the year that they prove
          me wrong.
        </p>
        <h5>Utah Jazz</h5>
        <p>
          This team had such high offseason expectations with the additions of
          Mike Conley and Bojan Bogdanovic, but Conley hasn't looked like
          himself and the Jazz yet again appear to be a well-respected team that
          can't get over that playoff hump.
        </p>
        <h4>Decent Shot</h4>
        <h5>Houston Rockets</h5>
        <p>
          With the Rockets making a trade that was essentially Clint Capela for
          Robert Covington, they now have no player on their roster over 6-6.
          That was not a typo. They're extremely captivating to watch in an
          interesting way and I don't absolutely hate the move - the lack of
          height can clear a lot of space for Harden and Westbrook to make more
          plays. I'm just worried about the whole defense thing. Especially when
          they have to come out of the West in the playoffs... going up against
          guys like Jokic and Davis isn't exactly ideal. I think how far they go
          really depends on how well Westbrook plays - if he plays like he's an
          MVP in the league, the Rockets have a shot.{" "}
        </p>
        <h5>Philadelphia 76ers</h5>
        <p>
          The 76ers have been a disappointment so for this season. I really
          thought the East would be 1a 1b with them and the Bucks, but that
          definitely hasn't been the case this season. Their floor spacing seems
          all out of whack with Simmons, Horford, and Embiid all on the floor at
          the same time. But, still, I can't deny the talent in the starting
          roster. The Sixers might just be one Bucks injury away from making the
          NBA Finals.
        </p>
        <h4>Great Shot</h4>
        <h5>Los Angeles Lakers</h5>
        <p>
          This is coming from a Phoenix Suns fan - I really, really, hope the
          Lakers win the Finals this year for Kobe Bryant. I genuinely believe
          they have the best shot to do so, too. Darren Collison is reportedly
          meeting with the Lakers and Clippers later this week and if he takes
          up the minutes Rondo is playing, I don't see any weak points with this
          team. LeBron has done a lot more with much less.{" "}
        </p>
        <h5>Los Angeles Clippers</h5>
        <p>
          While I think the Lakers have the best chance to win, I still think
          that the Clippers overall rosteris better than the Lakers. Marcus
          Morris was a huge get for them, especially since they got better while
          the Lakers and Bucks stayed the same. The only thing I'm worried about
          with the Clippers is their size. Montrezl Harrell is 6-8, and I really
          don't see Zubac effectively guarding bigger teams like the Lakers and
          Bucks in the playoffs.
        </p>
        <h5>Milwaukee Bucks</h5>
        <p>
          The Bucks might just be the historically best team that we have talked
          about the least for as long as I can remember. At 44-7, they are on
          pace to win 71 games and have a point-differential of +12.4 points per
          game. If they finished with that rate it would be the highest in NBA
          history... The Bucks are great, they're just young and unproven from a
          playoff perspective. Giannis is only 25 years old and has never been
          to a NBA Finals. Until I see the Bucks perform in the playoffs as well
          as they do in the regular season, I don't know if I can confidently
          pick them to win the NBA Finals.
        </p>
      </div>
    </div>
  );
}

export default LegitContenders;
