import { NgModule } from '@angular/core';
import {ContextMenuComponent} from "./components/context-menu/context-menu.component";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {ContextMenuDirective} from "./directives/context-menu.directive";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ContextMenuComponent,
    ContextMenuDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbDropdownModule
  ],
  exports: [
    ContextMenuComponent,
    ContextMenuDirective
  ]
})
export class NgbContextMenuModule { }
