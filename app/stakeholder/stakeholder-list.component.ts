import { Component, OnInit } from '@angular/core';

import { Person } from './person';

import { PersonnelService } from './personnel.service';

@Component({
    selector: 'stakeholder-list',
    templateUrl: 'app/stakeholder/stakeholder-list.component.html',
    styles: [`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }
    `],
    providers: [PersonnelService]
})
export class StakeholderListComponent implements OnInit {
    constructor(private personnelService: PersonnelService) { 
        //constructor
    }
    personnel: Person[];
    selectedPerson: Person;
    ngOnInit(): void {
        this.getPersonnel();
    }
    getPersonnel(): void { 
        this.personnel = this.personnelService.getPersonnel(); 
    }
    onViewDetails(person: Person): void {
        this.selectedPerson = person;
    }
 }