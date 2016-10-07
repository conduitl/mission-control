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
    // state of view mode
    modeMap: {
        add: boolean,
        edit: boolean
    } = {
        add: false,
        edit: false
    };

    // store groupings of personnel
    groups;
    keys;
    grouping;

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

    // Extract and evaluate the route parameters
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

        // Set defaults if no matching params found
        if (this.listParams.query == undefined) {
            this.listParams.query = '';
        }
        if (this.listParams.layout == undefined) {
            this.listParams.layout = 'list';
        }

        // Apply filter if query; otherwise return entire data array
        if (this.listParams.query) {
            this.filterResults(this.listParams.query);
        } else {
            this.getPersonnel();
        }
    }

    // Retrieve data via service 
    getPersonnel(): void { 
        this.personnelService.getPersonnel()
            .then( (personnel) => {
                this.personnel = personnel;
            }); 
    }
    // Toggle add, edit or other modes
    toggleMode(mode: string) {
        this.modeMap[mode] = this.toggle(this.modeMap[mode]);
    }
    toggle(bool: boolean): boolean {
        if (bool) {
            return false;
        }
        return true;    
    }

    // Determine layout
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
    // Select person clicked on in layout; called by evalParams()
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
            if (this.grouping) {
                this.groupBy(this.grouping, personnel);
            }
            this.personnel = personnel;
        });
    }

    // Group results
    // TODO: Method is pretty ugly, needs clean up refactoring
    //       especially for handling nested arrays
    groupBy(col: string, personnel: Person[]) {
        // Refactor - Create object pairing the select option values to keys on Person class
        if (col === '(none)') {
            this.groups = undefined;
            return;
        }
        if (col === 'Year joined') {
            col = 'joined';
        }
        if (col === 'Job type') {
            col = 'job';
        }
        if (col === 'Missions') {
            col = 'missions';
        }
        // Refactor - Better, scalable handing of keys referencing Arrays
        let groups: {} = {};
        personnel.forEach((person: Person, idx: number, arr: Person[]) => {
            if ( Array.isArray(person[col])) { // If the Person property contains an array e.g. 'missions'
                person[col].forEach( (mission: string, idx: number, arr: [string]) => {
                    group(person, groups, col, idx);
                });
            } else { 
                group(person, groups, col, null);
            }
        });
        function group(person: Person, groups, column, nested_idx) {
            if (nested_idx === null) {
                if (!groups[ person[column] ]) { // if no group for col value, initialize it
                    groups[ person[column] ] = [];
                }
                // Push person to the appropriate group based on supplied column
                // e.g. Job type
                groups[ person[column] ].push(person);
            } else {
                console.log('Mission: ' + person[column]);
                if (!groups[ person[column][nested_idx] ]) {
                    groups[ person[column][nested_idx] ] = [];
                }
                groups[ person[column][nested_idx] ].push(person);
            }
        }
        this.grouping = col;
        this.groups = groups;
        this.keys = Object.keys(groups);
    }
 }