import { Component } from '@angular/core';

@Component({
  selector: 'header-desktop',
  templateUrl: './header-desktop.component.html',
  styleUrl: './header-desktop.component.scss'
})
export class HeaderDesktopComponent {
  userLogged: Boolean = false;
  headerOptions = [
    {
      title: 'Home',
      path: ''
    },
    {
      title: 'Search',
      path: 'search'
    }
  ]

  headerOptionsUserLogged = [
    {
      title: 'Home',
      path: ''
    },
    {
      title: 'Search',
      path: 'search'
    },
    {
      title: 'Orders',
      path: 'orders'
    },
    {
      title: 'Profile',
      path: 'profile'
    }
  ]
}
