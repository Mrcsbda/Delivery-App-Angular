import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from '../../../models/restaurant';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.scss'
})
export class RestaurantCardComponent {
  @Input()
  restaurantInfo!: Restaurant;

  constructor() { }


}
