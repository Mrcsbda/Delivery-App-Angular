import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HomeComponent } from './pages/main-page/home/home.component';
import { DishSearchComponent } from './pages/main-page/dish-search/dish-search.component';
import { OrdersComponent } from './pages/main-page/orders/orders.component';
import { UserProfileComponent } from './pages/main-page/user-profile/user-profile.component';
import { PaymentMethodsComponent } from './pages/main-page/payment-methods/payment-methods.component';
import { RestaurantInfoComponent } from './pages/main-page/restaurant-info/restaurant-info.component';
import { DishComponent } from './pages/main-page/dish/dish.component';
import { OrderStatusComponent } from './pages/main-page/order-status/order-status.component';
import { CartComponent } from './pages/main-page/cart/cart.component';
import { EditUserProfileComponent } from './pages/main-page/edit-user-profile/edit-user-profile.component';
import { AddNewCardComponent } from './pages/main-page/add-new-card/add-new-card.component';


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
        path: 'cart',
        component: CartComponent
      },
      {
        path: "payment-methods",
        component: PaymentMethodsComponent
      },
      {
        path: 'restaurant/:restaurantId',
        component: RestaurantInfoComponent
      },
      {
        path: 'restaurant/:restaurantId/:dishId',
        component: DishComponent
      },
      {
        path: 'orders/:orderId',
        component: OrderStatusComponent
      },
      {
        path: 'profile/edit',
        component: EditUserProfileComponent
      },
      {
        path: 'payment-methods/add-new-card',
        component: AddNewCardComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
