import React from "react";
import "./App.scss";
import { Route, NavLink } from "react-router-dom";

// Components
import NewHome from "./components/Home/NewHome";
import Header from "./components/Header/Header";
// import Home from "./components/Home/Home";
import Betting from "./components/Betting/Betting";
import PowerRankings from "./components/Power Rankings/PowerRankings";
import Analysis from "./components/NewsAndAnalysis/NewsAndAnalysis";
import NBADraft from "./components/NBADraft/NBADraft";
import College from "./components/College/College";
import Page2 from "./components/Home/Page2";
import Page3 from "./components/Home/Page3";

// Teams
import Hawks from "./components/Teams/AtlantaHawks";
import Celtics from "./components/Teams/BostonCeltics";
import Nets from "./components/Teams/BrooklynNets";
import Hornets from "./components/Teams/CharlotteHornets";
import Bulls from "./components/Teams/ChicagoBulls";
import Cavs from "./components/Teams/ClevelandCavaliers";
import Mavs from "./components/Teams/DallasMavericks";
import Nuggets from "./components/Teams/DenverNuggets";
import Pistons from "./components/Teams/DetroitPistons";
import Warriors from "./components/Teams/GoldenStateWarriors";
import Rockets from "./components/Teams/HoustonRockets";
import Pacers from "./components/Teams/IndianaPacers";
import Clippers from "./components/Teams/LAClippers";
import Lakers from "./components/Teams/LALakers";
import Grizzlies from "./components/Teams/MemphisGrizzlies";
import Heat from "./components/Teams/MiamiHeat";
import Bucks from "./components/Teams/MilwaukeeBucks";
import TWolves from "./components/Teams/MinnesotaTimberwolves";
import Pelicans from "./components/Teams/NewOrleansPelicans";
import Knicks from "./components/Teams/NewYorkKnicks";
import Thunder from "./components/Teams/OKCThunder";
import Magic from "./components/Teams/OrlandoMagic";
import Sixers from "./components/Teams/Philadelphia76ers";
import Suns from "./components/Teams/PhoenixSuns";
import Trailblazers from "./components/Teams/PortlandTrailblazers";
import Kings from "./components/Teams/SacramentoKings";
import Spurs from "./components/Teams/SanAntonioSpurs";
import Raptors from "./components/Teams/TorontoRaptors";
import Jazz from "./components/Teams/UtahJazz";
import Wizards from "./components/Teams/WashingtonWizards";
import { IoIosArrowDown } from "react-icons/io";
// Articles
import LegitContenders from "./articles/LegitContenders";
import Redraft from "./articles/2019Redraft";
import Top10NCAA from "./articles/Top10NCAA";
import KenPom from "./articles/KenPom";
import AllStarGame from "./articles/AllStarGame";
import Underrated from "./articles/Underrated";
import Overrated from "./articles/Overrated";
import ClippersBench from "./articles/ClippersBench";
import Top10CollegeCoaches from "./articles/Top10CollegeCoaches";
import NBARank91to100 from "./articles/NBARank91-100";
import NBARank81to90 from "./articles/NBARank81-90";
import NBARank71to80 from "./articles/NBARank71-80";
import NBARank61to70 from "./articles/NBARank61-70";
import NBARank51to60 from "./articles/NBARank51-60";
import NBARank41to50 from "./articles/NBARank41-50";
import NBARank31to40 from "./articles/NBARank31-40";
import NBARank21to30 from "./articles/NBARank21-30";
import NBARank16to20 from "./articles/NBARank16-20";
import NBARank11to15 from "./articles/NBARank11-15";
import NBARank6to10 from "./articles/NBARank6-10";
import NBARank1to5 from "./articles/NBARank1-5";

