import React from "react";
import "./NewsAndAnalysis.scss";
import { NavLink } from "react-router-dom";
import BlogsketballIMG from "../../images/Blogsketball.png";
import KobeChampionship from "../../images/KobeChampionship.jpeg";
import Zion from "../../images/Zion.jpeg";

function ViewGameArticles() {
  var gameArticles = document.querySelectorAll("#game");
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
  var gameArticles = document.querySelectorAll("#game");
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
  var gameArticles = document.querySelectorAll("#game");
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
  var gameArticles = document.querySelectorAll("#game");
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
  var gameArticles = document.querySelectorAll("#game");
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
        <div className="article-filter-btn" onClick={ViewGameArticles}>
          Games
        </div>
        <div className="article-filter-btn" onClick={ViewTradeArticles}>
          Trades
        </div>
        <div className="article-filter-btn" onClick={ViewFAArticles}>
          {" "}
          Free Agency
        </div>
        <div className="article-filter-btn" onClick={ViewOtherArticles}>
          Other
        </div>
      </div>
      <div className="all-articles-container">
        {/* 2019 Redraft */}
        <div className="article-card" id="other">
          <NavLink
            to="/2019-redraft"
            activeClassName="activeNavButton"
            className="news-article-link"
          >
            <h3 className="article-card-header"> 2019 Lottery Re-Draft</h3>
            <div className="article-card-row-2">
              <img
                src={Zion}
                alt="zion williamson"
                className="article-card-img"
              />{" "}
              <div className="row2-content">
                <div className="date-written">Feb. 12 2020</div>
                <div className="tag">Tag: Other</div>
              </div>
            </div>
          </NavLink>
        </div>

        {/* Legit Title Contenders Article  */}
        <div className="article-card" id="trades">
          <NavLink
            to="/legit-contenders"
            activeClassName="activeNavButton"
            className="news-article-link"
          >
            <h3 className="article-card-header">
              {" "}
              Who Are Legitimate Title Contenders? Post Trade-Deadline Edition
            </h3>
            <div className="article-card-row-2">
              <img
                src={KobeChampionship}
                alt="kobe championship"
                className="article-card-img"
              />{" "}
              <div className="row2-content">
                <div className="date-written">Feb. 8th, 2020</div>
                <div className="tag">Tag: Trades</div>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="article-card" id="free-agency">
          FA Article card
        </div>
        <div className="article-card" id="other">
          <NavLink
            to="/legit-contenders"
            activeClassName="activeNavButton"
            className="news-article-link"
          >
            other Article card
          </NavLink>
        </div>
        <div className="article-card" id="game">
          game Article card
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
