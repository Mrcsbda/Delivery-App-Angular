import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  selectedOption:string = "ALL";

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

  selectOption(option: string) {
    this.selectedOption = option;
  }
}
