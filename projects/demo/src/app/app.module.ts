import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgbContextMenuModule} from "../../../ngb-context-menu";
import {NgbDropdownModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    NgbContextMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
