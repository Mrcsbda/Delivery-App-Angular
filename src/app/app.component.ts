import { Component, HostListener } from '@angular/core';
import { ScreenSizeService } from './services/screen-size.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Delivery-App';
  constructor(private screenSizeService: ScreenSizeService) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenSizeService.updateisMobileView(event);
  }
}
