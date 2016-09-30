import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { PersonnelService } from './personnel.service';

import { Person, Bio } from './person';

@Component({
    selector: 'person-detail',
    templateUrl: 'app/personnel/person-detail.component.html'
})
export class PersonDetailComponent implements OnInit {
    person: Person;
    bio: Bio;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private personnelService: PersonnelService) { }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.personnelService.getPerson(id)
                .then( (person) => this.person = person);
            this.personnelService.getBio(id)
                .then( (bio) => this.bio = bio );
        });
    }
    gotoStakeholders(): void {
        let personId = this.person ? this.person.id : null;
        this.router.navigate(['/stakeholders', { id: personId }]);
    }
 }