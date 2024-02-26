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
import { AddressHeaderComponent } from './components/address-header/address-header.component';
import { SearchResultInfoComponent } from './components/search-result-info/search-result-info.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AddressHeaderComponent,
    DishInfoComponent,
    DishSearchComponent,
    FooterMobileComponent,
    HeaderDesktopComponent,
    HeaderMobileComponent,
    HomeComponent,
    MainPageComponent,
    OrdersComponent,
    RestaurantCardComponent,
    RestaurantInfoComponent,
    SearchResultInfoComponent,
    UserProfileComponent,
  ],
  exports: [
    MainPageComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
