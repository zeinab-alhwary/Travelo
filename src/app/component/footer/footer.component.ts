import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentDate: Date = new Date();
linkesName=[{
  title:'About',
  eleOne:'Services',
  eleTwo:'Help',
  eleThree:'FAQ',
},{
  title:'Resources',
  eleOne:'Blog',
  eleTwo:'Newsletter',
  eleThree:'Events',
}]
}
