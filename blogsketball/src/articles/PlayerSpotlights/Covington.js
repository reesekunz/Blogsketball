import React from "react";
import "../articles.scss";
import RoCoIMG from "../../images/RoCo.jpeg";
function Covington() {
  return (
    <div className="article-container">
      <h3 className="article-header">Robert Covington</h3>
      <h3 className="player-team">Forward, Houston Rockets</h3>
      <div className="article-header-img-container">
        <img
          className="article-header-img"
          src={RoCoIMG}
          alt="Robert Covington"
        />
      </div>
      <div className="date-written">March 18th, 2020</div>
      <div className="article-content">
        <p>
          2019-20: 12.8 PPG, 6.0 REB, 1.2 AST, 43.5 FG%, 34.6 3PT%, 79.8 FT%
        </p>
        <p>Career: 12.8 PPG, 5.6 REB, 1.5 AST, 40.7 FG%, 35.9 3PT%, 81.2 FT%</p>
        <p>College: Tennessee State</p>
        <p>Player Comparison: Trevor Ariza</p>
        <p>
          At 6’7, Covington is one of the tallest players on the Houston
          Rockets. Like Ariza, who was also previously on the Rockets, Covington
          is known for his 3-and-D skill set. Covington was awarded NBA
          All-Defensive First Team in 2018. He’s a perfect complement to
          Westbrook and Harden with his ability to defend and space the floor.
        </p>
        <p>
          RCo was traded away by the Minnesota Timberwolves in a 4-team deal.
          Here’s the rundown of that deal:
        </p>

        <p>
          Minnesota received: Malik Beasley, Juancho Hernangomez, Evan Turner,
          Atlanta FRP via Nets
        </p>

        <p>Atlanta: Clint Capela and Nene</p>

        <p>Denver: Gerald Green, Houston FRP</p>
        <p>Houston: Robert Covington</p>
        <p>
          I liked the Rockets’ trade for Covington. Overall, Clint Capela may be
          a better player. But Covington is a much better fit for the Rockets
          style of play. He can defend the opposing team’s best wing player to
          take the defensive burden off of their stars in Harden and Westbrook.
          He also spaces the floor much better for other players to drive and
          really puts the opposing team in a difficult situation because they
          either a. Keep a big man out on the floor that will constantly be
          forced to guard out on the perimeter or b. Match up with the Rockets
          small ball and have no one to protect the rim on drives.{" "}
        </p>
        <p>
          Ironically, after essentially being traded for Clint Capela, Covington
          has averaged more blocks than Capela since joining the Rockets at 2.5
          blocks per game.{" "}
        </p>
        <p>
          RoCo was a four year collegiate athlete at Tennessee State, went
          undrafted in 2013, and had to work his way up from the D-League. It’s
          safe to say he’s come a long way to get to his current four year,
          $46.88 million contract.
        </p>
      </div>
    </div>
  );
}

export default Covington;
