import { Component, Input } from '@angular/core';
import { Restaurant } from '../../../models/restaurant';

@Component({
  selector: 'restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.scss'
})
export class RestaurantCardComponent {
  @Input()
  restaurantInfo!: Restaurant;
}
