import { Component, OnInit, HostBinding,
         trigger, transition, animate,    
         style, state } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { PersonnelService } from './personnel.service';

import { Person } from './person';

@Component({
    selector: 'person-detail',
    templateUrl: 'app/stakeholder/person-detail.component.html',
    animations: [
        trigger('routeAnimation', [
            state('*',
                style({
                    opacity: 1,
                    transform: 'translateX(0)'
                })
            ),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.2s ease-in')
            ]),
            transition('* => void', [
                animate('0.5s ease-out', style({
                    opacity: 0,
                    transfor: 'translateY(100%)'
                }))
            ])
        ])
    ]
})
export class PersonDetailComponent implements OnInit {
    /* Note from Dev Guide: Routing & Navigation --
       it's preferred to animate routes based on route paths,
       rather than adding route animations at the component level.
       Docs promise more on this topic in a future update.
    */
    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }

    @HostBinding('style.display') get display() {
        return 'block';
    }

    @HostBinding('style.position') get position() {
        return 'absolute';
    }
    /* end animation bindings */ 
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