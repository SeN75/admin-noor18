import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorshipRequestsComponent } from './sponsorship-requests.component';

describe('SponsorshipRequestsComponent', () => {
  let component: SponsorshipRequestsComponent;
  let fixture: ComponentFixture<SponsorshipRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorshipRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorshipRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
