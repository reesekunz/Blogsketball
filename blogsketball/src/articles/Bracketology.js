import React from "react";
import "./articles.scss";
import Bracket from "../images/Bracketology.png";

function Bracketology() {
  return (
    <div className="article-container">
      <h3 className="article-header">March is Coming </h3>
      <div className="article-header-img-container">
        <img className="article-header-img" src={Bracket} alt="Bracketology" />
        <div className="article-caption">March is coming.</div>
      </div>
      <div className="date-written">February 20th, 2020</div>
      <div className="article-content">
        <p>
          Note: Bracket is according to{" "}
          <a href="http://www.espn.com/mens-college-basketball/bracketology">
            ESPN's Bracketology by Joe Lunardi
          </a>
          . Joe Lunardi does a terrific job of breaking down team seeds and
          bubble teams as of where they currently stand today. My bracket
          prediction is based off his projected seedings as of February 20th. I
          know, I know. It's probably too early. But I'm excited. okay.
        </p>
        <h5>First Round</h5>
        <h6>South</h6>
        <ul>
          <li> #1 Baylor over #16 winner of Saint Peter's/Norfolk St.</li>
          <li>#8 LSU over #9 Saint Mary's</li>
          <li>#12 winner of Utah St./East Tennesse St. over #5 Colorado</li>
          <li>#4 Creighton over #13 SFA</li>
          <li>#6 Butler over #11 Virginia</li>
          <li>#3 Penn St. over #14 Hofstra</li>
          <li>#7 Michigan over #10 Nothern Iowa</li>
          <li>#2 Dayton over #15 Bowling Green</li>
        </ul>
        <h6>East</h6>
        <ul>
          <li> #1 SDSU over #16 North Florida</li>
          <li>#8 Rutgers over #9 Oklahoma</li>
          <li>#12 Yale over #5 Marquette</li>
          <li>#4 Auburn over #13 Wright St.</li>
          <li>#6 Ohio St. over #11 ASU</li>
          <li>#3 Seton Hall over #14 Colgate</li>
          <li>#7 Iowa over #10 Wichita St.</li>
          <li>#2 Duke over #15 Montana</li>
        </ul>
        <h6>Midwest</h6>
        <ul>
          <li> #1 Kansas over #16 Austin Peay</li>
          <li>#9 Rhode Island over #8 Wisconsin</li>
          <li>#5 Oregon over #12 Vermont</li>
          <li>#4 Kentucky over #13 New Mexico St.</li>
          <li>#11 Cincinnati over #6 BYU </li>
          <li>#3 Louisville over #14 UC Irvine</li>
          <li>#10 Xavier over #7 Texas Tech</li>
          <li>#2 Maryland over #15 Little Rock</li>
        </ul>
        <h6>West</h6>
        <ul>
          <li> #1 Gonzaga over #16 winner of Prairie View A+M/Robert Morris</li>
          <li>#8 Illinois over #9 Florida</li>
          <li>#5 Arizona over #12 Furman</li>
          <li>#13 North Texas over #4 Villanova</li>
          <li>#6 Michigan St. over #11 winner of USC/Georgetown </li>
          <li>#3 West Virginia over #14 South Dakota St.</li>
          <li>#7 Houston over #10 Purdue</li>
          <li>#2 Florida St. over #15 Winthrop</li>
        </ul>
        <h5>Second Round</h5>
        <h6>South</h6>
        <ul>
          <li> #1 Baylor over #8 LSU </li>
          <li>#4 Creighton over #12 winner of Utah St./East Tennesse St.</li>
          <li>#6 Butler over #3 Penn St.</li>
          <li>#2 Dayton over #7 Michigan</li>
        </ul>
        <h6>East</h6>
        <ul>
          <li> #1 SDSU over #8 Rutgers </li>
          <li>#12 Yale over #4 Auburn</li>
          <li>#3 Seton Hall over #6 Ohio St.</li>
          <li>#2 Duke over #7 Iowa</li>
        </ul>
        <h6>Midwest</h6>
        <ul>
          <li> #1 Kansas over #9 Rhode Island </li>
          <li>#4 Kentucky over #5 Oregon</li>
          <li>#3 Louisville over #11 Cincinnati</li>
          <li>#10 Xavier over #2 Maryland</li>
        </ul>
        <h6>West</h6>
        <ul>
          <li> #1 Gonzaga over #8 Illinois</li>
          <li>#5 Arizona over #13 North Texas</li>
          <li>#6 Michigan St. over #3 West Virginia </li>
          <li>#2 Florida St. over #7 Houston</li>
        </ul>
        <h5>Sweet 16</h5>
        <h6>South</h6>
        <ul>
          <li> #1 Baylor over #4 Creighton </li>
          <li>#2 Dayton over #6 Butler</li>
        </ul>
        <h6>East</h6>
        <ul>
          <li> #1 SDSU over #12 Yale</li>
          <li>#3 Seton Hall over #2 Duke</li>
        </ul>
        <h6>Midwest</h6>
        <ul>
          <li> #1 Kansas over #4 Kentucky</li>
          <li>#3 Louisville over #10 Xavier</li>
        </ul>
        <h6>West</h6>
        <ul>
          <li> #1 Gonzaga over #5 Arizona </li>
          <li>#6 Michigan St. over #2 Florida St. </li>
        </ul>
        <h5>Elite 8</h5>
        <h6>South</h6>
        <ul>
          <li> #1 Baylor over #2 Dayton </li>
        </ul>
        <h6>East</h6>
        <ul>
          <li>#3 Seton Hall over #1 SDSU</li>
        </ul>
        <h6>Midwest</h6>
        <ul>
          <li> #1 Kansas over #3 Louisville</li>
        </ul>
        <h6>West</h6>
        <ul>
          <li>#6 Michigan St. over #1 Gonzaga </li>
        </ul>
        <h5>Final 4</h5>
        <ul>
          <li>#1 Baylor over #3 Seton Hall </li>
          <li>#1 Kansas over #6 Michigan St. </li>
        </ul>
        <h5>National Championship</h5>
        <h5>#1 Kansas over #1 Baylor</h5>
      </div>
    </div>
  );
}

export default Bracketology;
