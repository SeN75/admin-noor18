import { Component, OnInit } from '@angular/core';
import { tournamentTest, tournmaentGroupTest, tournmaentRulesTest } from 'src/app/_common/globle';
import { TournamentService } from 'src/app/_services/tournament.service';

@Component({
  selector: 'app-tournaments-requests',
  templateUrl: './tournaments-requests.component.html',
  styleUrls: ['./tournaments-requests.component.css']
})
export class TournamentsRequestsComponent implements OnInit {
  tournament = {
    ...tournamentTest,
    tournamentGroups: [
      tournmaentGroupTest,
      tournmaentGroupTest,
      tournmaentGroupTest,
      tournmaentGroupTest,
      tournmaentGroupTest,
    ],
    tournamentRules: [
      tournmaentRulesTest,
      tournmaentRulesTest,
      tournmaentRulesTest,
      tournmaentRulesTest,
    ]
  }

  constructor(public tournamentsSrv: TournamentService) {
    this.tournamentsSrv.getTournament();

  }

  ngOnInit(): void {
  }

}