function App() {
  return (
    <div className="App">
      <Header />
      {/* Links  */}
      <div className="links-container">
        <NavLink
          exact
          to="/"
          activeClassName="activeNavButton"
          className="nav-bar-link"
        >
          Home
        </NavLink>
        {/* Dropdown for Teams  */}
        <div className="dropdown">
          <button className="dropbtn">
            Teams <IoIosArrowDown />
          </button>
          <div className="dropdown-content">
            <div className="conference">
              <h3 className="west-conference-header">West</h3>
              <NavLink to="/dallas-mavericks" activeClassName="activeNavButton">
                Dallas Mavericks
              </NavLink>
              <NavLink to="/denver-nuggets" activeClassName="activeNavButton">
                Denver Nuggets
              </NavLink>
              <NavLink
                to="/golden-state-warriors"
                activeClassName="activeNavButton"
              >
                Golden State Warriors
              </NavLink>
              <NavLink to="/houston-rockets" activeClassName="activeNavButton">
                Houston Rockets
              </NavLink>
              <NavLink to="/la-clippers" activeClassName="activeNavButton">
                Los Angeles Clippers
              </NavLink>
              <NavLink to="/la-lakers" activeClassName="activeNavButton">
                Los Angeles Lakers
              </NavLink>
              <NavLink
                to="/memphis-grizzlies"
                activeClassName="activeNavButton"
              >
                Memphis Grizzlies
              </NavLink>
              <NavLink
                to="/minnesota-timberwolves"
                activeClassName="activeNavButton"
              >
                Minnesota Timberwolves
              </NavLink>
              <NavLink
                to="/new-orleans-pelicans"
                activeClassName="activeNavButton"
              >
                New Orleans Pelicans{" "}
              </NavLink>
              <NavLink to="/okc-thunder" activeClassName="activeNavButton">
                Oklahoma City Thunder
              </NavLink>
              <NavLink to="/phoenix-suns" activeClassName="activeNavButton">
                Phoenix Suns
              </NavLink>
              <NavLink
                to="/portland-trail-blazers"
                activeClassName="activeNavButton"
              >
                Portland Trail Blazers
              </NavLink>
              <NavLink to="/sacramento-kings" activeClassName="activeNavButton">
                Sacramento Kings{" "}
              </NavLink>
              <NavLink
                to="/san-antonio-spurs"
                activeClassName="activeNavButton"
              >
                San Antonio Spurs{" "}
              </NavLink>
              <NavLink to="/utah-jazz" activeClassName="activeNavButton">
                Utah Jazz
              </NavLink>
            </div>
            <div className="conference">
              <h3 className="east-conference-header">East</h3>
              <NavLink to="/atlanta-hawks" activeClassName="activeNavButton">
                Atlanta Hawks
              </NavLink>
              <NavLink to="/boston-celtics" activeClassName="activeNavButton">
                Boston Celtics
              </NavLink>
              <NavLink to="/brooklyn-nets" activeClassName="activeNavButton">
                Brooklyn Nets
              </NavLink>
              <NavLink
                to="/charlotte-hornets"
                activeClassName="activeNavButton"
              >
                Charlotte Hornets
              </NavLink>
              <NavLink to="/chicago-bulls" activeClassName="activeNavButton">
                Chicago Bulls
              </NavLink>
              <NavLink
                to="/cleveland-cavaliers"
                activeClassName="activeNavButton"
              >
                Cleveland Cavaliers
              </NavLink>
              <NavLink to="/detroit-pistons" activeClassName="activeNavButton">
                Detroit Pistons
              </NavLink>
              <NavLink to="/indiana-pacers" activeClassName="activeNavButton">
                Indiana Pacers
              </NavLink>{" "}
              <NavLink to="/miami-heat" activeClassName="activeNavButton">
                Miami Heat
              </NavLink>
              <NavLink to="/milwaukee-bucks" activeClassName="activeNavButton">
                Milwaukee Bucks
              </NavLink>
              <NavLink to="/new-york-knicks" activeClassName="activeNavButton">
                New York Knicks
              </NavLink>
              <NavLink to="/orlando-magic" activeClassName="activeNavButton">
                Orlando Magic
              </NavLink>
              <NavLink
                to="/philadelphia-76ers"
                activeClassName="activeNavButton"
              >
                Philadelphia 76'ers
              </NavLink>
              <NavLink to="/toronto-raptors" activeClassName="activeNavButton">
                Toronto Raptors{" "}
              </NavLink>
              <NavLink
                to="/washington-wizards"
                activeClassName="activeNavButton"
              >
                Washington Wizards
              </NavLink>
            </div>
          </div>
        </div>
        <NavLink
          to="/news-and-analysis"
          activeClassName="activeNavButton"
          className="nav-bar-link"
        >
          News + Analysis
        </NavLink>

        <NavLink
          to="/betting"
          activeClassName="activeNavButton"
          className="nav-bar-link"
        >
          Betting
        </NavLink>
        <NavLink
          to="/mens-ncaa"
          activeClassName="activeNavButton"
          className="nav-bar-link"
        >
          NCAA
        </NavLink>
        {/* Dropdown for Other  */}
        <div className="dropdown">
          <button className="dropbtn">
            More <IoIosArrowDown />
          </button>
          <div className="dropdown-content-other">
            <div className="conference">
              <NavLink to="/power-rankings" activeClassName="activeNavButton">
                Power Rankings
              </NavLink>

              <NavLink to="/nba-mock-draft" activeClassName="activeNavButton">
                NBA Mock Draft
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* Routes  */}
      <Route exact path="/" component={NewHome} />
      <Route path="/betting" component={Betting} />
      <Route path="/power-rankings" component={PowerRankings} />
      <Route path="/news-and-analysis" component={Analysis} />
      <Route path="/mens-ncaa" component={College} />
      <Route path="/nba-mock-draft" component={NBADraft} />
      <Route path="/page-2" component={Page2} />
      <Route path="/page-3" component={Page3} />

      <Route path="/atlanta-hawks" component={Hawks} />
      <Route path="/boston-celtics" component={Celtics} />
      <Route path="/brooklyn-nets" component={Nets} />
      <Route path="/charlotte-hornets" component={Hornets} />
      <Route path="/chicago-bulls" component={Bulls} />
      <Route path="/cleveland-cavaliers" component={Cavs} />
      <Route path="/dallas-mavericks" component={Mavs} />
      <Route path="/denver-nuggets" component={Nuggets} />
      <Route path="/detroit-pistons" component={Pistons} />
      <Route path="/golden-state-warriors" component={Warriors} />
      <Route path="/houston-rockets" component={Rockets} />
      <Route path="/indiana-pacers" component={Pacers} />
      <Route path="/la-clippers" component={Clippers} />
      <Route path="/la-lakers" component={Lakers} />
      <Route path="/memphis-grizzlies" component={Grizzlies} />
      <Route path="/miami-heat" component={Heat} />
      <Route path="/milwaukee-bucks" component={Bucks} />
      <Route path="/minnesota-timberwolves" component={TWolves} />
      <Route path="/new-orleans-pelicans" component={Pelicans} />
      <Route path="/new-york-knicks" component={Knicks} />
      <Route path="/okc-thunder" component={Thunder} />
      <Route path="/orlando-magic" component={Magic} />
      <Route path="/philadelphia-76ers" component={Sixers} />
      <Route path="/phoenix-suns" component={Suns} />
      <Route path="/portland-trail-blazers" component={Trailblazers} />
      <Route path="/sacramento-kings" component={Kings} />
      <Route path="/san-antonio-spurs" component={Spurs} />
      <Route path="/toronto-raptors" component={Raptors} />
      <Route path="/utah-jazz" component={Jazz} />
      <Route path="/washington-wizards" component={Wizards} />

      {/* Article Routes  */}
      <Route path="/legit-contenders" component={LegitContenders} />
      <Route path="/2019-redraft" component={Redraft} />
      <Route path="/top-10-ncaa" component={Top10NCAA} />
      <Route path="/kenpom-analysis" component={KenPom} />
      <Route path="/2020-all-star-game" component={AllStarGame} />
      <Route path="/top-10-underrated" component={Underrated} />
      <Route path="/top-10-overrated" component={Overrated} />
      <Route path="/clippers-are-loaded" component={ClippersBench} />
      <Route path="/top-10-college-coaches" component={Top10CollegeCoaches} />
      <Route path="/nba-rank-91-100" component={NBARank91to100} />
      <Route path="/nba-rank-81-90" component={NBARank81to90} />
      <Route path="/nba-rank-71-80" component={NBARank71to80} />
      <Route path="/nba-rank-61-70" component={NBARank61to70} />
      <Route path="/nba-rank-51-60" component={NBARank51to60} />
      <Route path="/nba-rank-41-50" component={NBARank41to50} />
      <Route path="/nba-rank-31-40" component={NBARank31to40} />
      <Route path="/nba-rank-21-30" component={NBARank21to30} />
      <Route path="/nba-rank-16-20" component={NBARank16to20} />
      <Route path="/nba-rank-11-15" component={NBARank11to15} />
      <Route path="/nba-rank-6-10" component={NBARank6to10} />
      <Route path="/nba-rank-1-5" component={NBARank1to5} />
    </div>
  );
}

export default App;
