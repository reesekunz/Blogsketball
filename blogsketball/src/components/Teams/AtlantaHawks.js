import React from "react";
import "./teams.scss";
import HawksLogo from "../../images/Hawks.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";

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
      <button onClick={Layout.ListLayout}>
        <IoIosList size={40} />
      </button>
      <button onClick={Layout.CardLayout}>
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
