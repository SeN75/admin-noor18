import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";

import { WidgetsComponent } from "./widgets.component";
import { WidgetsRoutes } from "./widgets.routing";
import { WidetCardComponent } from './widet-card/widet-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WidgetsRoutes),
    JwBootstrapSwitchNg2Module,
    FormsModule,
    NgbModule
  ],
  declarations: [WidgetsComponent, WidetCardComponent, WidetCardComponent],
  exports: [WidetCardComponent]
})
export class WidgetsModule { }
