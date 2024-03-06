import { Component } from '@angular/core';
import { Restaurant } from '../../../../models/restaurant';

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

  selectOption(option: string) {
    this.selectedOption = option;
  }

  goBack = () => {
    window.history.back()
  }
}
