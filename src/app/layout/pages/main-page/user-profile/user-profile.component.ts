import { Component } from '@angular/core';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  configOptions = [
    {
      icon: "../../../../assets/images/account-edit.svg",
      title: "Account edit",
      path: "/profile/edit"
    },
    {
      icon: "../../../../assets/images/payment-methods.svg",
      title: "Payment methods",
      path: "/payment-methods"
    },
    {
      icon: "../../../../assets/images/location-edit.svg",
      title: "Location",
    },
    {
      icon: "../../../../assets/images/FAQ.svg",
      title: "FAQ",
    },
    {
      icon: "../../../../assets/images/support.svg",
      title: "Support",
    },
    {
      icon: "../../../../assets/images/logout.svg",
      title: "Logout",
    }
  ]
}
