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
    listParams: {
        id: number,
        query: string,
        layout: string
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private personnelService: PersonnelService) { }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.listParams = {
                id: +params['id'],
                query: params['query'],
                layout: params['layout']
            }
            this.personnelService.getPerson( this.listParams.id )
                .then( (person) => this.person = person);
            this.personnelService.getBio( this.listParams.id )
                .then( (bio) => this.bio = bio );
        });
    }
 }