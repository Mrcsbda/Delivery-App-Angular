import { Component } from '@angular/core';
import { Restaurant } from '../../../../models/restaurant';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map, take } from 'rxjs';
import { RestaurantsService } from '../../../../services/restaurants.service';
import { Dish } from '../../../../models/dish';
import { DishesService } from '../../../../services/dishes.service';

@Component({
  selector: 'restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrl: './restaurant-info.component.scss'
})
export class RestaurantInfoComponent {
  selectedOption: string = "ALL";
  restaurantInfo!: Restaurant;
  dishesInfo!: Dish[];
  filteredDishes!: Dish[]
  restaurantId!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private restaurantsService: RestaurantsService,
    private dishesService: DishesService) {
    this.restaurantId = this.activatedRoute.snapshot.paramMap.get('restaurantId') as string;
  }

  ngOnInit(): void {
    const restaurantInfo$ = this.getRestaurantInfo()
    const dishesInfo$ = this.getDishesInfo()
    combineLatest([restaurantInfo$, dishesInfo$])
      .pipe(
        map(([restaurant, dishes]) => ({ restaurant, dishes })),
        take(1))
      .subscribe(({ restaurant, dishes }) => {
        if (!restaurant) this.router.navigateByUrl('');
        this.restaurantInfo = restaurant
        this.dishesInfo = dishes
      })
  }

  private getRestaurantInfo() {
    return this.restaurantsService.getRestaurantById(this.restaurantId)
  }

  private getDishesInfo() {
    return this.dishesService.getDishesByRestaurantKey(this.restaurantId)
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }

  goBack = () => {
    window.history.back()
  }
}
