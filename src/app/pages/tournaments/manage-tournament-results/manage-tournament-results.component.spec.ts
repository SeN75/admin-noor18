import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTournamentResultsComponent } from './manage-tournament-results.component';

describe('ManageTournamentResultsComponent', () => {
  let component: ManageTournamentResultsComponent;
  let fixture: ComponentFixture<ManageTournamentResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTournamentResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTournamentResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
