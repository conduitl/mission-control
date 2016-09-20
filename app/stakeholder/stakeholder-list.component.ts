import { Component } from '@angular/core';

export class Personnel {
    name: string;
    job: string;
}

const personnel: Personnel[] = [
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
    template: '<h1>Stakeholders</h1>'
})
export class StakeholderListComponent { }