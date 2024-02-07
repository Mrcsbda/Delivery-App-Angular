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
      path: '../../../assets/images/home.svg'
    },
    {
      name: 'Search',
      path: '../../../assets/images/search.svg'
    },
    {
      name: 'Orders',
      path: '../../../assets/images/orders.svg'
    },
    {
      name: 'Profile',
      path: '../../../assets/images/profile.svg'
    }
  ]
}
