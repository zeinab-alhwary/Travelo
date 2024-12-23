import { Component } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent {
  rateCards = [{
    image: '/Travelo/assets/images/italy-image.png',
    head: 'Rome, Italy',
    description: 'Mixing ancient Roman ruins, renaissance art and contemporary Italian cuisine, Rome is an unmissable destination.',
  },
  {
    image: '/Travelo/assets/images/france.png',
    head: 'Paris, France',
    description: 'France’s capital, is a major European city and a global center for art & culture.'
  },
  {
    image: '/Travelo/assets/images/greece.png',
    head: 'Santorini, Greece',
    description: 'one of the most famous islands in the world. remarkable beauty of an active volcano is priceless!'
  },
  {
    image: '/Travelo/assets/images/thailand.png',
    head: 'Thailand',
    description: 'known for its beautiful beaches, temples, and food. and its people are known for their warm hospitality.'
  }

  ]
}
