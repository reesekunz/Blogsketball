import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import { Route, NavLink } from "react-router-dom";
import Home from "./components/Home/Home";
import Betting from "./components/Betting/Betting";
import PowerRankings from "./components/Power Rankings/PowerRankings";
import GameAnalysis from "./components/Game Analysis/GameAnalysis";
import Rumors from "./components/Rumors/Rumors";
import NBADraft from "./components/NBADraft/NBADraft";
import College from "./components/College/College";
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
                LA Clippers
              </NavLink>
              <NavLink to="/la-lakers" activeClassName="activeNavButton">
                LA Lakers
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
                OKC Thunder
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
          to="/game-analysis"
          activeClassName="activeNavButton"
          className="nav-bar-link"
        >
          Game Analysis
        </NavLink>
        <NavLink
          to="/rumors"
          activeClassName="activeNavButton"
          className="nav-bar-link"
        >
          Rumors
        </NavLink>
        <NavLink
          to="/betting"
          activeClassName="activeNavButton"
          className="nav-bar-link"
        >
          Betting
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
              <NavLink to="/mens-ncaa" activeClassName="activeNavButton">
                Men's NCAA
              </NavLink>
              <NavLink to="/nba-mock-draft" activeClassName="activeNavButton">
                NBA Mock Draft
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* Routes  */}
      <Route exact path="/" component={Home} />
      <Route path="/betting" component={Betting} />
      <Route path="/power-rankings" component={PowerRankings} />
      <Route path="/game-analysis" component={GameAnalysis} />
      <Route path="/rumors" component={Rumors} />
      <Route path="/mens-ncaa" component={College} />
      <Route path="/nba-mock-draft" component={NBADraft} />

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
    </div>
  );
}

export default App;
