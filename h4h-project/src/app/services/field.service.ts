import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

interface Category {
    name: string,
    id: number
}

@Injectable({
    providedIn: 'root'
})
export class FieldService {
    sharedData: string;

    category: Category[] = [
        {name: "Engineering", id: 1},
        {name: "Business", id: 2},
        {name: "Art & Sciences", id: 3}
    ];

    constructor(private router: Router) {}

    categoryUpdated = new Subject<Category[]>();

    get data() {
        return this.sharedData;
    }
    
}