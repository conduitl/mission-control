import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from './person';

import { PersonnelService } from './personnel.service';

@Component({
    selector: 'stakeholder-list',
    templateUrl: 'app/stakeholder/stakeholder-list.component.html',
    styles: [`
        .selected {
            background-color: #CFD8DC;
            color: white;
        }
        tr.row-selectable {
            cursor: pointer;
        }
        tr.row-selectable td span {
            cursor: auto;
        }

    `]
})
export class StakeholderListComponent implements OnInit {
    constructor(
        private router: Router,
        private personnelService: PersonnelService ) { 
        //constructor
    }
    personnel: Person[];
    selectedPerson: Person;
    ngOnInit(): void {
        this.getPersonnel();
    }
    getPersonnel(): void { 
        this.personnelService.getPersonnel().then( (personnel) => this.personnel = personnel); 
    }
    onSelect(person: Person): void {
        this.selectedPerson = person;
    }
    gotoDetail(person: Person): void { 
        let link = ['/person', person.id];
        this.router.navigate(link);
    }
 }