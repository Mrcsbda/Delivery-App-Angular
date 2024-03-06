import { Restaurant } from './../../../../models/restaurant';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScreenSizeService } from '../../../../services/screen-size.service';
import { RestaurantsService } from '../../../../services/restaurants.service';
import { take } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  selectedOption: string = "ALL";

  carrouselImages = [
    {
      name: "Slide 1",
      path: "../../../../assets/images/slide-1.jpg"
    },
    {
      name: "Slide 2",
      path: "../../../../assets/images/slide-2.jpg"
    },
    {
      name: "Slide 3",
      path: "../../../../assets/images/slide-3.jpg"
    },
    {
      name: "Slide 4",
      path: "../../../../assets/images/slide-4.jpg"
    }
  ]

  filterOptions = [
    {
      name: "All",
      value: "ALL",
    },
    {
      name: "Fast Food",
      value: "FAST FOOD",
      path: "../../../../assets/images/fast-food.png"
    },
    {
      name: "Healthy",
      value: "HEALTHY",
      path: "../../../../assets/images/healthy.png"
    },
    {
      name: "Burguer",
      value: "BURGUER",
      path: "../../../../assets/images/burguer.png"
    },
    {
      name: "Pizza",
      value: "PIZZA",
      path: "../../../../assets/images/pizza.png"
    },
    {
      name: "Chicken",
      value: "CHICKEN",
      path: "../../../../assets/images/chicken.png"
    }
  ]

  restaurants: Restaurant[] = []

  constructor(
    private screenSizeService: ScreenSizeService,
    private RestaurantsService: RestaurantsService
  ) { }

  ngOnInit(): void {
    this.getRestaurants()
  }

  get isMobile() {
    return this.screenSizeService.isMobileView;
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }

  private getRestaurants() {
    this.RestaurantsService.getRestaurants()
      .pipe(take(1))
      .subscribe(restaurants => this.restaurants = restaurants);
  }
}
