import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Import AgGridModule
import { AgGridModule } from 'ag-grid-angular';

// Import Http Component
import { HttpClientModule } from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // Import AgGridModule here
    AgGridModule.withComponents()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
