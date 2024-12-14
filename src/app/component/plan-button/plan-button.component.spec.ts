import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanButtonComponent } from './plan-button.component';

describe('PlanButtonComponent', () => {
  let component: PlanButtonComponent;
  let fixture: ComponentFixture<PlanButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanButtonComponent]
    });
    fixture = TestBed.createComponent(PlanButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
