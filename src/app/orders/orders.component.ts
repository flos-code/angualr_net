import { Component } from '@angular/core';
import { Order } from '../../models/order.class';
import { CommonModule } from '@angular/common';
import { AddOrderComponent } from './add-order/add-order.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, AddOrderComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent {
  orders: Order[];
  showAddOrder: boolean = false;

  constructor() {
    this.orders = [
      new Order({
        createdBy: 'User1',
        system: 'System1',
        date: 1657894000000,
        issue: 'Issue1',
        description: 'Description1',
      }),
      new Order({
        createdBy: 'User2',
        system: 'System2',
        date: 1657970400000,
        issue: 'Issue2',
        description: 'Description2',
      }),
      new Order({
        createdBy: 'User3',
        system: 'System3',
        date: 1658056800000,
        issue: 'Issue3',
        description: 'Description3',
      }),
    ];
  }

  openAddOrder() {
    this.showAddOrder = true;
  }

  handleCloseOrder() {
    this.showAddOrder = false;
  }
}
