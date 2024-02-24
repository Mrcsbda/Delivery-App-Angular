import { Component, Input } from '@angular/core';

@Component({
  selector: 'search-result-info',
  templateUrl: './search-result-info.component.html',
  styleUrl: './search-result-info.component.scss'
})
export class SearchResultInfoComponent {
  @Input()
  dish = {
    image: "https://res.cloudinary.com/dd3qzm4in/image/upload/v1692829899/deliveryApp/los%20perritos/Perro-Caliente_lqlgzk.jpg",
    name: "Hot Dog",
    price: 13
  }
}
