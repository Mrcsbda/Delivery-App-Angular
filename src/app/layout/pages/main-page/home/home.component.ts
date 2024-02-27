import { Component } from '@angular/core';
import { ScreenSizeService } from '../../../../services/screen-size.service';
import { Restaurant } from '../../../interfaces/restaurant.interface';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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

  restaurants: Restaurant[] = [
    {
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
    },
    {
      name: "The Barbecue Station",
      logo: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692817923/deliveryApp/los-perritos.png",
      image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692933249/deliveryApp/los%20perritos/losPerritos_sttg69.webp",
      rating: 3,
      endTime: 1693015200000,
      startTime: 1692972000000,
      description: "Los perritos son una franquicia local de comidas rápidas. Tienen como su nombre lo indica, perros calientes, pero también ofrecen hamburguesas doble carne o sencillas. Son una buena opción de comida callejera",
      categories: ["FAST FOOD", "BURGUER"],
      deliveryPrice: 5,
      dishesCategories: ["HAMBURGER", "DOGS", "OTHER"],
    },
    {
      name: "Pizza Hut",
      logo: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692817923/deliveryApp/los-perritos.png",
      image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692933249/deliveryApp/los%20perritos/losPerritos_sttg69.webp",
      rating: 4,
      endTime: 1693015200000,
      startTime: 1692972000000,
      description: "Los perritos son una franquicia local de comidas rápidas. Tienen como su nombre lo indica, perros calientes, pero también ofrecen hamburguesas doble carne o sencillas. Son una buena opción de comida callejera",
      categories: ["FAST FOOD", "BURGUER"],
      deliveryPrice: 5,
      dishesCategories: ["HAMBURGER", "DOGS", "OTHER"],
    },
    {
      name: "Cosechas",
      logo: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692817923/deliveryApp/los-perritos.png",
      image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692933249/deliveryApp/los%20perritos/losPerritos_sttg69.webp",
      rating: 1,
      endTime: 1693015200000,
      startTime: 1692972000000,
      description: "Los perritos son una franquicia local de comidas rápidas. Tienen como su nombre lo indica, perros calientes, pero también ofrecen hamburguesas doble carne o sencillas. Son una buena opción de comida callejera",
      categories: ["FAST FOOD", "BURGUER"],
      deliveryPrice: 5,
      dishesCategories: ["HAMBURGER", "DOGS", "OTHER"],
    },
    {
      name: "Los Pollos Hermanos",
      logo: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692817923/deliveryApp/los-perritos.png",
      image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692933249/deliveryApp/los%20perritos/losPerritos_sttg69.webp",
      rating: 2,
      endTime: 1693015200000,
      startTime: 1692972000000,
      description: "Los perritos son una franquicia local de comidas rápidas. Tienen como su nombre lo indica, perros calientes, pero también ofrecen hamburguesas doble carne o sencillas. Son una buena opción de comida callejera",
      categories: ["FAST FOOD", "BURGUER"],
      deliveryPrice: 5,
      dishesCategories: ["HAMBURGER", "DOGS", "OTHER"],
    },
  ]

  constructor(private screenSizeService: ScreenSizeService) { }

  get isMobile() {
    return this.screenSizeService.isMobileView;
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }
}
