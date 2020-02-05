import React from "react";
import "./teams.scss";
import HawksLogo from "../../images/Hawks.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";

function ListLayout() {
  var articleRows = document.querySelectorAll(".article-row");
  for (var i = 0; i < articleRows.length; i += 1) {
    articleRows[i].style.display = "flex";
    articleRows[i].style.flexDirection = "column";
    // articleRows[i].style.border = "1px solid red";
    articleRows[i].style.marginLeft = "100px";
    articleRows[i].style.marginRight = "100px";
    articleRows[i].style.marginTop = "0";
  }

  var articleCards = document.querySelectorAll(".article-card");
  for (var i = 0; i < articleCards.length; i += 1) {
    articleCards[i].style.display = "flex";
    // articleCards[i].style.border = "1px solid green";
    articleCards[i].style.width = "100%";
    articleCards[i].style.height = "100px";
    articleCards[i].style.marginTop = "25px";
    articleCards[i].style.boxShadow = "1px 2px black";
  }

  var articleImages = document.querySelectorAll(".article-img");
  for (var i = 0; i < articleImages.length; i += 1) {
    articleImages[i].style.width = "20%";
    articleImages[i].style.height = "100%";
    articleImages[i].style.marginRight = "50px";
  }
}

function CardLayout() {
  var articleRows = document.querySelectorAll(".article-row");
  for (var i = 0; i < articleRows.length; i += 1) {
    articleRows[i].style.display = "flex";
    articleRows[i].style.flexDirectoin = "row";
    articleRows[i].style.justifyContent = "space-evenly";
    articleRows[i].style.marginTop = "5%";
  }
  var articleCards = document.querySelectorAll(".article-card");
  for (var i = 0; i < articleCards.length; i += 1) {
    articleCards[i].style.border = "1px solid black";
    articleCards[i].style.width = "425px";
    articleCards[i].style.height = "280px";
    articleCards[i].style.boxShadow = "2px 4px black";
  }
  var articleImages = document.querySelectorAll(".article-img");
  for (var i = 0; i < articleImages.length; i += 1) {
    articleImages[i].style.width = "100%";
    articleImages[i].style.height = "55%";
    articleCards[i].style.border = "1px solid black";
  }

  var articleContainer = document.querySelector(".article-container");
  articleContainer.style.display = "flex";
  // articleContainer.style.flexDirection = "row"; // this is what we need to fix
  articleContainer.style.justifyContent = "center";
  articleContainer.style.paddingBottom = "10%";
}

function Hawks() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Atlanta Hawks</h3>
        <div className="logo-container">
          <img src={HawksLogo} alt="Hawks logo" className="team-logo" />
        </div>
      </div>
      {/* Filter */}
      {/* <button onClick={ViewAll}>View All Articles</button>
      <button onClick={ViewGameAnalysis}>Game Analysis</button>
      <button onClick={ViewRumors}>Rumors</button> */}
      <button onClick={ListLayout}>
        <IoIosList size={40} />
      </button>
      <button onClick={CardLayout}>
        <IoIosBrowsers size={40} />
      </button>

      <div className="article-container">
        {/* Row 1  */}
        <div className="article-row">
          <div className="article-card" id="rumors">
            <img src={HawksLogo} alt="Hawks logo" className="article-img" />
            <div className="article-header-wordz">
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
              <p>Article caption: blah blah blah blah</p>
            </div>
          </div>

          <div className="article-card" id="rumors">
            <img src={HawksLogo} alt="Hawks logo" className="article-img" />
            <div className="article-header-wordz">
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
              <p>Article caption: blah blah blah blah</p>
            </div>
          </div>
          <div className="article-card" id="game-analysis">
            <img src={HawksLogo} alt="Hawks logo" className="article-img" />
            <div className="article-header-wordz">
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
              <p>Article caption: blah blah blah blah</p>
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="article-row">
          <div className="article-card" id="game-analysis">
            <img src={HawksLogo} alt="Hawks logo" className="article-img" />
            <div className="article-header-wordz">
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
              <p>Article caption: blah blah blah blah</p>
            </div>
          </div>
          <div className="article-card" id="rumors">
            <img src={HawksLogo} alt="Hawks logo" className="article-img" />
            <div className="article-header-wordz">
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
              <p>Article caption: blah blah blah blah</p>
            </div>
          </div>
          <div className="article-card" id="rumors">
            <img src={HawksLogo} alt="Hawks logo" className="article-img" />
            <div className="article-header-wordz">
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
              <p>Article caption: blah blah blah blah</p>
            </div>
          </div>
        </div>
        {/* Row 3 */}
        <div className="article-row">
          <div className="article-card" id="rumors">
            <img src={HawksLogo} alt="Hawks logo" className="article-img" />
            <div className="article-header-wordz">
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
              <p>Article caption: blah blah blah blah</p>
            </div>
          </div>
          <div className="article-card" id="game-analysis">
            <img src={HawksLogo} alt="Hawks logo" className="article-img" />
            <div className="article-header-wordz">
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
              <p>Article caption: blah blah blah blah</p>
            </div>
          </div>
          <div className="article-card" id="game-analysis">
            <img src={HawksLogo} alt="Hawks logo" className="article-img" />
            <div className="article-header-wordz">
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
              <p>Article caption: blah blah blah blah</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hawks;
