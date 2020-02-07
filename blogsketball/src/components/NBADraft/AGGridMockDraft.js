import React, { Component } from "react";
import "./NBADraft.scss";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class MockDraft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: "#",
          field: "number"
        },
        {
          headerName: "Team",
          field: "team"
        },
        {
          headerName: "Player",
          field: "player"
        },
        {
          headerName: "Position",
          field: "position"
        },
        {
          headerName: "School",
          field: "school"
        },
        {
          headerName: "Year",
          field: "year"
        },

        {
          headerName: "Height",
          field: "height"
        },
        {
          headerName: "Weight",
          field: "weight"
        }
      ],
      rowData: [
        {
          number: 1,
          team: "Golden State",
          player: "James Wiseman",
          school: "Memphis",
          position: "C",
          height: "7-1",
          weight: "235",
          year: "Fr."
        },
        {
          number: 2,
          team: "Cleveland",
          player: "Anthony Edwards",
          school: "Georgia",
          position: "SG",
          height: "6-5",
          weight: "225",
          year: "Fr."
        },
        {
          number: 3,
          team: "Atlanta",
          player: "LaMelo Ball",
          school: "USA",
          position: "PG",
          height: "6-8",
          weight: "180",
          year: "Intl."
        },
        {
          number: 4,
          team: "New York",
          player: "Cole Anthony",
          school: "North Carolina",
          position: "PG",
          height: "6-2",
          weight: "185",
          year: "Fr."
        },
        {
          number: 5,
          team: "Minnesota",
          player: "Obi Toppin",
          school: "Dayton",
          position: "SF/PF",
          height: "6-9",
          weight: "220",
          year: "So."
        },

        {
          number: 6,
          team: "Charlotte",
          player: "Tyrese Haliburton",
          school: "Iowa State",
          position: "PG/SG",
          height: "6-5",
          weight: "185",
          year: "So."
        },
        {
          number: 7,
          team: "Detroit",
          player: "Killian Hayes",
          school: "France",
          position: "PG/SG",
          height: "6-5",
          weight: "176",
          year: "Intl."
        },
        {
          number: 8,
          team: "Chicago",
          player: "Tyrese Maxey",
          school: "Kentucky",
          position: "SG",
          height: "6-2",
          weight: "190",
          year: "Fr."
        },
        {
          number: 9,
          team: "Washington",
          player: "Nico Mannion",
          school: "Arizona",
          position: "PG",
          height: "6-3",
          weight: "190",
          year: "Fr."
        },
        {
          number: 10,
          team: "Sacramento",
          player: "Jaden McDaniels",
          school: "Washington",
          position: "SF/PF",
          height: "6-10",
          weight: "185",
          year: "Fr."
        },
        {
          number: 11,
          team: "New Orleans",
          player: "Deni Avdija",
          school: "Israel",
          position: "SF",
          height: "6-8",
          weight: "210",
          year: "Intl."
        },
        {
          number: 12,
          team: "Phoenix",
          player: "RJ Hampton",
          school: "USA",
          position: "PG/SG",
          height: "6-4",
          weight: "175",
          year: "Intl."
        },
        {
          number: 13,
          team: "Orlando",
          player: "Josh Green",
          school: "Arizona",
          position: "SG",
          height: "6-5",
          weight: "200",
          year: "Fr."
        },
        {
          number: 14,
          team: "San Antonio",
          player: "Vernon Carey",
          school: "Duke",
          position: "PF/C",
          height: "6-10",
          weight: "265",
          year: "Fr."
        },
        {
          number: 15,
          team: "Portland",
          player: "Theo Maledon",
          school: "France",
          position: "PG",
          height: "6-5",
          weight: "175",
          year: "Intl."
        },
        {
          number: 16,
          team: "Brooklyn",
          player: "Onyeka Okongwu",
          school: "USC",
          position: "PF/C",
          height: "6-9",
          weight: "220",
          year: "Fr."
        },
        {
          number: 17,
          team: "Memphis",
          player: "Precious Achiuwa",
          school: "Memphis",
          position: "SF/PF",
          height: "6-9",
          weight: "225",
          year: "Fr."
        },
        {
          number: 18,
          team: "Indiana",
          player: "Isaac Okoro",
          school: "Auburn",
          position: "SF",
          height: "6-6",
          weight: "215",
          year: "Fr."
        },
        {
          number: 19,
          team: "Philadelphpia",
          player: "Isaiah Joe",
          school: "Arkansas",
          position: "SG",
          height: "6-5",
          weight: "180",
          year: "So."
        },
        {
          number: 20,
          team: "Oklahoma City",
          player: "Isaiah Stewart",
          school: "Washington",
          position: "PF/C",
          height: "6-9",
          weight: "245",
          year: "Fr."
        },
        {
          number: 21,
          team: "Dallas",
          player: "Ashton Hagans",
          school: "Kentucky",
          position: "PG",
          height: "6-3",
          weight: "190",
          year: "So."
        },
        {
          number: 22,
          team: "Houston",
          player: "Zeke Nnaji",
          school: "Arizona",
          position: "PF/C",
          height: "6-11",
          weight: "240",
          year: "Fr."
        },
        {
          number: 23,
          team: "Utah",
          player: "Daniel Oturu",
          school: "Minnesota",
          position: "C",
          height: "6-10",
          weight: "240",
          year: "So."
        },
        {
          number: 24,
          team: "Miami",
          player: "Paul Reed",
          school: "DePaul",
          position: "PF",
          height: "6-9",
          weight: "210",
          year: "Jr."
        },
        {
          number: 25,
          team: "Denver",
          player: "Jordan Nwora",
          school: "Louisville",
          position: "SF",
          height: "6-7",
          weight: "220",
          year: "Jr."
        },
        {
          number: 26,
          team: "Boston",
          player: "Matthew Hurt",
          school: "Duke",
          position: "PF",
          height: "6-9",
          weight: "215",
          year: "Fr."
        },
        {
          number: 27,
          team: "LA Clippers",
          player: "Jalen Smith",
          school: "Maryland",
          position: "PF",
          height: "6-10",
          weight: "215",
          year: "So."
        },
        {
          number: 28,
          team: "Toronto",
          player: "Jahmi’us Ramsey",
          school: "Texas Tech",
          position: "SG/SF",
          height: "6-4",
          weight: "195",
          year: "Fr."
        },
        {
          number: 29,
          team: "LA Lakers",
          player: "Devon Dotson",
          school: "Kansas",
          position: "PG",
          height: "6-1",
          weight: "180",
          year: "So."
        },
        {
          number: 30,
          team: "Milwaukee",
          player: "Reggie Perry",
          school: "Mississippi St.",
          position: "PF",
          height: "6-9",
          weight: "250",
          year: "So."
        },
        // Round 2
        {
          number: 31,
          team: "Golden State",
          player: "Tre Jones",
          school: "Duke",
          position: "PG",
          height: "6-2",
          weight: "185",
          year: "So."
        },
        {
          number: 32,
          team: "Atlanta",
          player: "Devin Vassell",
          school: "Florida St.",
          position: "SG",
          height: "6-7",
          weight: "195",
          year: "So."
        },
        {
          number: 33,
          team: "New York",
          player: "CJ Elleby",
          school: "Washington State",
          position: "SF",
          height: "6-6",
          weight: "185",
          year: "So."
        },
        {
          number: 34,
          team: "Cleveland",
          player: "Nick Richards",
          school: "Kentucky",
          position: "C",
          height: "6-11",
          weight: "245",
          year: "Jr."
        },
        {
          number: 35,
          team: "Minnesota",
          player: "Ochai Agbaji",
          school: "Kansas",
          position: "SG",
          height: "6-5",
          weight: "210",
          year: "So."
        },
        {
          number: 36,
          team: "Charlotte",
          player: "Landers Nolley",
          school: "Virginia Tech",
          position: "SG",
          height: "6-7",
          weight: "230",
          year: "So."
        },
        {
          number: 37,
          team: "Detroit",
          player: "Cassius Stanley",
          school: "Duke",
          position: "SG",
          height: "6-5",
          weight: "190",
          year: "Fr."
        },
        {
          number: 38,
          team: "Washington",
          player: "Austin Wiley",
          school: "Auburn",
          position: "C",
          height: "6-10",
          weight: "260",
          year: "Sr."
        },
        {
          number: 39,
          team: "Chicago",
          player: "Saddiq Bey",
          school: "Villanova",
          position: "SF",
          height: "6-8",
          weight: "215",
          year: "So."
        },
        {
          number: 40,
          team: "Sacramento",
          player: "Tyler Bey",
          school: "Colorado",
          position: "SF/PF",
          height: "6-7",
          weight: "215",
          year: "Jr."
        },
        {
          number: 41,
          team: "New Orleans",
          player: "Aaron Nesmith",
          school: "Vanderbilt",
          position: "SG/SF",
          height: "6-6",
          weight: "215",
          year: "So."
        },
        {
          number: 42,
          team: "Phoenix",
          player: "Chris Smith",
          school: "UCLA",
          position: "SF/PF",
          height: "6-8",
          weight: "205",
          year: "Jr."
        },
        {
          number: 43,
          team: "San Antonio",
          player: "Cassius Winston",
          school: "Michigan St.",
          position: "PG",
          height: "6-1",
          weight: "185",
          year: "Sr."
        },
        {
          number: 44,
          team: "Portland",

          player: "Mamadi Diakite",
          school: "Virginia",
          position: "PF",
          height: "6-9",
          weight: "230",
          year: "Sr."
        },
        {
          number: 45,
          team: "Orlando",
          player: "Derrick Alston Jr.",
          school: "Boise State",
          position: "SG/SF",
          height: "6-9",
          weight: "190",
          year: "Jr."
        },
        {
          number: 46,
          team: "Brooklyn",
          player: "Mustapha Heron",
          school: "St. Johns",
          position: "SG",
          height: "6-5",
          weight: "220",
          year: "Sr."
        },
        {
          number: 47,
          team: "Memphis",
          player: "Elijah Hughest",
          school: "Syracuse",
          position: "SG",
          height: "6-6",
          weight: "215",
          year: "Jr."
        },
        {
          number: 48,
          team: "Oklahoma City",
          player: "Desmond Bane",
          school: "TCU",
          position: "SG",
          height: "6-5",
          weight: "220",
          year: "Sr."
        },
        {
          number: 49,
          team: "Dallas",
          player: "Udoka Azubuike",
          school: "Kansas",
          position: "C",
          height: "6-11",
          weight: "280",
          year: "Sr."
        },
        {
          number: 50,
          team: "Philadelphia",
          player: "Kira Lewis Jr.",
          school: "Alabama",
          position: "PG",
          height: "6-3",
          weight: "165",
          year: "So."
        },
        {
          number: 51,
          team: "Houston",
          player: "Paul Eboua",
          school: "Italy",
          position: "SF",
          height: "6-7",
          weight: "210",
          year: "Intl."
        },
        {
          number: 52,
          team: "Indiana",
          player: "Payton Pritchard",
          school: "Oregon",
          position: "PG",
          height: "6-2",
          weight: "190",
          year: "Sr."
        },
        {
          number: 53,
          team: "Utah",
          player: "Markus Howard",
          school: "Marquette",
          position: "PG",
          height: "5-11",
          weight: "175",
          year: "Sr."
        },
        {
          number: 54,
          team: "Denver",

          player: "Steven Enoch",
          school: "Louisville",
          position: "C",
          height: "6-10",
          weight: "250",
          year: "Sr."
        },
        {
          number: 55,
          team: "Miami",
          player: "Lamar Stevens",
          school: "Penn State",
          position: "SF/PF",
          height: "6-7",
          weight: "230",
          year: "Sr."
        },
        {
          number: 56,
          team: "Boston",
          player: "Malachi Flynn",
          school: "San Diego St.",
          position: "PG",
          height: "6-2",
          weight: "175",
          year: "Jr."
        },
        {
          number: 57,
          team: "LA Clippers",
          player: "Omer Yurtseven",
          school: "Georgetown",
          position: "C",
          height: "7-0",
          weight: "275",
          year: "Jr."
        },
        {
          number: 58,
          team: "Toronto",
          player: "N'Faly Dante",
          school: "Oregon",
          position: "C",
          height: "6-11",
          weight: "230",
          year: "Fr."
        },
        {
          number: 59,
          team: "LA Lakers",
          player: "Killian Tillie",
          school: "Gonzaga",
          position: "SF/PF",
          height: "6-10",
          weight: "220",
          year: "Sr."
        },
        {
          number: 60,
          team: "Milwaukee",
          player: "Arturs Zagars",
          school: "Latvia",
          position: "PG",
          height: "6-3",
          weight: "170",
          year: "Intl."
        }
      ]
    };
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: "1000px",
          width: "1200px",
          border: "1px solid black"
        }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
        ></AgGridReact>
      </div>
    );
  }
}
export default MockDraft;
