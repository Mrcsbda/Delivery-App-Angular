import { Component, HostListener } from '@angular/core';
import { ScreenSizeService } from '../../../services/screen-size.service';

@Component({
  selector: 'delivery-app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  constructor(private screenSizeService: ScreenSizeService) { }

  get isMobile() {
    return this.screenSizeService.isMobileView;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenSizeService.updateisMobileView(event);
  }
}
