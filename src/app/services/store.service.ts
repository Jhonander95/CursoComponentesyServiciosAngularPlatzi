import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  total = 0;

  private myShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);
  myCart$ = this.myCart.asObservable();

  addProduct(product:Product) {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
  }
  getTotal(){
    return this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0 );
  }
  getShoppingCart() {
    return this.myShoppingCart;
  }
}
