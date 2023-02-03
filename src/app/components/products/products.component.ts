import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  total = 0;
  myShoppingCart: Product[] = [];
  products: Product[] = [];
  today = new Date();
  date = new Date(2021, 3, 30)
  showProductDetail = false;
  productChosen: Product = {
    id: '',
    title: '',
    images: [],
    price: 0,
    description: '',
    category: {
      id: '',
      name: ''
    }
  }

  constructor(
    private storeServices: StoreService,
    private productsService: ProductsService
    ){
      this.myShoppingCart = this.storeServices.getShoppingCart();
     }
  ngOnInit() {
    this.productsService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    });
  }

  onAddToShoppingCart(product: Product) {
    this.storeServices.addProduct(product);
    this.total = this.storeServices.getTotal()
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: string) {
    this.productsService.getProduct(id)
    .subscribe(data => {
      console.log('Product', data);
      this.toggleProductDetail();
      this.productChosen = data;
      console.log(this.productChosen.images);

    })
  }

}
/*   products: Product[] = [
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
  ]; */
