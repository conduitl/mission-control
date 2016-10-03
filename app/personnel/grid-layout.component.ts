import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from './person';

@Component({
    selector: 'grid-layout',
    templateUrl: 'app/personnel/grid-layout.component.html',
    styleUrls: ['app/personnel/grid-layout.component.css']
})
export class GridLayoutComponent implements OnInit {
    @Input() personnel: Person[];
    @Input() selectedId: number;

    public rows;

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
        this.rows = this.makeRows(this.personnel, 4);
    }

    // Group into rows of 4
    makeRows(arr: any[], len: number) {
        let rows = [];
        if (arr) {
            for (let i = 0; i < arr.length; i += len) {
                let row = arr.slice(i, i + len);
                rows.push(row);
            }
        }
        return rows;
    }
    logPersonnel(): void {
        console.log('Log personnel');
        console.log(this.personnel);
    }

    // Following methods duplicated in ListLayoutComponent
    onSelect(person: Person): void {
        let id = person.id;
        this.router.navigate(['/personnel', id]);
    }
    isSelected(person: Person) {
        return person.id === this.selectedId;
    }
    makeCSList(arr: [string]) {
        return arr.reduce( (pre, cur) => {
            return pre + ', ' + cur;
        });
    }

    // Method duplicated in ProfilePreviewComponent
    checkImg(person: Person) {
        if (person.img) {
            return person.img;
        } else{
            return 'http://placehold.it/150x150';
        }
    }
}