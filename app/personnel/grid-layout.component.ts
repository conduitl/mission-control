import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Person } from './person';

@Component({
    selector: 'grid-layout',
    templateUrl: 'app/personnel/grid-layout.component.html',
    styleUrls: ['app/personnel/grid-layout.component.css']
})
export class GridLayoutComponent implements OnInit {
    @Input() personnel: Person[];
    @Input() selectedId: number;

    // track state of optional router params
    optParams: {
        layout: string,
        query: string
    };

    public rows;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.route.params.forEach( (params: Params) => {
            this.selectedId = +params['id'];
            this.optParams = {
                layout:  params['layout'],
                query: params['query']
            };            
            this.rows = this.makeRows(this.personnel, 4); // this is a problem
        });
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
        this.router.navigate(['/personnel', id, this.optParams]);
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
            return 'http://placehold.it/300x300';
        }
    }
}