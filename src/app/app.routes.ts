import { Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { TaksComponent } from './taks/taks.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'tasks', component: TaksComponent },
];
