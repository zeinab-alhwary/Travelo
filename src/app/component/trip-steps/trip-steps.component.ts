import { Component } from '@angular/core';

@Component({
  selector: 'app-trip-steps',
  templateUrl: './trip-steps.component.html',
  styleUrls: ['./trip-steps.component.scss']
})
export class TripStepsComponent {
cards=[{image:'../../../assets/images/first-card-image.png',
  title:'Plan your travel budget never more easy!',
  text:'Budget is an important factor that helps you to choose where to travel. Now we Made it easier for people to plan their vacations with a limited budget by suggesting places like hotels and restaurants that suit everyone budget.',
},
{
  image:'../../../assets/images/second-card-image.png',
  title:'Explore and discover new destinations',
  text:'There are so many places to explore and discover, and each one has its own unique charm. Whether you’re looking for a relaxing beach vacation, an adventurous trek through the mountains, or a cultural experience in a bustling city, there’s a destination out there that’s perfect for you!',
},
{
  image:'../../../assets/images/third-card-image.png',
  title:'Traveling experts help you live the best adventure!',
  text:'Whether you’re looking for a relaxing beach vacation or an adrenaline- pumping safari, we can help you find the perfect destination and activities. Our experts can also help you with everything from booking flights and hotels to arranging visas and insurance.',
}
]
}
