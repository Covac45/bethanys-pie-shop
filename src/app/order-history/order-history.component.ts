import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IOrder } from '../order-service/order.model';
import { OrderService } from '../order-service/order.service';

@Component({
  selector: 'BPS-order-history',
  imports: [CommonModule],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.scss'
})
export class OrderHistoryComponent {
  orders: IOrder[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrderHistory().subscribe(orders => {
      this.orders = orders;
    });
  }
}
