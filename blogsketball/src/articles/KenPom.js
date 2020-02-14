import React from "react";
import "./articles.scss";
import KenPom2 from "../images/KenPom2.png";

function KenPom() {
  return (
    <div className="article-container">
      <h3 className="article-header">
        Using KenPom Ratings to Evaluate Potential National Champions
      </h3>
      <div className="article-header-img-container">
        <img
          className="article-header-img"
          src={KenPom2}
          alt="Ken pom ratings"
        />
        <div className="article-caption">
          KenPom ratings = the magic conch shell of college basketball
        </div>
      </div>
      <div className="date-written">February 14th, 2020</div>
      <div className="article-content">
        {/* Celtics */}
        <p>Notes:</p>
        <li>
          KenPom ratings are from the Pomeroy College Basketball Ratings at:
          https://kenpom.com/
        </li>
        <li>
          KenPom’s ratings explained in more detail at:
          https://kenpom.com/blog/ratings-methodology-update/
        </li>
        <p>
          KenPom ratings are the most accurate college basketball rating system
          I have yet to come across. When analyzing these top 10 teams, it is
          important to look at where they rank offensively and defensively in
          the KenPom ratings. With the lone exception of Connecticut in 2014, 16
          of the past 17 teams to win the National Championship have ranked in
          the top 20 in both adjO and adjD.{" "}
        </p>
        <p>
          While these KenPom ratings could definitely change before March
          Madness tips off in about a month, analyzing them now will still give
          us a very good idea of which teams we need to take seriously to cut
          down the nets (and will hopefully help us decide which teams we want
          to scout before filling out our bracket ;). 17 seasons isn’t the most
          ideal number for a sample size, but you can’t ignore an accuracy rate
          of 94%.
        </p>
        {/* Baylor  */}
        <h5>1. Baylor</h5>
        <p>Record: 21-1 </p>
        <p>KenPom Ratings: AdjEm: +26.35 AdjO: 21 AdjD: 4</p>
        {/* Gonzaga */}
        <h5>2. Gonzaga</h5>
        <p>Record: 25-1</p>
        <p>KenPom Ratings: AdjEm: +27.61 AdjO: 1 AdjD: 35</p>={/* Kansas */}
        <h5>3. Kansas</h5>
        <p>Record: 20-3 </p>
        <p>***KenPom Ratings: AdjEm: +30.12 AdjO: 12 AdjD: 1</p>
        {/* San Diego State */}
        <h5>4. San Diego State</h5>
        <p>Record: 24-0 </p>
        <p>***KenPom Ratings: AdjEm: +26.46 AdjO: 9 AdjD: 9</p>
        {/* Louisville */}
        <h5>5. Lousiville</h5>
        <p>Record: 21-3 </p>
        <p>KenPom Ratings: AdjEm: +23.51 AdjO: 7 AdjD: 33</p>
        {/* Dayton */}
        <h5>6. Dayton</h5>
        <p>Record: 21-1 </p>
        <p>KenPom Ratings: AdjEm: +24.73 AdjO: 2 AdjD: 55</p>
        {/* Duke*/}
        <h5>7. Duke</h5>
        <p>Record: 20-3 </p>
        <p>***KenPom Ratings: AdjEm: +26.76 AdjO: 8 AdjD: 11</p>
        {/* Florida State */}
        <h5>8. Florida State</h5>
        <p>Record: 20-3 </p>
        <p>KenPom Ratings: AdjEm: +19.37 AdjO: 43 AdjD: 14</p>
        {/* Maryland */}
        <h5>9. Maryland</h5>
        <p>Record: 19-4 </p>
        <p>KenPom Ratings: AdjEm: +22.40 AdjO: 37 AdjD: 5</p>
        {/* Seton Hall */}
        <h5>10. Seton Hall</h5>
        <p>Record: 18-5 </p>
        <p>KenPom Ratings: AdjEm: +21.13 AdjO: 40 AdjD: 8</p>
      </div>
      <p>
        Just three teams meet the KenPom criteria of ranking top 20 in both AdjO
        and AdjD: Kansas, San Diego State, and Duke. Baylor is just outside the
        top 20 in adjO and could definitely be included in this list come March.
        Pick your winner accordingly.
      </p>
    </div>
  );
}

export default KenPom;
