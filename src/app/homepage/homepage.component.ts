import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';

import { SearchService } from '../../services/search-products';
import { Product } from '../../api/types';
import { Observable } from 'rxjs';
import { ProductComponent } from '../product/product.component';


@Component({
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css'],
    imports: [FormsModule, AsyncPipe, ProductComponent]
})
export class HomePageComponent {
    name = "Mahisoft";

    products$!: Observable<Product[]>;

    query = '';

    constructor(private searchService: SearchService) { }

    ngOnInit(): void {
        this.products$ = this.searchService.getProducts(this.query);
    }
}