import { Component } from '@angular/core';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.scss'
})
export class DishComponent {
  dish = {
    image: 'https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg',
    name: 'Hot Dog',
    adittions: ["French fries", "Coca Cola 750ml"],
    description: "Our Quesudo Hot Dog is made with warm bread, baked Zenú sausage, melted cheese, our rich and fresh salad and potato chips."
  }

  goBack = () => {
    window.history.back()
  }
}
