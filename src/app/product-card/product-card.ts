/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

}
*/


import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';

//import {PRODUCTS} from '../../db-data';
import {Product} from '../model/product';
// import EventEmitter from 'node:events';

@Component({
  selector: 'product-card',
  // imports: [],
  templateUrl: './product-card.html',
  // styleUrl: ['./product-card.component.css'],
})

export class ProductCardComponent implements OnInit{

  @Input({
    required: true
  })
  product!:Product;

  @Input({
    required: true,
  })
  index!: number;

  // @Output('productSelected')
  // courseEmitter = new EventEmitter<Product>();

  constructor() {}
  ngOnInit() {}

  // onProductViewed() {
  //   // console.log("Course viewed", this.course.description);
  //   console.log("card component - button clicked...")
  //   this.courseEmitter.emit(this.product);
  // }
}
