import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
	title = 'angular';
	products: any[] = [];

	constructor(private http: HttpClient) {

	}

	ngOnInit(): void {
		this.getProducts();
	}

	getProducts() {
		// this.http.get('https://localhost:5001/api/products?pageSize=50').subscribe({
		this.http.get('https://localhost:5001/api/products').subscribe({
			next: (res: any) => {
				console.log(res);
				this.products = res;
				// this.products = res.data;
			},
			error: error => console.log(error),
			complete: () => {
				console.log('request completed');
				console.log('something');
			}
		})
	}
}
