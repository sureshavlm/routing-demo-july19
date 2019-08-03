import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'product-details',
	template: '<h3>{{ title }} - {{ productId }}</h3>'
})

export class ProductDetailsComponent {
	
	title = 'Product Details of ';
	productId: String;
	route: ActivatedRoute;

	constructor(private _route: ActivatedRoute) {
			this.route = _route;

			this.route.params.subscribe((params) => {
				this.productId = params.productId;
			});
	}
}