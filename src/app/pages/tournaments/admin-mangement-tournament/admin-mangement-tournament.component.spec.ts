import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMangementTournamentComponent } from './admin-mangement-tournament.component';

describe('AdminMangementTournamentComponent', () => {
  let component: AdminMangementTournamentComponent;
  let fixture: ComponentFixture<AdminMangementTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMangementTournamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMangementTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
