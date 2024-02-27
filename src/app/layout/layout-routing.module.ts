import { PaymentMethodsComponent } from './pages/payment-methods/payment-methods.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HomeComponent } from './pages/home/home.component';
import { DishSearchComponent } from './pages/dish-search/dish-search.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { RestaurantInfoComponent } from './pages/restaurant-info/restaurant-info.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'search',
        component: DishSearchComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'profile',
        component: UserProfileComponent
      },
      {
        path: "payment-methods",
        component: PaymentMethodsComponent
      },
      {
        path: ':restaurantId',
        component: RestaurantInfoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
