import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PersonnelService } from './personnel.service';

import { Person } from './person';

@Component({
    selector: 'person-detail',
    templateUrl: 'app/stakeholder/person-detail.component.html'
})
export class PersonDetailComponent implements OnInit {
    person: Person;

    constructor(
        private personnelService: PersonnelService,
        private route: ActivatedRoute ) { }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.personnelService.getPerson(id)
                .then( (person) => this.person = person);
        });
    }
    goBack(): void {
        window.history.back();
    }
 }