import React from "react";
import "./articles.scss";
import Lou from "../images/Lou.jpeg";

function ClippersBench() {
  return (
    <div className="article-container">
      <h3 className="article-header">
        Clippers Now Officially Have Deepest Team in the League
      </h3>
      <div className="article-header-img-container">
        <img className="article-header-img" src={Lou} alt="Lou Will" />
        <div className="article-caption">6th man like I'm Lou Will.</div>
      </div>
      <div className="date-written">February 19th, 2020</div>
      <div className="article-content">
        <p>
          If they didn’t already before the All-Star break, the Clippers now
          officially have the deepest bench in the league. First the Clippers
          traded for Marcus Morris Sr. for a first-round pick, rights to swap
          their 2021 first-round pick, 2021 second-round pick, Issuf Sanon, and
          Moe Harkless. This was just the kind of haul the Clippers needed in an
          attempt to separate themselves from teams like the Lakers and Bucks in
          the playoffs.
        </p>
        <p>
          Not only did they get Morris, but they also prevented the Lakers from
          acquiring him. As Michael Scott likes to say, that’s a win-win-win.
          Lakers were reportedly willing to part with Kyle Kuzma and Danny
          Green, but the Knicks countered with Kuzma, Avery Bradley, DeMarcus
          Cousins, and at least one of their second-round picks. Obviously the
          two sides weren’t able to come to an agreement.
        </p>

        <p>
          Personally, I would have rather had Kuzma and Green if I were the
          Knicks, but it’s also the Knicks and nothing they do makes a whole lot
          of sense. Yes, Kuzma has certainly been struggling this season. But he
          has shown flashes of his potential in past seasons and is worth at
          least taking a flyer on. The Clippers first-round pick should be in
          the 25-28 range and I don’t think Moe Harkless is going to do anything
          significant for them.
        </p>
        <p>
          In addition to trading for Morris, the Clippers just recently added
          Reggie Jackson to an already loaded bench. Jackson was bought-out by
          the Detroit Pistons and decided to sign with the Clippers in hopes of
          winning a championship.
        </p>
        <p>
          With a bench like that, they’re more than capable of doing just that.
          Here’s the Clippers current positional depth when everyone is healthy:
        </p>
        <ul>
          <li>PG: Patrick Beverley, Reggie Jackson</li>
          <li>SG: Paul George, Lou Williams, Landry Shamet</li>
          <li>SF: Kawhi Leonard, Rodney McGruder</li>
          <li>PF: Marcus Morris Sr., JaMychal Green, Patrick Patterson</li>
          <li>C: Ivica Zubac, Montrezl Harrell</li>
        </ul>
        <p>
          Honestly, a starting lineup of just their bench players - Reggie
          Jackson, Lou Williams, Landry Shamet, JaMychal Green, and Montrezl
          Harrell - could win some games on their own. Everyone needs to get
          healthy, but the Clippers are loaded just in time for the playoffs.
        </p>
      </div>
    </div>
  );
}

export default ClippersBench;
