import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidetCardComponent } from './widet-card.component';

describe('WidetCardComponent', () => {
  let component: WidetCardComponent;
  let fixture: ComponentFixture<WidetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidetCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
