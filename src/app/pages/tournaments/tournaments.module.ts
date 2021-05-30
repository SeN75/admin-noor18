import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ChartsModule } from "ng2-charts";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ComponentsModule } from "../../components/components.module";

import { TournamentsRoutes } from "./tournaments.routing";
import { TournamentsComponent } from "./tournaments.component";
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ManageTournamentResultsComponent } from './manage-tournament-results/manage-tournament-results.component';
import { ManageMathesComponent } from './manage-tournament-results/manage-mathes/manage-mathes.component';
import { ManageResultsComponent } from './manage-tournament-results/manage-results/manage-results.component';
import { TournamentsRequestsComponent } from './tournaments-requests/tournaments-requests.component';
import { SponsorshipRequestsComponent } from './sponsorship-requests/sponsorship-requests.component';
import { AdminMangementTournamentComponent } from './admin-mangement-tournament/admin-mangement-tournament.component';
import { WidgetsModule } from "../widgets/widgets.module";
import { CreateTournamentComponent } from './create-tournament/create-tournament.component';
import { ArchwizardModule } from "angular-archwizard";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { AngularMultiSelectModule } from "angular2-multiselect-dropdown";
import { ComponentsPageModule } from "../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(TournamentsRoutes),
    ComponentsModule,
    ComponentsPageModule,
    TranslateModule,
    AngularMultiSelectModule,
    WidgetsModule,
    ChartsModule,
    ArchwizardModule,
    JwBootstrapSwitchNg2Module,
  ],
  declarations: [TournamentsComponent, ManageTournamentResultsComponent, ManageMathesComponent, ManageResultsComponent, TournamentsRequestsComponent, SponsorshipRequestsComponent, AdminMangementTournamentComponent, CreateTournamentComponent],
  exports: [TournamentsComponent]
})
export class TournamentsModule { }
