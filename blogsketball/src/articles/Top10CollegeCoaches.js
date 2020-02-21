import React from "react";
import "./articles.scss";
import Jay from "../images/Jay.jpeg";

function Top10CollegeCoaches() {
  return (
    <div className="article-container">
      <h3 className="article-header">
        Ranking the Top-10 Coaches in Men's College Basketball
      </h3>
      <div className="article-header-img-container">
        <img className="article-header-img" src={Jay} alt="Jay Wright" />
        <div className="article-caption">
          Jay Wright's stock has soared the past couple of seasons.
        </div>
      </div>
      <div className="date-written">February 20th, 2020</div>
      <div className="article-content">
        <h5>10. Gregg Marshall, Wichita State</h5>
        <p>
          Marshall may be the most surprising coach to make this list for some,
          but I really admire his coaching style and the discipline his teams
          traditionally play with. Marshall famously led the Shockers to the
          Final Four in 2013 when Wichita State was a 9 seed and has been
          receiving a lot of offers to play at bigger programs that he
          reportedly keeps denying. I don’t blame him. Wichita State joined the
          American Athletic Conference (AAC) in the 2017-18 season, which should
          be a better test for Marshall going up against a bigger conference.
          Marshall has done as good as job as only with this program, and I
          fully expect the Shockers to continue to get better each year because
          of him.{" "}
        </p>
        <h5>9. Tony Bennett, Virginia</h5>
        <p>
          Tony Bennett and Virginia really bounced back in the best way possible
          after being the first team to lose to a #16 seed in the 2018 March
          Madness tournament. Virginia went on to win it all in 2019, with a lot
          of the same core players on the team that notoriously lost the year
          before. Bennett constantly has his team ranking atop the nation in
          defensive categories and seems to almost always have Virginia ranked
          as a one or two seed come March.{" "}
        </p>
        <h5>8. Mark Few, Gonzaga</h5>
        <p>
          While Few and Marshall are the only coaches to not have won a National
          Championship on this list, Few has done an exceptional job
          transforming Gonzaga into the powerhouse it currently is. The Zags
          were close to winning the championship in 2017 when they lost to North
          Carolina, but Few will have plenty more chances to finally get that
          coveted championship with the way his program brings in and develops
          players
        </p>
        <h5>7. Jim Boeheim, Syracuse</h5>
        <p>
          Boeheim is known for two things - playing a zone defense and winning
          basketball games. While Syracuse isn’t really known to be a powerhouse
          like the rest of the teams (besides Wichita State) on this list,
          Boeheim is the second-winningest coach in college basketball with a
          959-394 record. He did get in some trouble with the NCAA and have to
          vacate a total of 101 wins with Syracuse, but Boeheim is still a
          living legend in the college basketball world. We will miss him when
          he decides to retire.{" "}
        </p>
        <h5>6. Bill Self, Kansas</h5>
        <p>
          Kansas literally won every Big 12 Regular Season Championships from
          2005-2018 until they got their streak snapped with Texas Tech and
          Kansas State tying for first. One knock on Self is his lack of
          tournament success - it seems like Kansas is annually a one or two
          seed, yet Self only has three Final Four appearances and one National
          Championship to show for it. Still, you can’t deny the success Self
          has had and the powerhouse Kansas is because of him.
        </p>
        <h5>5. Roy Williams, North Carolina</h5>
        <p>
          If you combine his coaching record at Kansas and now North Carolina,
          Roy Williams is at an impressive 881-246. He boasts one of the best
          resumes out of all the coaches on this list - 3 National Championships
          (2005, 2009, 2017 - all with North Carolina), 9 Final Fours, 9 ACC
          Regular Season Championships, and 2x AP Coach of the Year.
        </p>
        <h5>4. John Calipari, Kentucky</h5>
        <p>
          John Calipari may be the best recruiter out of everyone on this list,
          but he isn’t the best coach. 3 of the past 10 number one overall picks
          in the NBA - John Wall, Anthony Davis, Karl-Anthony Towns - have come
          from Kentucky. With all that talent, he only has one National
          Championship (2012) to show for it. Nonetheless, what Calipari has
          done at Kentucky is extremely impressive.
        </p>
        <h5>3. Jay Wright, Villanova</h5>
        <p>
          Jay Wright’s stock has shot up the highest on this list the past five
          years or so. NBA teams like the Knicks are desperate to have him
          interview for a head-coaching position with them, but it’s safe to say
          he has found a home at Villanova. Jay Wright has recently lead
          Villanova to two National Championships (2016 and 2018) and is really
          starting to build quite the resume for himself.
        </p>
        <h5>2. Tom Izzo, Michigan State</h5>
        <p>
          For as good of coach Izzo is, the only knock on him is that he only
          has 1 National Championship. Although one could argue that he doesn’t
          typically get as good of recruiting classes as some of the other names
          around here (Calipari, Coach K, Roy Williams, Bill Self, etc.). When
          you think of a Michigan St. team, you think of a defensive-minded,
          disciplined team. Izzo is one of the best coaches of all-time and the
          way he optimizes his players’ talent really reflects that.
        </p>
        <h5>1. Mike Krzyzewski, Duke</h5>
        <p>
          Yes, I did have to Google how to spell that. Coach K has to be on the
          Mount Rushmore for greatest coaches of all-time. His resume speaks for
          itself - 5 National Championships, 12 Final Fours, 3 Olympic Golds as
          the head coach of Team USA. Oh, and his cumulative college coaching
          record, you ask? 1,153-347. The most wins in history. The man was
          already inducted into both the Basketball Hall of Fame and College
          Basketball Hall of Fame. There’s a reason he annually gets some of the
          best recruiting classes in the nation - everyone wants to play for the
          legend himself.
        </p>
        <h5>
          Honorable mentions: Bob Huggins - West Virginia, Sean Miller -
          Arizona, Dana Altman, Oregon, Chris Mack - Louisville, Chris Beard -
          Texas Tech, Chris Holtmann, Ohio State{" "}
        </h5>
      </div>
    </div>
  );
}

export default Top10CollegeCoaches;
