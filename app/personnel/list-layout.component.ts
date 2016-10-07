import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from './person';

@Component({
    selector: 'list-layout',
    templateUrl: 'app/personnel/list-layout.component.html',
    styleUrls: ['app/personnel/list-layout.component.css']
})
export class ListLayoutComponent {
    @Input() personnel: Person[];
    @Input() listParams: {
        id: number,
        query: string,
        layout: string
    };
    sortMap = {
        name: false,
        joined: false,
        year: false
    };

    constructor(
        private router: Router
    ) { }
    
    onSelect(person: Person): void {
        let id = person.id;
        this.router.navigate(['/personnel', id, {
            query: this.listParams.query,
            layout: this.listParams.layout
        }]);
    }
    isSelected(person: Person) {
        return person.id === this.listParams.id;
    }
    // List operations for views
    makeCSList(arr: [string]) {
        return arr.reduce( (pre, cur) => {
            return pre + ', ' + cur;
        });
    }

    // Sorting methods
    switch(obj, key): boolean {
        if (obj[key]) {
            obj[key] = false;
            return false;
        }
        obj[key] = true;
        return true;
    }
    sort(personnel: Person[], column) {
        let ascend: boolean = this.switch(this.sortMap, column);
        if (ascend) {
            this.sortAscending(personnel, column);
        } else {
            this.sortDescending(personnel, column);
        }
    }
    sortAscending(personnel: Person[], column) {
        return personnel.sort( (a, b) => {
            if ( a[column] > b[column] ) {
                return 1;
            }
            if ( a[column] < b[column] ) {
                return -1;
            }
            return 0;
        });
    }
    sortDescending(personnel: Person[], column) {
        return personnel.sort( (a, b) => {
            if ( b[column] > a[column] ) {
                return 1;
            }
            if ( b[column] < a[column] ) {
                return -1;
            }
            return 0;
        }); 
    }
 }