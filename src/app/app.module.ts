import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxSpinnerModule} from 'ngx-spinner';
import {ToastrModule} from 'ngx-toastr';
import {AgGridModule} from "ag-grid-angular";
import {AppComponent} from '@app/app.component';
import {AppRoutingModule} from '@app/app.routing.module';
import {SharedModule} from '@shared/shared.module';
import {SpreadsheetComponent} from "@modules/spreadsheet/spreadsheet.component";

@NgModule({
  declarations: [
    AppComponent,
    SpreadsheetComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    AgGridModule.withComponents([]),
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
