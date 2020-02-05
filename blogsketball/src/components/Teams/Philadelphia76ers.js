import React from "react";
import "./teams.scss";
import SixersLogo from "../../images/Sixers.jpeg";
import { IoIosList, IoIosBrowsers } from "react-icons/io";
import Layout from "../../helpers/Layout";

function Sixers() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Philadelphia 76'ers</h3>
        <div className="logo-container">
          <img src={SixersLogo} alt="Sixers logo" className="team-logo" />
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
            <img src={SixersLogo} alt="Sixers logo" className="article-img" />
            <div className="article-header-wordz">
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
              <p>Article caption: blah blah blah blah</p>
            </div>
          </div>
          <div className="article-card">
            <img src={SixersLogo} alt="Sixers logo" className="article-img" />
            <div className="article-header-wordz">
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
              <p>Article caption: blah blah blah blah</p>
            </div>
          </div>
          <div className="article-card">
            <img src={SixersLogo} alt="Sixers logo" className="article-img" />
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
            <img src={SixersLogo} alt="Sixers logo" className="article-img" />
            <div className="article-header-wordz">
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
              <p>Article caption: blah blah blah blah</p>
            </div>
          </div>
          <div className="article-card">
            <img src={SixersLogo} alt="Sixers logo" className="article-img" />
            <div className="article-header-wordz">
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
              <p>Article caption: blah blah blah blah</p>
            </div>
          </div>
          <div className="article-card">
            <img src={SixersLogo} alt="Sixers logo" className="article-img" />
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
            <img src={SixersLogo} alt="Sixers logo" className="article-img" />
            <div className="article-header-wordz">
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
              <p>Article caption: blah blah blah blah</p>
            </div>
          </div>
          <div className="article-card">
            <img src={SixersLogo} alt="Sixers logo" className="article-img" />
            <div className="article-header-wordz">
              <h5 className="article-header">
                Article header: blah blah blah blah
              </h5>
              <p>Article caption: blah blah blah blah</p>
            </div>
          </div>
          <div className="article-card">
            <img src={SixersLogo} alt="Sixers logo" className="article-img" />
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

export default Sixers;
