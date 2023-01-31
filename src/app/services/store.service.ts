import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  total = 0;

  private myShoppingCart: Product[] = [];

  addProduct(product:Product) {
    this.myShoppingCart.push(product);
  }
  getTotal(){
    return this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0 );
  }
  getShoppingCart() {
    return this.myShoppingCart;
  }
}
