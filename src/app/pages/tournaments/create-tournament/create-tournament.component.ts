import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Tournament } from 'src/app/_common/types';
import { TournamentService } from 'src/app/_services/tournament.service';

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.css']
})
export class CreateTournamentComponent implements OnInit {
  games = [
    { icon: 'tech_tv', title: 'game', selected: false },
    { icon: 'tech_tv', title: 'game', selected: false },
    { icon: 'tech_tv', title: 'game', selected: false },
  ]
  platForms = [
    { icon: 'tech_tv', title: 'Pc', selected: false, color: 'primary' },
    { icon: 'tech_controller-modern', title: 'Ps4, Ps5', selected: false, color: 'info' },
    { icon: 'tech_headphones', title: 'XBox', selected: false, color: 'success' },
    { icon: 'tech_mobile', title: 'Mobile', selected: false, color: 'default' },
    { icon: 'tech_watch-time', title: 'Switch', selected: false, color: 'danger' },
  ]
  inputs = [
    { focus: false, focusTouched: false, name: 'TOURNAMENTS.name', controlName: 'name', grid: 'col' },
    { focus: false, focusTouched: false, name: 'TOURNAMENTS.number-of-participants', controlName: 'numberOfParticipants', grid: 'col' },
  ]
  createForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    numberOfParticipants: ['', Validators.required],
    gameId: ['1', Validators.required],

  })
  createForm2: FormGroup = this.formBuilder.group({
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    logo: ['', Validators.required],
    prize: ['', Validators.required],
    rule: ['', Validators.required],
    descriptioon: ['', Validators.required],

  })
  public model: NgbDateStruct;

  isNew = true;

  public cardWizard: any;

  public dropdownList1 = [];
  public selectedItems1 = [];
  public dropdownSettings1 = {};

  public width: any = 100 / 3 + "%";
  public movingTabStyle = { width: "0px", transform: "translate3d(0px, 0px, 0px)" };
  public movingTabHTML = `<i class="now-ui-icons users_circle-08"></i> About`;
  public currentIndex = 0;
  public isValid = false;
  public enters = 0;

  public step1Form: FormGroup;

  @ViewChild("myWizard") myWizard: any;
  @ViewChild("input") input: any;

  constructor(private formBuilder: FormBuilder, private cdref: ChangeDetectorRef, private tournamentsSrv: TournamentService) { }

  ngOnInit() {

    if (this.tournamentsSrv.tournaments !== undefined) {
      this.isNew = false;
      this.createForm.get('name').setValue(this.tournamentsSrv.tournaments.name);
      this.createForm.get('numberOfParticipants').setValue(this.tournamentsSrv.tournaments.numberOfParticipants);
      this.createForm.get('gameId').setValue(this.tournamentsSrv.tournaments.gameId);
      this.createForm2.get('startDate').setValue((this.getDate(this.tournamentsSrv.tournaments.startDate)));
      this.createForm2.get('endDate').setValue((this.getDate(this.tournamentsSrv.tournaments.endDate)));
      this.createForm2.get('logo').setValue(this.tournamentsSrv.tournaments.logo);
      this.createForm2.get('prize').setValue(this.tournamentsSrv.tournaments.prizes);
      this.createForm2.get('descriptioon').setValue(this.tournamentsSrv.tournaments.description);
      this.createForm2.get('rule').setValue(this.tournamentsSrv.tournaments.rule);

      console.log(this.createForm.value);
      console.log(this.createForm2.value);
      console.log(this.getDate(this.tournamentsSrv.tournaments.endDate));
    }
    this.movingTabStyle.width = (this.myWizard - 30) / 3 + "px";

  }
  getDate(date: string) {
    let _date = new Date(date);
    return { year: _date.getFullYear(), month: _date.getMonth() + 1, day: _date.getDate() }
  }
  fillObjToSend() {

    let endDate = new Date(this.createForm2.get('endDate').value.year + "-" + (this.createForm2.get('endDate').value.month) + "-" + this.createForm2.get('endDate').value.day)
    let startDate = new Date(this.createForm2.get('startDate').value.year + "-" + (this.createForm2.get('startDate').value.month) + "-" + this.createForm2.get('endDate').value.day)
    const _Tournament: Tournament = {
      ...this.tournamentsSrv.tournaments,
      name: this.createForm.get('name').value,
      description: this.createForm2.get('descriptioon').value,
      gameId: 1,
      endDate: endDate.toUTCString(),
      startDate: startDate.toUTCString(),
      logo: this.createForm2.get('logo').value,
      isTeam: false,
      endRegistrationDate: endDate.toUTCString(),
      startRegistrationDate: startDate.toUTCString(),
      manuallyParticipantAccreditation: false,
      numberOfParticipants: this.createForm.get('numberOfParticipants').value,
      prizes: this.createForm2.get('prize').value,
      timeZone: startDate.toTimeString(),
      registrationBasedOnDates: false,
      rule: this.createForm2.get('rule').value,
    }
    return _Tournament
  }
  gameSelect(newValue: any, index: number) {
    console.log(newValue)
    this.games[index] = newValue;
  }
  palatformSelect(newValue: any, index: number) {
    console.log(newValue)
    this.platForms[index] = newValue;
  }


  formTournament() {
    const _tournament = this.fillObjToSend()
    if (this.isNew)
      this.tournamentsSrv.postTournament(_tournament);
    else
      this.tournamentsSrv.updateTournament(_tournament, _tournament.id)
  }
  get step1() {
    return this.createForm.controls;
  }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems1);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems1);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }

  ngAfterViewInit() {
    this.cardWizard = document.getElementsByClassName("card-wizard")[0];
    this.cardWizard.classList.add("active");
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  updateWidth() {
    console.log('hey')

  }

  ngOnDestroy() {
    window.removeEventListener("resize", this.updateWidth);
    this.cardWizard.classList.remove("active");
  }
  validateFirst(index) {
    console.log(this.createForm);
    console.log(this.createForm2);
    if (this.enters > 0) {
      this.isValid = true;
    }
    this.enters++;
    if (this.step1Form.invalid) {
      return;
    }
    this.refreshAnimation(index);
  }
  refreshAnimation(index) {
    this.currentIndex = index;
    switch (index) {
      case 0: {
        this.movingTabHTML = `<i class="now-ui-icons users_circle-08"></i> About`;
        break;
      }
      case 1: {
        this.movingTabHTML = `<i class="now-ui-icons ui-1_settings-gear-63"></i>Account`;
        break;
      }
      case 2: {
        this.movingTabHTML = `<i class="now-ui-icons ui-1_email-85"></i>Address`;
        break;
      }
      default: {
        //statements;
        break;
      }
    }
    let total = 3;
    let li_width = 100 / total;

    let total_steps = 3;
    let move_distance =
      (this.myWizard.nativeElement.clientWidth - 30) / total_steps;
    let index_temp = index;
    let vertical_level = 0;

    let mobile_device = window.innerWidth < 600 && total > 3;

    if (mobile_device) {
      move_distance = (this.myWizard.nativeElement.clientWidth - 30) / 2;
      index_temp = index % 2;
      li_width = 50;
    }

    let step_width: any = move_distance + "px";

    move_distance = move_distance * index_temp;

    if (mobile_device) {
      vertical_level = parseInt(index) / 2;
      vertical_level = vertical_level * 38;
    }
    this.movingTabStyle = {
      width: step_width,
      transform:
        "translate3d(" + move_distance + "px, " + vertical_level + "px, 0)"
    };
  }

}


