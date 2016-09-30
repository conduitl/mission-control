import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Person } from './person';

import { PersonnelService } from './personnel.service';

@Component({
    selector: 'stakeholder-list',
    templateUrl: 'app/personnel/stakeholder-list.component.html',
    styleUrls: ['app/personnel/stakeholder-list.component.css']
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
        console.log('NgOnInit');
        console.log('value of selectedId = ' + this.selectedId);
        this.route.params.forEach( (params: Params) => {
            this.selectedId = +params['id'];
            this.getPersonnel();
        });
    }
    getPersonnel(): void { 
        this.personnelService.getPersonnel()
            .then( (personnel) => {
                console.log('Promise => then');
                console.log('value of selectedId = ' + this.selectedId);
                this.personnel = personnel;11
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

    // Preview 
    checkImg(person: Person) {
        if (person.img) {
            return person.img;
        } else {
            return 'http://placehold.it/300x300';
        }
    }
    // List operations for views
    makeCSList(arr: [string]) {
        return arr.reduce( (pre, cur) => {
            return pre + ', ' + cur;
        });
    }
 }