import React from "react";
import "./teams.scss";
import LakersLogo from "../../images/Lakers.png";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";

function Lakers() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Los Angeles Lakers</h3>
        <div className="logo-container">
          <img src={LakersLogo} alt="Lakers logo" className="team-logo" />
        </div>
      </div>
      <button onClick={Layout.ListLayout}>
        <IoIosList size={40} />
      </button>
      <button onClick={Layout.CardLayout}>
        <IoIosBrowsers size={40} />
      </button>
      <div className="article-container">
        {/* Row 1  */}
        <div className="article-row">
          <div className="article-card">
            <img src={LakersLogo} alt="Lakers logo" className="article-img" />
            <div className="article-header-wordz">
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
              <p>Article caption: blah blah blah blah</p>
            </div>
          </div>
          <div className="article-card">
            <img src={LakersLogo} alt="Lakers logo" className="article-img" />
            <div className="article-header-wordz">
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
              <p>Article caption: blah blah blah blah</p>
            </div>
          </div>
          <div className="article-card">
            <img src={LakersLogo} alt="Lakers logo" className="article-img" />
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
          <div className="article-card">
            <img src={LakersLogo} alt="Lakers logo" className="article-img" />
            <div className="article-header-wordz">
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
              <p>Article caption: blah blah blah blah</p>
            </div>
          </div>
          <div className="article-card">
            <img src={LakersLogo} alt="Lakers logo" className="article-img" />
            <div className="article-header-wordz">
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
              <p>Article caption: blah blah blah blah</p>
            </div>
          </div>
          <div className="article-card">
            <img src={LakersLogo} alt="Lakers logo" className="article-img" />
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
          <div className="article-card">
            <img src={LakersLogo} alt="Lakers logo" className="article-img" />
            <div className="article-header-wordz">
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
              <p>Article caption: blah blah blah blah</p>
            </div>
          </div>
          <div className="article-card">
            <img src={LakersLogo} alt="Lakers logo" className="article-img" />
            <div className="article-header-wordz">
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
              <p>Article caption: blah blah blah blah</p>
            </div>
          </div>
          <div className="article-card">
            <img src={LakersLogo} alt="Lakers logo" className="article-img" />
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

export default Lakers;
