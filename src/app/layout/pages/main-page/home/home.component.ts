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
      value: "ALL",
    },
    {
      value: "FAST FOOD",
      path: "../../../../assets/images/fast-food.png"
    },
    {
      value: "HEALTHY",
      path: "../../../../assets/images/healthy.png"
    },
    {
      value: "BURGUER",
      path: "../../../../assets/images/burguer.png"
    },
    {
      value: "PIZZA",
      path: "../../../../assets/images/pizza.png"
    },
    {
      value: "CHICKEN",
      path: "../../../../assets/images/chicken.png"
    }
  ]

  restaurants!: Restaurant[];
  filteredRestaurants!: Restaurant[];

  constructor(
    private screenSizeService: ScreenSizeService,
    private restaurantsService: RestaurantsService
  ) { }

  ngOnInit(): void {
    this.getRestaurants()
  }

  private getRestaurants() {
    this.restaurantsService.getRestaurants()
      .pipe(take(1))
      .subscribe(restaurants => {
        this.restaurants = restaurants
        this.filteredRestaurants = restaurants
      });
  }

  get isMobile() {
    return this.screenSizeService.isMobileView;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    if (option == "ALL") {
      this.filteredRestaurants = this.restaurants;
    } else {
      this.filteredRestaurants = this.restaurants.filter(restaurant => restaurant.categories.includes(option));
    }
  }


}
