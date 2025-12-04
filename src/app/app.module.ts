import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCardComponent } from './product-card/product-card';

@NgModule({
  declarations: [
    //AppComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ProductCardComponent
    ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule { }
