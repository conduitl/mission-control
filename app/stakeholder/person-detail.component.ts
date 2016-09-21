import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PersonnelService } from './personnel.service';

import { Person } from './person';

@Component({
    selector: 'person-detail',
    templateUrl: 'app/stakeholder/person-detail.component.html'
})
export class PersonDetailComponent implements OnInit {
    person: Person;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private personnelService: PersonnelService) { }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.personnelService.getPerson(id)
                .then( (person) => this.person = person);
        });
    }
    gotoStakeholders(): void {
        let personId = this.person ? this.person.id : null;
        this.router.navigate(['/stakeholders', { id: personId }]);
    }
 }