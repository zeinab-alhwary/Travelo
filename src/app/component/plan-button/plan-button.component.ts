import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plan-button',
  templateUrl: './plan-button.component.html',
  styleUrls: ['./plan-button.component.scss']
})
export class PlanButtonComponent {
  @Input() public textInbutton:any;
  
}
