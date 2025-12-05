import {
  Component,
  OnInit,
  signal
} from '@angular/core';
//import { RouterOutlet } from '@angular/router';

import axios from 'axios';
//import {AxiosPromise} from "axios";

import { Product } from './model/product';
import { ProductCardComponent } from './product-card/product-card';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncPipe, CommonModule } from '@angular/common';

const PRODUCT_URL: string = 'https://dummyjson.com/products';

@Component({
  selector: 'app-root',
  imports: [ProductCardComponent, AsyncPipe, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class AppComponent implements OnInit {

    protected readonly title = signal('myapp');

    products$ : Observable<Product[]> = new Observable<Product[]>; // = this.getProducts();

    products: Product[] = [];

    constructor( private http: HttpClient ) {
      // this.products = this.products;
    }

    getProducts(): Observable<Product[]> {
      return this.http.get<{ products: Product[] }>(PRODUCT_URL).pipe(
        map(response => response.products) // Assuming your JSON has a 'products' key containing the array
      );
    }
    //fetch('https://dummyjson.com/products')
        // .then(res => res.json())
        // .then(console.log);

    ngOnInit() {

      const params= new HttpParams()
        .set("limit", "0")
        .set("skip", "0");
      // fetch('https://dummyjson.com/products')
      //   .then(res => res.json())
      //   .then(console.log);

      //        someObservable<Product[]>().subscribe((products: Product[]) => {

//observable.subscribe({
//   next: value => console.log(value),
//   error: error => console.error(error),
//   complete: () => console.log('Complete')
// });

      // this.getProducts().subscribe({
      //   //next: this.products => products,
      //   next: products => console.log(products),
      //   error: error => console.error('Error fetching products:', error),
      //   complete: () => console.log('Complete')
      // });


      // this.products = 
      this.products$ = this.getProducts();


      //this.http.get<Product[]>(`${PRODUCT_URL}`, {params});
        // .subscribe(

        //     // (products: Product[]) => {
        //     //   this.products = products;
        //     // },
        //     // (error) => {
        //     //   console.error('Error fetching products:', error);
        //     // }
        //       (response: any) => {
        //         this.products = response.products
        //         //console.log(response);
        //     },
        //     (error: any) => {
        //       console.error('Error fetching data:', error);
        //     }
        //   );
    
    };
    
    //        products => this.products = products
  

    // const response: AxiosPromise = axios.get('${PRODUCT_URL}/${productId}');
    // console.log('response is ' + response);
    //products: Product = response.

    // Retrieve a single product
    // getProducts().then(response => {
    //       // product: Product = response;
    //   console.log(response.data);
    //   product = response.data;
    // });

    // const promise = getProducts();

//   onProductSelected(product: Product) {

//     console.log('App component - click event bubbled...', this.products);
//   }
}

function getProduct(productId:number): Promise<Product> {
  return axios.get(`${PRODUCT_URL}/${productId}`);
}

function getProducts(): Promise<Product> {
  return axios.get(`${PRODUCT_URL}`);
}


// dummyjson docs
/*

// all products
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);

// single product
fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(console.log);

// search products
fetch('https://dummyjson.com/products/search?q=phone')
.then(res => res.json())
.then(console.log);

// limit and skip
fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
.then(res => res.json())
.then(console.log);

// sort and order by
fetch('https://dummyjson.com/products?sortBy=title&order=asc')
.then(res => res.json())
.then(console.log);

// get all products categories
fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then(console.log);

// get products category list
fetch('https://dummyjson.com/products/category-list')
.then(res => res.json())
.then(console.log);

// get products by a cateogry
fetch('https://dummyjson.com/products/category/smartphones')
.then(res => res.json())
.then(console.log);

// add a new product
fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'BMW Pencil',
    //other product data
  })
})
.then(res => res.json())
.then(console.log);

// update a product
// updating title of product with id 1 
fetch('https://dummyjson.com/products/1', {
  method: 'PUT', // or PATCH 
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'iPhone Galaxy +1'
  })
})
.then(res => res.json())
.then(console.log);

// delete a project
fetch('https://dummyjson.com/products/1', {
  method: 'DELETE',
})
.then(res => res.json())
.then(console.log);

*/