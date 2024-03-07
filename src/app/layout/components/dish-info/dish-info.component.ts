import { Component, Input } from '@angular/core';
import { Dish } from '../../../models/dish';

@Component({
  selector: 'dish-info',
  templateUrl: './dish-info.component.html',
  styleUrl: './dish-info.component.scss'
})

export class DishInfoComponent {
  @Input() dish!: Dish;
  @Input() restaurantKey!: string;
}
