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
    errorMessage: string;
    personnel: Person[];
    selectedPerson: Person;

    // track state of optional router params
    listParams: {
        id: number, // not optional
        layout: string,
        query: string,
        perPage?: number // not a route parameter
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
    groups; // Personnel list stored in column list groups
    keys; // Keys of all groups
    grouping; // Stores the column value by which list is grouped

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private personnelService: PersonnelService ) { 
        //constructor
    }
    
    ngOnInit(): void {
        this.extractRouteParams();
    }

    // Extract and evaluate the route parameters
    extractRouteParams() {
        this.route.params.forEach( (params: Params) => {
            this.listParams = {
                id: +params['id'],
                layout:  params['layout'],
                query: params['query'],
                perPage: +params['perPage']
            };
            this.evalParams();
        });
    }
    evalParams() {
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
        console.log('Eval params: perPage = ' + this.listParams.perPage)
        if (isNaN(this.listParams.perPage)) {
            this.listParams.perPage = 10;
        }
        // Apply filter if query; otherwise return entire data array
        if (this.listParams.query) {
            this.filterResults(this.listParams.query);
        } else {
            this.getPersonnel();
        }
        
    }
    // Page results
    defineResultsPerPage(per: number) { 
        let link = ['/personnel', this.listParams.id, {
            query: this.listParams.query,
            layout: this.listParams.layout,
            perPage: per
        }];
        this.router.navigate(link);
    }

    // Retrieve data via service 
    getPersonnel(): void { 
        this.personnelService.getPersonnel()
            .then(
                personnel => {
                    this.personnel = personnel;
                }
            );
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
    selectLayout(layout: string): void {
        this.listParams.layout = layout;
        let link = ['/personnel', this.listParams.id, {
            query: this.listParams.query,
            layout: this.listParams.layout,
            perPage: this.listParams.perPage
        }];
        this.router.navigate(link);
    }
    // Select person clicked on in layout; called by evalParams()
    selectPerson(id: number) {
        this.personnelService.getPerson(id)
            .then( (person) => {
                this.selectedPerson = person;
            });
    }
    // Filter results
    setQuery(query: string) {
        console.log(query);
        let link: [any];
        this.listParams.query = query;
        link = ['/personnel', this.listParams.id, {
            query: this.listParams.query,
            layout: this.listParams.layout,
            perPage: this.listParams.perPage
        }];
        this.router.navigate(link);
    }
    filterResults(query: string) {
        this.personnelService.filterResults(query).then(personnel => {
            this.personnel = personnel;
            if (this.grouping) {
                this.groupBy(this.grouping);
            }
        });
    }

    // Group results
    groupBy(col: string) {
        let controlMap = {
            '(none)': undefined,
            'Year joined': 'joined',
            'Job type': 'job',
            'Programs': 'programs',
            'Missions': 'missions'
        };

        col = controlMap[col];
        if (col === undefined) {
            this.groups = undefined;
            return;
        }
        
        // Refactor - Better, scalable handing of keys referencing Arrays
        let groups: {} = {};
        this.personnel.forEach((person: Person, idx: number, arr: Person[]) => {
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
                if (!groups[ person[column][nested_idx] ]) {
                    groups[ person[column][nested_idx] ] = [];
                }
                groups[ person[column][nested_idx] ].push(person);
            }
        }
        this.grouping = col;  // Stores the column value by which list is grouped
        this.groups = groups; // Personnel list stored in column list groups
        this.keys = Object.keys(groups); // Keys of all groups
    }
 }