import React, { Component } from "react";
import "./Betting.scss";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class AGGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: "Date",
          field: "date"
        },
        {
          headerName: "Matchup",
          field: "matchup"
        },
        {
          headerName: "Result",
          field: "result"
        },
        {
          headerName: "Record",
          field: "record"
        }
      ],
      rowData: [
        {
          date: "02/07/20",
          matchup: "TBD",
          result: "TBD",
          record: "TBD"
        },
        {
          date: "02/06/20",
          matchup: "Pelicans -5 @ Bulls",
          result: "TBD",
          record: "TBD"
        },
        {
          date: "02/05/20",
          matchup: "Suns -3 @ Pistons",
          result: "Loss",
          record: "0-1"
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
          width: "750px",
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
