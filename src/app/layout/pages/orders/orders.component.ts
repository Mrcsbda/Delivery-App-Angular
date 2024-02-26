import { Component } from '@angular/core';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  orders = [
    {
      restaurant: "Perritos",
      total: 132,
      image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692817923/deliveryApp/los-perritos.png",
      status: "PENDING"
    },
    {
      restaurant: "Pizza Hut",
      total: 240,
      image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692817741/deliveryApp/pizza-hut.png",
      status: "CANCELLED"
    },
    {
      restaurant: "The barbecue station",
      total: 55,
      image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692818072/deliveryApp/the-barbecue-station.png",
      status: "DELIVERED"
    },
    {
      restaurant: "Los Pollos Hermanos",
      total: 70,
      image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692818207/deliveryApp/Los_Pollos_Hermanos_logo.png",
      status: "PENDING"
    },
    {
      restaurant: "Cosechas",
      total: 123,
      image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692819155/deliveryApp/cosechas-logo-ahora.png",
      status: "CANCELLED"
    },
    {
      restaurant: "Crepes & Waffles",
      total: 432,
      image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692823728/deliveryApp/C_Wlogo_nk4rzy.svg",
      status: "DELIVERED"
    },
    {
      restaurant: "The station grill",
      total: 123,
      image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692824369/deliveryApp/station-grill-logo_yxoyxs.webp",
      status: "PENDING"
    },
    {
      restaurant: "Perritos",
      total: 325,
      image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692817923/deliveryApp/los-perritos.png",
      status: "CANCELLED"
    },
    {
      restaurant: "Perritos",
      total: 597,
      image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692817923/deliveryApp/los-perritos.png",
      status: "DELIVERED"
    },
  ]
}
