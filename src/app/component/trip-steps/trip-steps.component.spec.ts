import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripStepsComponent } from './trip-steps.component';

describe('TripStepsComponent', () => {
  let component: TripStepsComponent;
  let fixture: ComponentFixture<TripStepsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripStepsComponent]
    });
    fixture = TestBed.createComponent(TripStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
