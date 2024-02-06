import { Component, Input } from '@angular/core';
import { Restaurant } from '../../interfaces/restaurant.interface';

@Component({
  selector: 'restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.scss'
})
export class RestaurantCardComponent {
  @Input()
  restaurantInfo: Restaurant = {
    name: "Los Perritos",
    logo: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692817923/deliveryApp/los-perritos.png",
    image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692933249/deliveryApp/los%20perritos/losPerritos_sttg69.webp",
    rating: 5,
    endTime: 1693015200000,
    startTime: 1692972000000,
    description: "Los perritos son una franquicia local de comidas rápidas. Tienen como su nombre lo indica, perros calientes, pero también ofrecen hamburguesas doble carne o sencillas. Son una buena opción de comida callejera",
    categories: ["FAST FOOD", "BURGUER"],
    deliveryPrice: 5,
    dishesCategories: ["HAMBURGER", "DOGS", "OTHER"],
  }
}