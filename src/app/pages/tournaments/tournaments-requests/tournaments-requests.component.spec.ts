import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsRequestsComponent } from './tournaments-requests.component';

describe('TournamentsRequestsComponent', () => {
  let component: TournamentsRequestsComponent;
  let fixture: ComponentFixture<TournamentsRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentsRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
