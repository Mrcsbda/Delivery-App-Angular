import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HomeComponent } from './pages/main-page/home/home.component';
import { DishSearchComponent } from './pages/main-page/dish-search/dish-search.component';
import { OrdersComponent } from './pages/main-page/orders/orders.component';
import { UserProfileComponent } from './pages/main-page/user-profile/user-profile.component';
import { PaymentMethodsComponent } from './pages/main-page/payment-methods/payment-methods.component';
import { RestaurantInfoComponent } from './pages/main-page/restaurant-info/restaurant-info.component';
import { DishInfoComponent } from './components/dish-info/dish-info.component';
import { DishComponent } from './pages/main-page/dish/dish.component';


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
      },
      {
        path: ':restaurantId/:dishId',
        component: DishComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
