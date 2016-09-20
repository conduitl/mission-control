import { Component } from '@angular/core';

import { Person } from './person';

const PERSONNEL: Person[] = [
    { name: 'Alan B. Shepard, Jr.', job: 'astronaut' },
    { name: 'Virgil I. Grissom', job: 'astronaut' },
    { name: 'John H. Glenn, Jr.', job: 'astronaut' },
    { name: 'M. Scott Carpenter', job: 'astronaut' },
    { name: 'Walter M. Schirra, Jr.', job: 'astronaut' },
    { name: 'L. Gordon Cooper, Jr.', job: 'astronaut' },
    { name: 'Walter M. Schirra, Jr.', job: 'astronaut' },
    { name: 'Neil A. Armstrong', job: 'astronaut' },
    { name: 'Frank Borman', job: 'astronaut' },
    { name: 'Charles "Pete" Conrad', job: 'astronaut' },
    { name: 'James A. Lovell', job: 'astronaut' },
    { name: 'James A. McDivitt', job: 'astronaut' },
    { name: 'Thomas P. Stafford', job: 'astronaut' }
];

@Component({
    selector: 'stakeholder-list',
    templateUrl: 'app/stakeholder/stakeholder-list.component.html',
    styles: [`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }
    `]
})
export class StakeholderListComponent {
    personnel = PERSONNEL;
    selectedPerson: Person;

    onViewDetails(person: Person): void {
        this.selectedPerson = person;
    }
 }