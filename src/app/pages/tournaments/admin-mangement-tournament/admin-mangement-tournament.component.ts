import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TournamentService } from 'src/app/_services/tournament.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-mangement-tournament',
  templateUrl: './admin-mangement-tournament.component.html',
  styleUrls: ['./admin-mangement-tournament.component.css']
})
export class AdminMangementTournamentComponent implements OnInit {
  info = { title: 'Tournmaent Name', message: 'tournament', footer: '', icon: 'users_single-02' }
  tounramentsName = {}
  tounramentsDate = {}
  tounramentsNumberOfParticipants = {}
  tounramentsRegSDate = {}
  tounramentsRegEDate = {}
  constructor(public tournamentsSrv: TournamentService, private translate: TranslateService, private datePipe: DatePipe, public router: Router) { }

  ngOnInit(): void {

    if (this.tournamentsSrv.tournaments === undefined)
      this.router.navigateByUrl("/tournaments/current")
    this.translate.get('TOURNAMENTS.name').subscribe(txt => {
      this.tounramentsName = { title: txt, message: this.tournamentsSrv.tournaments.name, icon: '' }
    })
    this.translate.get('TOURNAMENTS.date').subscribe(txt => {
      this.tounramentsDate = { title: txt, message: this.convertDate(this.tournamentsSrv.tournaments.startDate), icon: '' }
    })
    this.translate.get('TOURNAMENTS.start-date').subscribe(txt => {
      this.tounramentsRegSDate = { title: txt, message: this.convertDate(this.tournamentsSrv.tournaments.startRegistrationDate), icon: '' }
    })
    this.translate.get('TOURNAMENTS.end-date').subscribe(txt => {
      this.tounramentsRegEDate = { title: txt, message: this.convertDate(this.tournamentsSrv.tournaments.endRegistrationDate), icon: '' }
    })
    this.translate.get('TOURNAMENTS.number-of-participants').subscribe(txt => {
      this.tounramentsNumberOfParticipants = { title: txt, message: this.tournamentsSrv.tournaments.numberOfParticipants, icon: 'users_single-02' }
    })

  }
  convertDate(date: string) {
    return this.datePipe.transform(date)
  }

  goToForm() {
    this.router.navigateByUrl("/tournaments/form-tournament")
  }
}
