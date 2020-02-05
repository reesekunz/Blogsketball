import React from "react";
import "./teams.scss";
import PistonsLogo from "../../images/Pistons.png";

function Pistons() {
  return (
    <div className="team-container">
      <div className="team-header">
        <h3 className="team-name">Detroit Pistons</h3>
        <div className="logo-container">
          <img src={PistonsLogo} alt="Pistons logo" className="team-logo" />
        </div>
      </div>
      {/* Filter */}
      Filter by article type, date-posted, etc. dropdown here Link to players
      component
      <div className="article-container">
        {/* Row 1  */}
        <div className="article-row">
          <div className="article-card">
            <img src={PistonsLogo} alt="Pistons logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img src={PistonsLogo} alt="Pistons logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
          <div className="article-card">
            <img src={PistonsLogo} alt="Pistons logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
          </div>
        </div>
        {/* Row 2 */}
        <div className="article-row">
          <div className="article-card">
            <img src={PistonsLogo} alt="Pistons logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
            <p>Article caption: blah blah blah blah</p>
          </div>
          <div className="article-card">
            <img src={PistonsLogo} alt="Pistons logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
            <p>Article caption: blah blah blah blah</p>
          </div>
          <div className="article-card">
            <img src={PistonsLogo} alt="Pistons logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
            <p>Article caption: blah blah blah blah</p>
          </div>
        </div>
        {/* Row 3 */}
        <div className="article-row">
          <div className="article-card">
            <img src={PistonsLogo} alt="Pistons logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
            <p>Article caption: blah blah blah blah</p>
          </div>
          <div className="article-card">
            <img src={PistonsLogo} alt="Pistons logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
            <p>Article caption: blah blah blah blah</p>
          </div>
          <div className="article-card">
            <img src={PistonsLogo} alt="Pistons logo" className="article-img" />
            <h5 className="article-header">
              Article header: blah blah blah blah
            </h5>
            <p>Article caption: blah blah blah blah</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pistons;
