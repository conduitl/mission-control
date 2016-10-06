import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Person } from './person';

import { PersonnelService } from './personnel.service';

@Component({
    selector: 'personnel-list',
    templateUrl: 'app/personnel/personnel-list.component.html',
    styleUrls: ['app/personnel/personnel-list.component.css']
})
export class PersonnelListComponent implements OnInit {
    personnel: Person[];
    selectedPerson: Person;

    // track state of optional router params
    listParams: {
        id: number,
        layout: string,
        query: string
    };

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private personnelService: PersonnelService ) { 
        //constructor
    }
    
    ngOnInit(): void {
        console.log('Personnel List - Initialized');
        this.extractRouteParams();
    }
    extractRouteParams() {
        this.route.params.forEach( (params: Params) => {
            this.listParams = {
                id: +params['id'],
                layout:  params['layout'],
                query: params['query']
            };
            this.evalParams();
        });
    }
    evalParams() {
        console.log('Params evaluated');
        if (this.listParams.id) {
            this.selectPerson(this.listParams.id);
        }
        if (this.listParams.query == undefined) {
            this.listParams.query = '';
        }
        if (this.listParams.layout == undefined) {
            this.listParams.layout = 'list';
        }
        if (this.listParams.query) {
            this.filterResults(this.listParams.query);
        } else {
            this.getPersonnel();
        }
    }
    getPersonnel(): void { 
        this.personnelService.getPersonnel()
            .then( (personnel) => {
                this.personnel = personnel;
            }); 
    }
    isLayoutSelected(layout: string) {
        return layout === this.listParams.layout;
    }
    selectLayout(layout: string): void {
        this.listParams.layout = layout;
        let link = ['/personnel', this.listParams.id, {
            query: this.listParams.query,
            layout: this.listParams.layout
        }];
        this.router.navigate(link);
    }
    selectPerson(id: number) {
        this.personnelService.getPerson(id)
            .then( (person) => {
                this.selectedPerson = person;
                console.log(this.selectedPerson);
            });
    }
    // Filter results
    setQuery(query: string) {
        let link: [any];
        this.listParams.query = query;
        link = ['/personnel', this.listParams.id, {
            query: this.listParams.query,
            layout: this.listParams.layout
        }];
        this.router.navigate(link);
    }
    filterResults(query: string) {
        this.personnelService.filterResults(query).then(personnel => {
            return this.personnel = personnel;
        });
    }

 }