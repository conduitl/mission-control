import { Component, Input } from '@angular/core';

import { Person } from './person';

@Component({
    selector: 'person-detail',
    templateUrl: 'app/stakeholder/person-detail.component.html'
})
export class PersonDetailComponent {
    @Input()
    person: Person;
 }