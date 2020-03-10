import React from "react";
import "./NewsAndAnalysis.scss";
import { NavLink } from "react-router-dom";
// import BlogsketballIMG from "../../images/Blogsketball.png";
import KobeChampionship from "../../images/KobeChampionship.jpeg";
import Zion from "../../images/Zion.jpeg";
import AllStarGame from "../../images/AllStarGame.jpeg";
import Mikal from "../../images/Mikal.jpeg";
import Kyle from "../../images/Kyle.jpeg";
import { IoMdPricetags } from "react-icons/io";

function ViewDraftArticles() {
  var gameArticles = document.querySelectorAll("#draft");
  for (var i = 0; i < gameArticles.length; i += 1) {
    gameArticles[i].style.display = "flex";
  }
  var freeAgencyArticles = document.querySelectorAll("#free-agency");
  for (var i = 0; i < freeAgencyArticles.length; i += 1) {
    freeAgencyArticles[i].style.display = "none";
  }
  var tradeArticles = document.querySelectorAll("#trades");
  for (var i = 0; i < tradeArticles.length; i += 1) {
    tradeArticles[i].style.display = "none";
  }
  var otherArticles = document.querySelectorAll("#other");
  for (var i = 0; i < otherArticles.length; i += 1) {
    otherArticles[i].style.display = "none";
  }
}
function ViewTradeArticles() {
  var gameArticles = document.querySelectorAll("#draft");
  for (var i = 0; i < gameArticles.length; i += 1) {
    gameArticles[i].style.display = "none";
  }
  var freeAgencyArticles = document.querySelectorAll("#free-agency");
  for (var i = 0; i < freeAgencyArticles.length; i += 1) {
    freeAgencyArticles[i].style.display = "none";
  }
  var tradeArticles = document.querySelectorAll("#trades");
  for (var i = 0; i < tradeArticles.length; i += 1) {
    tradeArticles[i].style.display = "flex";
  }
  var otherArticles = document.querySelectorAll("#other");
  for (var i = 0; i < otherArticles.length; i += 1) {
    otherArticles[i].style.display = "none";
  }
}
function ViewFAArticles() {
  var gameArticles = document.querySelectorAll("#draft");
  for (var i = 0; i < gameArticles.length; i += 1) {
    gameArticles[i].style.display = "none";
  }
  var freeAgencyArticles = document.querySelectorAll("#free-agency");
  for (var i = 0; i < freeAgencyArticles.length; i += 1) {
    freeAgencyArticles[i].style.display = "flex";
  }
  var tradeArticles = document.querySelectorAll("#trades");
  for (var i = 0; i < tradeArticles.length; i += 1) {
    tradeArticles[i].style.display = "none";
  }
  var otherArticles = document.querySelectorAll("#other");
  for (var i = 0; i < otherArticles.length; i += 1) {
    otherArticles[i].style.display = "none";
  }
}
function ViewOtherArticles() {
  var gameArticles = document.querySelectorAll("#draft");
  for (var i = 0; i < gameArticles.length; i += 1) {
    gameArticles[i].style.display = "none";
  }
  var freeAgencyArticles = document.querySelectorAll("#free-agency");
  for (var i = 0; i < freeAgencyArticles.length; i += 1) {
    freeAgencyArticles[i].style.display = "none";
  }
  var tradeArticles = document.querySelectorAll("#trades");
  for (var i = 0; i < tradeArticles.length; i += 1) {
    tradeArticles[i].style.display = "none";
  }
  var otherArticles = document.querySelectorAll("#other");
  for (var i = 0; i < otherArticles.length; i += 1) {
    otherArticles[i].style.display = "flex";
  }
}
function ViewALLArticles() {
  var gameArticles = document.querySelectorAll("#draft");
  for (var i = 0; i < gameArticles.length; i += 1) {
    gameArticles[i].style.display = "flex";
  }
  var freeAgencyArticles = document.querySelectorAll("#free-agency");
  for (var i = 0; i < freeAgencyArticles.length; i += 1) {
    freeAgencyArticles[i].style.display = "flex";
  }
  var tradeArticles = document.querySelectorAll("#trades");
  for (var i = 0; i < tradeArticles.length; i += 1) {
    tradeArticles[i].style.display = "flex";
  }
  var otherArticles = document.querySelectorAll("#other");
  for (var i = 0; i < otherArticles.length; i += 1) {
    otherArticles[i].style.display = "flex";
  }
}

