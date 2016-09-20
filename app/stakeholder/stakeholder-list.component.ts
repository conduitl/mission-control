import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

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
    private selectedId: number;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private personnelService: PersonnelService ) { 
        //constructor
    }
    personnel: Person[];
    selectedPerson: Person;
    ngOnInit(): void {
        this.route.params.forEach( (params: Params) => {
            this.selectedId = +params['id'];
            this.getPersonnel();
        });
    }
    getPersonnel(): void { 
        this.personnelService.getPersonnel()
            .then( (personnel) => {
                this.personnel = personnel
                if (this.selectedId) {
                    let id = this.selectedId;
                    this.selectPerson(id);
                }
            }); 
    }
    onSelect(person: Person): void {
        let id = person.id;
        this.selectedId = id;
        this.selectPerson(id);
    }
    isSelected(person: Person) {
        return person.id === this.selectedId;
    }
    selectPerson(id: number) {
        this.selectedPerson = this.personnel.find( (person) => {
            return person.id === id;
        });
    }
    gotoDetail(person: Person): void { 
        let link = ['/person', person.id];
        this.router.navigate(link);
    }
 }