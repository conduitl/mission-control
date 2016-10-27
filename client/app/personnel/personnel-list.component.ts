import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Pagination } from './list-manipulation/lists.model';

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
        id: number,
        layout: string,
        query: string,
        page: number
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

    // paging
    pagination: Pagination;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private personnelService: PersonnelService ) { 
        //constructor
    }
    
    ngOnInit(): void {
        this.extractRouteParams();
    }

    // Paging functions
    setupPagination(per_page, list_len) {
        this.pagination = {
            firstOnPage: 0,
            lastOnPage: per_page,
            resultsPer: per_page,
            currentPage: 1,
            pageCount: list_len / per_page
        };
    }
    nextPage() {
        let per = this.pagination.resultsPer;
        if (this.pagination.currentPage++ >= this.pagination.pageCount) {
            console.log('No more page results');
            return;
        }
        this.pagination.currentPage++;
        this.pagination.firstOnPage += per;
        this.pagination.lastOnPage += per;
    }
    prevPage() {
        let per = this.pagination.resultsPer;
        if (this.pagination.firstOnPage - per < 0) {
            console.log('No previous page results');
            return;
        }
        this.pagination.currentPage --;
        this.pagination.firstOnPage -= per;
        this.pagination.lastOnPage -= per;
    }

    // Extract and evaluate the route parameters
    extractRouteParams() {
        this.route.params.forEach( (params: Params) => {
            this.listParams = {
                id: +params['id'],
                layout:  params['layout'],
                query: params['query'],
                page: params['page']
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
        if (this.listParams.page == undefined) {
            this.listParams.page = 1;
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
            .then(
                personnel => {
                    this.personnel = personnel;
                    this.setupPagination(20, personnel.length);
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
            layout: this.listParams.layout
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