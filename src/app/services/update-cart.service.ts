import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductCard } from '../models/product-card';
import { calculatorUrl } from '../configs/api-invoke';

@Injectable({
  providedIn: 'root'
})
export class UpdateCartService {

  subject = new Subject();

  constructor(private http: HttpClient) { }

  setRequest(item: any) {
    //console.log(qtyDetail);
    this.subject.next(item);
  }

  getRequest() {
    return this.subject.asObservable()
  }

  calculatePricesForQty(product: ProductCard): Observable<ProductCard> {
    return this.http.post<ProductCard>(calculatorUrl, product);
  }
}
