import { Component, OnInit } from '@angular/core';
import { tournamentTest, tournmaentMatchPlayerTest, tournmaentRulesTest } from 'src/app/_common/globle';
import { TournamentService } from 'src/app/_services/tournament.service';

@Component({
  selector: 'app-manage-results',
  templateUrl: './manage-results.component.html',
  styleUrls: ['./manage-results.component.css']
})
export class ManageResultsComponent implements OnInit {

  tournamnetsGroup = tournamentTest;
  tournamentRules = [tournmaentRulesTest, tournmaentRulesTest, tournmaentRulesTest, tournmaentRulesTest];
  tournament: any;

  constructor(private tournamentSrv: TournamentService) {
    this.tournamentSrv.checkTournament();
    this.tournament = this.tournamentSrv.tournaments;

  }

  ngOnInit(): void {

  }

}
