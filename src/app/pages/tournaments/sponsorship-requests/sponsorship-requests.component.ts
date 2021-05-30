import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/app/_services/tournament.service';

@Component({
  selector: 'app-sponsorship-requests',
  templateUrl: './sponsorship-requests.component.html',
  styleUrls: ['./sponsorship-requests.component.css']
})
export class SponsorshipRequestsComponent implements OnInit {

  constructor(public tournamentsSrv: TournamentService) {
    this.tournamentsSrv.getTournament();

  }

  ngOnInit(): void {
  }

}
