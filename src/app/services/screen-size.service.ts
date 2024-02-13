import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  isMobileView: boolean;
  constructor() {
    this.isMobileView = window.innerWidth <= 650;
  }

  updateisMobileView(event: Event) {
    this.isMobileView = (event.target as Window).innerWidth <= 650;
  }
}
