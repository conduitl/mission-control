import { Component, Input, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Person } from '../personnel/person'; // TODO: Remove this coupling to the personnel folder

@Component({
    selector: 'grid-layout',
    templateUrl: 'app/shared/grid-layout.component.html',
    styleUrls: ['app/shared/grid-layout.component.css']
})
export class GridLayoutComponent implements OnChanges {
    @Input() personnel: Person[];
    @Input() listParams: {
        id: number,
        query: string,
        layout: string
    };

    public rows;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnChanges(): void {
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
    
    // Following methods duplicated in ListLayoutComponent
    onSelect(person: Person): void {
        let id = person.id;
        this.router.navigate(['/personnel', id , {
            query: this.listParams.query,
            layout: this.listParams.layout
        }]);
    }
    isSelected(person: Person) {
        return person.id === this.listParams.id;
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
            return 'http://placehold.it/300x300';
        }
    }
}