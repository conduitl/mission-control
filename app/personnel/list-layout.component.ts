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
    @Input() selectedId: number;
    constructor(
        private router: Router
    ) { }
    
    onSelect(person: Person): void {
        let id = person.id;
        this.router.navigate(['/personnel', id]);
    }
    isSelected(person: Person) {
        return person.id === this.selectedId;
    }
    // List operations for views
    makeCSList(arr: [string]) {
        return arr.reduce( (pre, cur) => {
            return pre + ', ' + cur;
        });
    }
 }