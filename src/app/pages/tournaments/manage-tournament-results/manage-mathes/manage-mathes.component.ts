import { Component, OnInit } from '@angular/core';
import { tournamentTest } from 'src/app/_common/globle';
import { TournamentService } from 'src/app/_services/tournament.service';

@Component({
  selector: 'app-manage-mathes',
  templateUrl: './manage-mathes.component.html',
  styleUrls: ['./manage-mathes.component.css']
})
export class ManageMathesComponent implements OnInit {
  tournamnetsGroup = tournamentTest;
  tournament;
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
