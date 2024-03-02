import { Component } from '@angular/core';

type OrderStatus = 'CONFIRMED' | 'COOKING' | 'ON THW WAY' | 'DELIVERED'
@Component({
  selector: 'current-order',
  templateUrl: './current-order.component.html',
  styleUrl: './current-order.component.scss'
})
export class CurrentOrderComponent {
  orderStep: number = 2
  orderStatuses: OrderStatus[] = ['CONFIRMED', 'COOKING', 'ON THW WAY', 'DELIVERED']
  ordersInfo = [
    {
      image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg",
      quantity: 1,
      name: "Vegetarian pizza",
      total: 32
    },
    {
      image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg",
      quantity: 2,
      name: "Fresh with funcheza asd sad asd as asdasd asdasd",
      total: 28.45
    },
    {
      image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg",
      quantity: 1,
      name: "Vegetarian pizza",
      total: 32
    },
    {
      image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg",
      quantity: 2,
      name: "Fresh with funcheza asd sad asd as asdasd asdasd",
      total: 28.45
    },
    {
      image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg",
      quantity: 1,
      name: "Vegetarian pizza",
      total: 32
    },
    {
      image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg",
      quantity: 2,
      name: "Fresh with funcheza asd sad asd as asdasd asdasd",
      total: 28.45
    },
    {
      image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg",
      quantity: 1,
      name: "Vegetarian pizza",
      total: 32
    },
    {
      image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg",
      quantity: 2,
      name: "Fresh with funcheza asd sad asd as asdasd asdasd",
      total: 28.45
    }
  ]
}
