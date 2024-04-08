import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from '../shared/models/product';
import { ShopService } from './shop.service';
import { Brand } from '../shared/models/brand';
import { Type } from '../shared/models/type';
import { ShopParams } from '../shared/models/shop-params';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrl: './shop.component.scss'
})

//TODO: bug when reset page 3, the pager doesnt change to page one
export class ShopComponent implements OnInit {
    @ViewChild('search') searchTerm?: ElementRef; 
    products: Product[] = [];
    brands: Brand[] = [];
    types: Type[] = [];
    shopParams: ShopParams = new ShopParams();
    sortOptions = [
        { name: 'Alphabetical', value: 'name' },
        { name: 'Price: Low to high', value: 'priceAsc' },
        { name: 'Price: High to low', value: 'pricDesc' }
    ];
    totalCount: number = 0;

    constructor(private shopService: ShopService) {
        
    }

    ngOnInit(): void {
        this.getProducts();
        this.getBrands();
        this.getTypes();
    }

    getProducts() {
        this.shopService.getProducts(this.shopParams).subscribe({
            next: res => {
                this.products = res.data;
                this.shopParams.pageIndex = res.pageIndex;
                this.shopParams.pageSize = res.pageSize;
                this.totalCount = res.count;
            },
            error: error => console.log(error)
        });
    }

    getBrands() {
        this.shopService.getBrands().subscribe({
            next: res => this.brands = [{ id: 0, name: 'All' }, ...res],
            error: error => console.log(error)
        });
    }

    getTypes() {
        this.shopService.getTypes().subscribe({
            next: res => this.types = [{ id: 0, name: 'All' }, ...res],
            error: error => console.log(error)
        });
    }

    onBrandSelected(brandId: number) {
        this.shopParams.brandId = brandId;
        this.getProducts();
    }

    onTypeSelected(typeId: number) {
        this.shopParams.typeId = typeId;
        this.resetPageNumber();
        this.getProducts();
    }

    onSortSelected(event: any) {
        this.shopParams.sort = event.target.value;
        this.resetPageNumber();
        this.getProducts();
    }

    onPageChanged(event: any) {
        if (this.shopParams.pageIndex != event) {
            this.shopParams.pageIndex = event;
            this.getProducts();
        }
    }

    onSearch() {
        this.shopParams.search = this.searchTerm?.nativeElement.value;
        this.resetPageNumber();
        this.getProducts();
    }

    onReset() {
        if(this.searchTerm) this.searchTerm.nativeElement.value = '';
        this.shopParams = new ShopParams();
        this.getProducts();
    }

    resetPageNumber() {
        this.shopParams.pageIndex = 1;
    }
}
