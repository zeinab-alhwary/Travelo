import { Component, Input } from '@angular/core';
import { PlanButtonComponent } from '../plan-button/plan-button.component';
@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  textButton='Plan a trip';
}
