import { Component, OnInit } from '@angular/core';
import { tournamentTest } from 'src/app/_common/globle';
import { TournamentService } from 'src/app/_services/tournament.service';

@Component({
  selector: 'app-manage-tournament-results',
  templateUrl: './manage-tournament-results.component.html',
  styleUrls: ['./manage-tournament-results.component.css']
})
export class ManageTournamentResultsComponent implements OnInit {
  tournamnetsGroup = tournamentTest;
  tournament: any;
  tournamentGroups = [
    this.tournamnetsGroup,
    this.tournamnetsGroup,
    this.tournamnetsGroup,
    this.tournamnetsGroup,
    this.tournamnetsGroup,
  ]
  constructor(private tournamentSrv: TournamentService) {
    this.tournamentSrv.checkTournament();
    this.tournament = this.tournamentSrv.tournaments;

  }

  ngOnInit(): void {
  }

}
