import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'widet-card',
  templateUrl: './widet-card.component.html',
  styleUrls: ['./widet-card.component.css']
})
export class WidetCardComponent implements OnInit {
  @Input() info: any;
  @Input() withIcon: boolean = true;
  @Input() withFooter: boolean = true;
  @Input() withBorder: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
