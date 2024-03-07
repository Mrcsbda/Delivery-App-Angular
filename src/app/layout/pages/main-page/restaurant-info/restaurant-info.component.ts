import { Component } from '@angular/core';
import { Restaurant } from '../../../../models/restaurant';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, take } from 'rxjs';
import { RestaurantsService } from '../../../../services/restaurants.service';

@Component({
  selector: 'restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrl: './restaurant-info.component.scss'
})
export class RestaurantInfoComponent {
  selectedOption: string = "ALL";
  restaurantInfo!: Restaurant;
  dishesInfo = [
    {
      image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg",
      name: "Hot Dog",
      price: 13
    },
    {
      image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg",
      name: "Hot Dog 2",
      price: 15
    },
    {
      image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg",
      name: "Hot Dog 3",
      price: 16
    },
    {
      image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg",
      name: "Hot Dog",
      price: 13
    },
    {
      image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg",
      name: "Hot Dog 2",
      price: 15
    },
    {
      image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg",
      name: "Hot Dog 3",
      price: 16
    },
  ]

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private restaurantsService: RestaurantsService) { }

  ngOnInit(): void {

    this.getRestaurantInfo()
  }

  private getRestaurantInfo() {
    const restaurantId = this.activatedRoute.snapshot.paramMap.get('restaurantId');
    this.restaurantsService.getRestaurantById(restaurantId as string)
      .pipe(take(1))
      .subscribe(restaurant => {
        if (!restaurant) this.router.navigateByUrl('');
        this.restaurantInfo = restaurant
      })
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }

  goBack = () => {
    window.history.back()
  }
}
