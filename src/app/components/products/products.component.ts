import { Component, OnInit } from '@angular/core';
import { CreateProductDTO, Product, UpdateProductDTO } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  customOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true,
    stagePadding: 0,
    autoplay: true,
    autoplayTimeout: 3000
  }

  limit = 10;
  offSet = 0;

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
    this.productsService.getProductsByPage(10, 0)
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

  createNewProduct() {
    const product: CreateProductDTO = {

      title: 'Nuevo Producto',
      images: ['https://placeimg.com/640/480/any?random=$%7BMath.random()%7D'],
      price: 666999,
      description: 'Este es un producto de prueva ',
      categoryId: 2
    }
    this.productsService.create(product)
    .subscribe(data => {
      console.log('created', data);
      this.products.unshift(data);
    })
  }

   updateProduct() {
    const changes: UpdateProductDTO = {
      title: 'Nuevo nombre 666',
      price: 666999
    }
    const id = this.productChosen.id;
    this.productsService.update(id, changes)
    .subscribe(data => {
      const productIndex = this.products.findIndex(item => item.id === this.productChosen.id);
      this.products[productIndex] = data;
      this.productChosen = data;
    });
   }

   deleteProduct() {
    const id = this.productChosen.id;
    this.productsService.delete(id)
    .subscribe(data => {
      const productIndex = this.products.findIndex(item => item.id === this.productChosen.id);
      this.products.splice(productIndex, 1);
      this.showProductDetail = false;
    })
   }

  loadMore() {
    this.productsService.getProductsByPage(this.limit, this.offSet)
    .subscribe(data => {
      this.products = this.products.concat(data);
      this.offSet += this.limit;
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
