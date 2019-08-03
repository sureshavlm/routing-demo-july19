import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product.details.component';
import { CartsComponent } from './carts/carts.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  	{ path: "", redirectTo: "product", pathMatch: "full" },
	{ path: 'products', component: ProductsComponent, 
		children: [ { path: 'details/:productId', component: ProductDetailsComponent }] },
	{ path: 'cart', component: CartsComponent },
	{ path: 'profile', component: ProfileComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
