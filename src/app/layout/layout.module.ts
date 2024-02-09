import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HeaderMobileComponent } from './components/header-mobile/header-mobile.component';
import { FooterMobileComponent } from './components/footer-mobile/footer-mobile.component';
import { HeaderDesktopComponent } from './components/header-desktop/header-desktop.component';
import { HomeComponent } from './pages/home/home.component';
import { RestaurantCardComponent } from './components/restaurant-card/restaurant-card.component';
import { RestaurantInfoComponent } from './pages/restaurant-info/restaurant-info.component';
import { DishInfoComponent } from './components/dish-info/dish-info.component';
import { DishSearchComponent } from './pages/dish-search/dish-search.component';

@NgModule({
  declarations: [
    MainPageComponent,
    HeaderMobileComponent,
    FooterMobileComponent,
    HeaderDesktopComponent,
    HomeComponent,
    RestaurantCardComponent,
    RestaurantInfoComponent,
    DishInfoComponent,
    DishSearchComponent
  ],
  exports: [
    MainPageComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
