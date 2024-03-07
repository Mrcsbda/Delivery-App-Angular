import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DishesService } from '../../../../services/dishes.service';
import { take } from 'rxjs';
import { Dish } from '../../../../models/dish';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.scss'
})
export class DishComponent implements OnInit {
  restaurantId!: string;
  dishId!: string;
  dish!: Dish;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dishesService: DishesService
  ) {
    this.restaurantId = this.activatedRoute.snapshot.paramMap.get('restaurantId') as string;
    this.dishId = this.activatedRoute.snapshot.paramMap.get('dishId') as string;
  }

  ngOnInit(): void {
    this.getDishInfo()
  }

  getDishInfo() {
    this.dishesService.getDishById(this.restaurantId, this.dishId)
    .pipe(take(1))
    .subscribe(dish => {
      if (!dish) this.router.navigateByUrl('');
      this.dish = dish
    })
  }

  goBack = () => {
    window.history.back()
  }
}
