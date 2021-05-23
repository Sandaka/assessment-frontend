import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductCard } from '../models/product-card';
import { productsUrl } from '../configs/api-invoke';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductCard[]> {
    return this.http.get<ProductCard[]>(productsUrl);
  }
}
