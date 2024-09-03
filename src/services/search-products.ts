import {Injectable} from '@angular/core';
import api from '../api/api';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    getProducts(query?: string) {
        return api.search(query)
    }
}