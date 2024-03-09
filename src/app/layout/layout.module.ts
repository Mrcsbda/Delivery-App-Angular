import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddressHeaderComponent } from './components/address-header/address-header.component';
import { DishInfoComponent } from './components/dish-info/dish-info.component';
import { FooterMobileComponent } from './components/footer-mobile/footer-mobile.component';
import { HeaderDesktopComponent } from './components/header-desktop/header-desktop.component';
import { HeaderMobileComponent } from './components/header-mobile/header-mobile.component';
import { RestaurantCardComponent } from './components/restaurant-card/restaurant-card.component';
import { SearchResultInfoComponent } from './components/search-result-info/search-result-info.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DishSearchComponent } from './pages/main-page/dish-search/dish-search.component';
import { HomeComponent } from './pages/main-page/home/home.component';
import { OrdersComponent } from './pages/main-page/orders/orders.component';
import { RestaurantInfoComponent } from './pages/main-page/restaurant-info/restaurant-info.component';
import { UserProfileComponent } from './pages/main-page/user-profile/user-profile.component';
import { PaymentMethodsComponent } from './pages/main-page/payment-methods/payment-methods.component';
import { DishComponent } from './pages/main-page/dish/dish.component';
import { OrderStatusComponent } from './pages/main-page/order-status/order-status.component';
import { FinishedOrderComponent } from './components/finished-order/finished-order.component';
import { CurrentOrderComponent } from './components/current-order/current-order.component';
import { CartComponent } from './pages/main-page/cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { EditUserProfileComponent } from './pages/main-page/edit-user-profile/edit-user-profile.component';
import { FormsModule } from '@angular/forms';

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
    PaymentMethodsComponent,
    DishComponent,
    OrderStatusComponent,
    FinishedOrderComponent,
    CurrentOrderComponent,
    CartComponent,
    EditUserProfileComponent,
  ],
  exports: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule
  ]
})
export class LayoutModule { }
