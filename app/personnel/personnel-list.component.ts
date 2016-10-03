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
    selectedId: number;
    personnel: Person[];
    selectedPerson: Person;
    layout: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private personnelService: PersonnelService ) { 
        //constructor
    }
    
    ngOnInit(): void {
        this.route.params.forEach( (params: Params) => {
            this.selectedId = +params['id'];
            this.layout = params['layout'];
            this.getPersonnel();
        });
    }
    getPersonnel(): void { 
        this.personnelService.getPersonnel()
            .then( (personnel) => {
                this.personnel = personnel;11
                if (this.selectedId) {
                    let id = this.selectedId;
                    this.selectPerson(id);
                }
            }); 
    }
    selectLayout(layout: string): void {
        let link = ['/personnel', this.selectedId, { layout: layout }];
        this.router.navigate(link);
    }
    selectPerson(id: number) {
        this.selectedPerson = this.personnel.find( (person) => {
            return person.id === id;
        });
    }

 }