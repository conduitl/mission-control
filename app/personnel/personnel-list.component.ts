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
                this.personnel = personnel;11
                if (this.selectedId) {
                    let id = this.selectedId;
                    this.selectPerson(id);
                }
            }); 
    }
    onSelect(person: Person): void {
        let id = person.id;
        this.router.navigate(['/personnel', id]);
    }
    isSelected(person: Person) {
        return person.id === this.selectedId;
    }
    selectPerson(id: number) {
        this.selectedPerson = this.personnel.find( (person) => {
            return person.id === id;
        });
    }
    // List operations for views
    makeCSList(arr: [string]) {
        return arr.reduce( (pre, cur) => {
            return pre + ', ' + cur;
        });
    }
 }