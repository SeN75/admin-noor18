import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizerdCheckboxComponent } from './wizerd-checkbox.component';

describe('WizerdCheckboxComponent', () => {
  let component: WizerdCheckboxComponent;
  let fixture: ComponentFixture<WizerdCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizerdCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizerdCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
