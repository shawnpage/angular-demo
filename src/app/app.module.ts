import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCardComponent } from './product-card/product-card';
import { CategoryCardComponent } from './category-card/category-card';

@NgModule({
  declarations: [
    //AppComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ProductCardComponent,
        CategoryCardComponent,
    ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule { }
