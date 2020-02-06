import React from "react";
import "./PowerRankings.scss";
import Lakers from "../../images/Lakers.png";
import { IoMdSnow, IoIosFlame } from "react-icons/io";

function PowerRankings() {
  return (
    <div className="power-rankings-container">
      <h2 className="week-header">Week 16 Power Rankings</h2>

      <div className="power-rankings-intro">
        <p>
          This is the intro describing what we look for when evaluating a team
          and where to rank them.
        </p>
        <p>
          This is the intro describing what we look for when evaluating a team
          and where to rank them.
        </p>
        <p>
          This is the intro describing what we look for when evaluating a team
          and where to rank them.
        </p>
        <p>
          This is the intro describing what we look for when evaluating a team
          and where to rank them.
        </p>
      </div>
      <h2 className="previous-rank-header">Previous Rankings:</h2>
      <div className="week-links">
        <a className="week-link" href="#">
          Week 15
        </a>
        <span>|</span>
        <a className="week-link" href="#">
          14
        </a>
        <span>|</span>
        <a className="week-link" href="#">
          13
        </a>
        <span>|</span>
        <a className="week-link" href="#">
          12
        </a>
        <span>|</span>
        <a className="week-link" href="#">
          11
        </a>
        <span>|</span>
        <a className="week-link" href="#">
          10
        </a>
        <span>|</span>
        <a className="week-link" href="#">
          9
        </a>
        <span>|</span>
        <a className="week-link" href="#">
          8
        </a>
        <span>|</span>
        <a className="week-link" href="#">
          7
        </a>
        <span>|</span>
        <a className="week-link" href="#">
          6
        </a>
        <span>|</span>
        <a className="week-link" href="#">
          5
        </a>
        <span>|</span>
        <a className="week-link" href="#">
          4
        </a>
        <span>|</span>
        <a className="week-link" href="#">
          3
        </a>
        <span>|</span>
        <a className="week-link" href="#">
          2
        </a>
        <span>|</span>
        <a className="week-link" href="#">
          1
        </a>
      </div>
      <div className="whos-hot-whos-not-container">
        <div className="whos-hot-whos-not">
          <div className="hot-cold-team">
            <div className="icon">
              <IoIosFlame size={40} color="red" />
            </div>
            <div className="teams-list">
              <div className="team">
                <p className="team-name">Phoenix Suns</p>
                <p>+8</p>
              </div>
              <div className="team">
                <p className="team-name">Milwaukee Bucks</p>
                <p>+11</p>
              </div>
              <div className="team">
                <p className="team-name">Los Angeles Lakers</p>
                <p>+10</p>
              </div>
            </div>
          </div>
          <div className="hot-cold-team">
            <div className="icon">
              <IoMdSnow size={40} color="blue" />
            </div>
            <div className="teams-list">
              <div className="team">
                <p className="team-name">Phoenix Suns</p>
                <p>-8</p>
              </div>
              <div className="team">
                <p className="team-name">Milwaukee Bucks</p>
                <p>-11</p>
              </div>
              <div className="team">
                <p className="team-name">Los Angeles Lakers</p>
                <p>-10</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pr-team-container">
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">1. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">2. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">3. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">4. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">5. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">6. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">7. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">8. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">9. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">10. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">11. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">12. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">13. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">14. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">15. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">16. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">17. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">18. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">19. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">20. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">21. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">22. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">23. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">24. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">25. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">26. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">27. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">28. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">29. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
        <div className="pr-team">
          <div className="pr-team-header-container">
            <h1 className="pr-team-header">30. Los Angeles Lakers</h1>
            <div className="pr-team-logo-container">
              <img className="pr-team-logo" src={Lakers} alt="team logo" />
            </div>
            <div className="record-and-ranking">
              <h4 className="pr-team-record">Record: 37-11</h4>
              <h4 className="pr-team-ranking-change">Previous week rank: 2</h4>
            </div>
          </div>

          <div className="pr-team-description-container">
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
            <p>
              Blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PowerRankings;
