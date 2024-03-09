import { Component } from '@angular/core';

@Component({
  selector: 'add-new-card',
  templateUrl: './add-new-card.component.html',
  styleUrl: './add-new-card.component.scss'
})
export class AddNewCardComponent {
  goBack() {
    window.history.back();
  }
}
