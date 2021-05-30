import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'wizerd-checkbox',
  templateUrl: './wizerd-checkbox.component.html',
  styleUrls: ['./wizerd-checkbox.component.css']
})
export class WizerdCheckboxComponent implements OnInit {
  @Input() _choice: boolean;
  @Input() title: string;
  @Input() color: string;
  @Input() icon: string;
  @Output() value = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

}
