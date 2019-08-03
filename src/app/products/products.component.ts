import { Component } from '@angular/core';

@Component({
	selector: 'products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})

export class ProductsComponent {
	
	title = 'Products Component';
	age = 18;

	products: any = [
	{ id: 1, name: "iPhone 10", price: 80000, category: "phone"},
	{ id: 2, name: "Windows Pro", price: 60000, category: "Tab"},
	{ id: 3, name: "Samsung S4", price: 50000, category: "Phone"}
	];


}