function NewsAndAnalysis() {
  return (
    <div className="news-and-analysis-container">
      <h2 className="news-and-analysis-header">News and Analysis</h2>
      <div className="tab-buttonz">
        <div className="article-filter-btn" onClick={ViewALLArticles}>
          View All
        </div>
        <div className="article-filter-btn" onClick={ViewTradeArticles}>
          Trades
        </div>
        <div className="article-filter-btn" onClick={ViewFAArticles}>
          Free Agency
        </div>
        <div className="article-filter-btn" onClick={ViewDraftArticles}>
          {" "}
          Draft
        </div>
        <div className="article-filter-btn" onClick={ViewOtherArticles}>
          Other
        </div>
      </div>
      {/* TAG LEGEND: Trades = purple, Free Agency = green, Draft = red, Other =blue */}
      <div className="all-articles-container">
        {/* 2019 Redraft */}

        <div className="article-card" id="draft">
          <NavLink
            to="/2019-redraft"
            activeClassName="activeNavButton"
            className="news-article-link"
          >
            <img
              className="article-card-img"
              src={Zion}
              alt="Zion Williamson"
            />
            <div className="date-tag-wrapper">
              <div className="date-written">FEB. 12 </div>
              <div className="tag"></div>
              <IoMdPricetags color="red" size={20} /> {""}
              Draft
            </div>{" "}
            <h3 className="article-card-header">
              Re-drafting the 2019 Lottery
            </h3>
            <p className="article-preview">
              Along with Tyler Herro and Eric Paschall, Kevin Porter Jr. has
              been one of the most pleasant surprises of the draft at pick 30.
              While he has tendencies to be a black hole on offense, Porter Jr.
              is a volume scorer that could provide a nice spark off the bench
              for the Celtics...
            </p>
          </NavLink>
        </div>

        {/* Legit Title Contenders Article  */}
        <div className="article-card" id="trades">
          <NavLink
            to="/legit-contenders"
            activeClassName="activeNavButton"
            className="news-article-link"
          >
            <img
              className="article-card-img"
              src={KobeChampionship}
              alt="KOBE"
            />
            <div className="date-tag-wrapper">
              <div className="date-written">FEB. 8 </div>
              <div className="tag"></div>
              <IoMdPricetags color="purple" size={20} /> {""}
              Trades
            </div>{" "}
            <h3 className="article-card-header">
              Who Are Legitimate Title Contenders? Post Trade-Deadline Edition
            </h3>
            <p className="article-preview">
              With the trade deadline finally behind us, we can finally stop
              playing out hypothetical scenarios and matching up potential teams
              with one another. I, for one, was sick of the "x team offered
              garbage package for an all-star caliber player" type conversations
              I was getting into...
            </p>
          </NavLink>
        </div>

        {/* All star game article  */}
        <div className="article-card" id="other">
          <NavLink
            to="/2020-all-star-game"
            activeClassName="activeNavButton"
            className="news-article-link"
          >
            <img
              className="article-card-img"
              src={AllStarGame}
              alt="All star game"
            />
            <div className="date-tag-wrapper">
              <div className="date-written">FEB. 16 </div>
              <div className="tag"></div>
              <IoMdPricetags color="blue" size={20} /> {""}
              Other
            </div>
            <h3 className="article-card-header">
              2020 NBA All-Star Game Epitomized "Mamba Mentality"
            </h3>
            <p className="article-preview">
              In a night that was heavily dedicated towards honoring the lives
              of Kobe Bryant, Gianna Bryant, and the other victims of the tragic
              helicopter crash, Kobe would not have been more proud of the
              “mamba mentality” that transpired throughout the game...
            </p>
          </NavLink>
        </div>
        {/* Top 10 underrated article  */}
        <div className="article-card" id="other">
          <NavLink
            to="/top-10-underrated"
            activeClassName="activeNavButton"
            className="news-article-link"
          >
            <img className="article-card-img" src={Mikal} alt="Mikal Bridges" />
            <div className="date-tag-wrapper">
              <div className="date-written">FEB. 18 </div>
              <div className="tag"></div>
              <IoMdPricetags color="blue" size={20} /> {""}
              Other
            </div>{" "}
            <h3 className="article-card-header">
              Ranking the Top 10 Most Underrated Players
            </h3>
            <p className="article-preview">
              Monte Morris is constantly atop the league in assist-to-turnover
              ratio (currently in first with a 5.5 ratio). He takes care of the
              ball and shoots three pointers at a 40% rate. Morris is the ideal
              playmaker you want coming off the bench that literally never gets
              talked about...
            </p>
          </NavLink>
        </div>
        {/* Top 10 overrated article  */}
        <div className="article-card" id="other">
          <NavLink
            to="/top-10-overrated"
            activeClassName="activeNavButton"
            className="news-article-link"
          >
            <img className="article-card-img" src={Kyle} alt="Kyle Lowry" />
            <div className="date-tag-wrapper">
              <div className="date-written">FEB. 19 </div>
              <div className="tag"></div>
              <IoMdPricetags color="blue" size={20} /> {""}
              Other
            </div>{" "}
            <h3 className="article-card-header">
              Ranking the Top 10 Most Overrated Players
            </h3>
            <p className="article-preview">
              Garry Harris’ production has dipped the past two seasons to the
              point where one could debate if he should even be starting for the
              Nuggets. I personally used to view Denver as having a potential
              big 3 in Jokic, Murray, and Harris because of how young and
              talented they were, but..
            </p>
          </NavLink>
        </div>
        <div className="article-card" id="draft">
          draft Article card
        </div>
        <div className="article-card" id="trades">
          trades Article card
        </div>
        <div className="article-card" id="free-agency">
          fa Article card
        </div>
        <div className="article-card" id="other">
          other Article card
        </div>
      </div>
    </div>
  );
}
export default NewsAndAnalysis;
