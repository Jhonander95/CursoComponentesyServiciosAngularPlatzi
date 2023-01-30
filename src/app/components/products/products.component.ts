import { Component } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      image: './assets/default.png',
      price: 11
    },
    {
      id: '2',
      name: 'Product 2',
      image: './assets/default1.jpg',
      price: 11
    },
    {
      id: '3',
      name: 'Product 3',
      image: './assets/descarga.jfif',
      price: 11
    }
  ];


}
