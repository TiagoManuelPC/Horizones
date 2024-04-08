import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { Pagination } from './models/pagination';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
	title = 'angular';
	products: Product[] = [];

	constructor(private http: HttpClient) {

	}

	ngOnInit(): void {
		this.getProducts();
	}

	getProducts() {
		this.http.get<Pagination<Product[]>>('https://localhost:5001/api/products?pageSize=50').subscribe({
			next: (res) => {
				console.log(res);
				this.products = res.data;
			},
			error: error => console.log(error),
			complete: () => {
				console.log('request completed');
				console.log('something');
			}
		})
	}
}
