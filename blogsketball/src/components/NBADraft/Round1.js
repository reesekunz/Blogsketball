import React, { Component } from "react";
import "./NBADraft.scss";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class AGGrid extends Component {
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
          headerName: "School",
          field: "school"
        },
        {
          headerName: "P",
          field: "position"
        },
        {
          headerName: "H",
          field: "height"
        },
        {
          headerName: "W",
          field: "weight"
        },

        {
          headerName: "Yr",
          field: "year"
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
          team: "Atlanta",
          player: "Anthony Edwards",
          school: "Georgia",
          position: "SG",
          height: "6-5",
          weight: "225",
          year: "Fr."
        },
        {
          number: 3,
          team: "New York",
          player: "LaMelo Ball",
          school: "USA",
          position: "PG",
          height: "6-8",
          weight: "180",
          year: "Intl."
        },
        {
          number: 4,
          team: "Cleveland",
          player: "Obi Toppin",
          school: "Dayton",
          position: "SF/PF",
          height: "6-9",
          weight: "220",
          year: "So."
        },
        {
          number: 5,
          team: "Minnesota",
          player: "Cole Anthony",
          school: "North Carolina",
          position: "PG",
          height: "6-2",
          weight: "185",
          year: "Fr."
        },
        {
          number: 6,
          team: "Charlotte",
          player: "Tyrese Haliburton",
          school: "Iowa State",
          position: "PG",
          height: "6-5",
          weight: "185",
          year: "So."
        },
        {
          number: 7,
          team: "Detroit",
          player: "Jaden McDaniels",
          school: "Washington",
          position: "SF/PF",
          height: "6-10",
          weight: "185",
          year: "Fr."
        },
        {
          number: 8,
          team: "Washington",
          player: "Nico Mannion",
          school: "Arizona",
          position: "PG",
          height: "6-3",
          weight: "190",
          year: "Fr."
        },
        {
          number: 9,
          team: "Chicago",
          player: "Tyrese Maxey",
          school: "Kentucky",
          position: "SG",
          height: "6-2",
          weight: "190",
          year: "Fr."
        },
        {
          number: 10,
          team: "Sacramento",
          player: "Deni Avdija",
          school: "Israel",
          position: "SF",
          height: "6-8",
          weight: "210",
          year: "Intl."
        },
        {
          number: 11,
          team: "New Orleans",
          player: "RJ Hampton",
          school: "USA",
          position: "PG/Sg",
          height: "6-4",
          weight: "175",
          year: "Intl."
        },
        {
          number: 12,
          team: "Phoenix",
          player: "Killian Hayes",
          school: "France",
          position: "PF/C",
          height: "6-5",
          weight: "176",
          year: "Intl."
        },
        {
          number: 13,
          team: "San Antonio",
          player: "Vernon Carey",
          school: "Duke",
          position: "PF/C",
          height: "6-10",
          weight: "265",
          year: "Fr."
        },
        {
          number: 14,
          team: "Portland",
          player: "Precious Achiuwa",
          school: "Memphis",
          position: "SF/PF",
          height: "6-9",
          weight: "225",
          year: "Fr."
        },
        {
          number: 15,
          team: "Orlando",
          player: "Isaac Okoro",
          school: "Auburn",
          position: "SF",
          height: "6-6",
          weight: "215",
          year: "Fr."
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
          player: "Josh Green",
          school: "Arizona",
          position: "SG",
          height: "6-5",
          weight: "200",
          year: "Fr."
        },
        {
          number: 18,
          team: "Oklahoma City",
          player: "Isaiah Stewart",
          school: "Washington",
          position: "PF/C",
          height: "6-9",
          weight: "245",
          year: "Fr."
        },
        {
          number: 19,
          team: "Dallas",
          player: "Theo Maledon",
          school: "France",
          position: "PG",
          height: "6-5",
          weight: "175",
          year: "Intl."
        },
        {
          number: 20,
          team: "Philadelphia",
          player: "Zeke Nnaji",
          school: "Arizona",
          position: "PF/C",
          height: "6-11",
          weight: "240",
          year: "Fr."
        },
        {
          number: 21,
          team: "Houston",
          player: "Aaron Nesmith",
          school: "Vanderbilt",
          position: "SG/SF",
          height: "6-6",
          weight: "215",
          year: "So."
        },
        {
          number: 22,
          team: "Indiana",
          player: "Jahmi’us Ramsey",
          school: "Texas Tech",
          position: "SG/SF",
          height: "6-4",
          weight: "195",
          year: "Fr."
        },
        {
          number: 23,
          team: "Utah",
          player: "Ashton Hagans",
          school: "Kentucky",
          position: "PG",
          height: "6-3",
          weight: "190",
          year: "So."
        },
        {
          number: 24,
          team: "Denver",
          player: "Jalen Smith",
          school: "Maryland",
          position: "PF",
          height: "6-10",
          weight: "215",
          year: "So."
        },
        {
          number: 25,
          team: "Miami",
          player: "Paul Reed",
          school: "DePaul",
          position: "PF",
          height: "6-9",
          weight: "210",
          year: "Jr."
        },
        {
          number: 26,
          team: "Boston",
          player: "Udoka Azubuike",
          school: "Kansas",
          position: "C",
          height: "6-11",
          weight: "280",
          year: "Sr."
        },
        {
          number: 27,
          team: "LA Clippers",
          player: "Reggie Perry",
          school: "Mississippi St.",
          position: "PF",
          height: "6-9",
          weight: "250",
          year: "So."
        },
        {
          number: 28,
          team: "Toronto",
          player: "Tre Jones",
          school: "Duke",
          position: "PG",
          height: "6-2",
          weight: "185",
          year: "So."
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
          player: "Devin Vassell",
          school: "Florida St.",
          position: "SG",
          height: "6-7",
          weight: "195",
          year: "So."
        }
      ]
    };
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: "400px",
          width: "1500px",
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

export default AGGrid;
