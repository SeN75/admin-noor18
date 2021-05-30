import { Routes } from "@angular/router";
import { AdminMangementTournamentComponent } from "./admin-mangement-tournament/admin-mangement-tournament.component";
import { CreateTournamentComponent } from "./create-tournament/create-tournament.component";
import { ManageMathesComponent } from "./manage-tournament-results/manage-mathes/manage-mathes.component";
import { ManageResultsComponent } from "./manage-tournament-results/manage-results/manage-results.component";
import { ManageTournamentResultsComponent } from "./manage-tournament-results/manage-tournament-results.component";
import { SponsorshipRequestsComponent } from "./sponsorship-requests/sponsorship-requests.component";
import { TournamentsRequestsComponent } from "./tournaments-requests/tournaments-requests.component";
import { TournamentsComponent } from "./tournaments.component";


export const TournamentsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "current",
        component: TournamentsComponent
      },
      {
        path: "manage-results",
        component: ManageTournamentResultsComponent
      },
      {
        path: "match-groups",
        component: ManageMathesComponent
      },
      {
        path: "match-result",
        component: ManageResultsComponent
      },
      {
        path: "requests",
        component: TournamentsRequestsComponent
      },
      {
        path: "sponsorship",
        component: SponsorshipRequestsComponent
      },
      {
        path: "admin-mangement",
        component: AdminMangementTournamentComponent
      },
      {
        path: "form-tournament",
        component: CreateTournamentComponent
      }
    ]
  }
];
