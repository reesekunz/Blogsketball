import React from "react";
import "./NewsAndAnalysis.scss";
import { NavLink } from "react-router-dom";
import BlogsketballIMG from "../../images/Blogsketball.png";

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
        <div className="article-card" id="game">
          game Article card
        </div>
        <div className="article-card" id="trades">
          trades Article card
        </div>
        <div className="article-card" id="free-agency">
          FA Article card
        </div>
        <div className="article-card" id="other">
          other Article card
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
