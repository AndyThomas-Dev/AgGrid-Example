import { Component, OnInit, ViewChild } from '@angular/core';

// Import http client
import { HttpClient } from "@angular/common/http";

import { AgGridAngular } from "ag-grid-angular";

// Dev tools
import 'ag-grid-enterprise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;

  title = 'my-app';

  // Adding sortable makes columns... sortable
  // Remember camelCase!
  columnDefs = [
    { headerName: "Make", field: "make", sortable: true, filter: true, checkboxSelection: true },
    { headerName: "Model", field: "model", sortable: true, filter: true },
    { headerName: "Price", field: "price", sortable: true, filter: true }    
  ];

  rowData: any;

  constructor(private http: HttpClient) {

  }

    // Hardcoded data for testing
    // temp  = [
    //   { make: "Toyota", model: "Celica", price: 35000 },
    //   { make: "Ford", model: "Mondeo", price: 35000 },
    //   { make: "Porsche", model: "Boxster", price: 35000 }
    // ];

  // Do this when initliased
  ngOnInit() {
    // Uploaded JSON on my website
    // Using cors-anywhere to bypass cors issues
    this.rowData = this.http.get("https://cors-anywhere.herokuapp.com/http://andythomas-dev.com/downloads/temp.json");
  }

  // Get selected rows and output as an alert
  getSelectedRows() {
    console.log("Button pressed");

    const selectedNodes = this.agGrid.api.getSelectedNodes();

    // Get data from nodes
    const selectedData = selectedNodes.map(node => node.data);

    const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(", ");

    alert(`Selected Nodes: ${selectedDataStringPresentation}`);
  }


}