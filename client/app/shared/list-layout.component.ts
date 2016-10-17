import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from '../personnel/person'; // TODO: Remove this coupling to the personnel folder

@Component({
    selector: 'list-layout',
    templateUrl: 'app/shared/list-layout.component.html',
    styleUrls: ['app/shared/list-layout.component.css']
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
            let col_a = a[column], col_b = b[column];
            if (col_a == undefined) col_a = 9999;
            if (col_b == undefined) col_b = 9999;
            if ( col_a > col_b ) {
                return 1;
            }
            if ( col_a < col_b ) {
                return -1;
            }
            return 0;
        });
    }
    sortDescending(personnel: Person[], column) {
        return personnel.sort( (a, b) => {
            let col_a = a[column], col_b = b[column];
            if (col_a == undefined) col_a = -9999;
            if (col_b == undefined) col_b = -9999;
            if ( col_b > col_a ) {
                return 1;
            }
            if ( col_b < col_a ) {
                return -1;
            }
            return 0;
        }); 
    }
 }