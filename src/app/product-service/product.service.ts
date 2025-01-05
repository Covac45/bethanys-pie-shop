import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Input } from '@angular/core';
import { IProduct } from '../product-details/product-model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  GetProducts() {
    return this.http.get<IProduct[]>('https://localhost:7162/api/products');
  }

  GetThisProduct(id: number) {
    return this.GetProducts().pipe(
      map((products) => products.find((p) => p.id === id))
    );
  }
}