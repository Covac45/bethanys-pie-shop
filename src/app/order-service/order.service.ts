import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IOrder } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  getOrderHistory(): Observable<IOrder[]> {
    return of([
      { id: 1, date: '2024-02-22', total: 49.99 },
      { id: 2, date: '2024-01-15', total: 29.99 }
    ]);
  }

}
