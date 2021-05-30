import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMathesComponent } from './manage-mathes.component';

describe('ManageMathesComponent', () => {
  let component: ManageMathesComponent;
  let fixture: ComponentFixture<ManageMathesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageMathesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMathesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
