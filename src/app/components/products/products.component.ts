import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  total = 0;
  myShoppingCart: Product[] = [];
  products: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      image: './assets/images/album.jpg',
      price: 11
    },
    {
      id: '2',
      name: 'Product 2',
      image: './assets/images/bike.jpg',
      price: 11
    },
    {
      id: '3',
      name: 'Product 3',
      image: './assets/images/books.jpg',
      price: 11
    },
    {
      id: '3',
      name: 'Product 3',
      image: './assets/images/glasses.jpg',
      price: 11
    },
    {
      id: '3',
      name: 'Product 3',
      image: './assets/images/house.jpg',
      price: 11
    }
  ];

  constructor(
    private storeServices: StoreService
    ){
      this.myShoppingCart = this.storeServices.getShoppingCart();
     }

  onAddToShoppingCart(product: Product) {
    this.storeServices.addProduct(product);
    this.total = this.storeServices.getTotal()
  }

}
