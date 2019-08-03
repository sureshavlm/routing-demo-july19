import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';

import { AppComponent } from './app.component';

import { ProductsComponent } from './products/products.component';
import { CartsComponent } from './carts/carts.component';
import { ProfileComponent } from './profile/profile.component';

import { ProductDetailsComponent } from './products/product.details.component';


@NgModule({
  declarations: [
    AppComponent, ProductsComponent, CartsComponent, ProfileComponent, ProductDetailsComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
