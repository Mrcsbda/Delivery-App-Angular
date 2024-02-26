import { Component } from '@angular/core';

@Component({
  selector: 'payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrl: './payment-methods.component.scss'
})
export class PaymentMethodsComponent {
  cards = [{
    type: "visa",
    number: 1234,
  },
  {
    type: "mastercard",
    number: 1234,
  },
  {
    type: "amex",
    number: 1234,
  }
  ]
}
