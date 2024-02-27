import { Component } from '@angular/core';

@Component({
  selector: 'footer-mobile',
  templateUrl: './footer-mobile.component.html',
  styleUrl: './footer-mobile.component.scss'
})
export class FooterMobileComponent {
  footerIcons = [
    {
      name: 'Home',
      icon: '../../../assets/images/home.svg',
      path: "/"
    },
    {
      name: 'Search',
      icon: '../../../assets/images/search.svg',
      path: "/search"
    },
    {
      name: 'Orders',
      icon: '../../../assets/images/orders.svg',
      path: "/orders"
    },
    {
      name: 'Profile',
      icon: '../../../assets/images/profile.svg',
      path: "/profile"
    }
  ]
}
