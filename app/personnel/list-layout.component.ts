import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Person } from './person';

@Component({
    selector: 'list-layout',
    templateUrl: 'app/personnel/list-layout.component.html',
    styleUrls: ['app/personnel/list-layout.component.css']
})
export class ListLayoutComponent implements OnInit {
    @Input() personnel: Person[];
    @Input() selectedId: number;
    optParams: {
        layout: string,
        query: string
    }

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
        });
    }
    
    onSelect(person: Person): void {
        let id = person.id;
        this.router.navigate(['/personnel', id, this.optParams]);
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