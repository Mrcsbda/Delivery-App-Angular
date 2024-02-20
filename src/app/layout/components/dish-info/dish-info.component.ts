import { Component, Input } from '@angular/core';

@Component({
  selector: 'dish-info',
  templateUrl: './dish-info.component.html',
  styleUrl: './dish-info.component.scss'
})

export class DishInfoComponent {
  @Input()
  dish = {
    image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg",
    name: "Hot Dog",
    price: 13
  }

}
