import { Component } from '@angular/core';

import { Person } from './person';

@Component({
    selector: 'quick-add',
    templateUrl: 'app/personnel/quick-add.component.html'
})
export class QuickAddComponent {
    model: Person = {
        id:  500,
        name: 'Thomas Rundle',
        job: 'Developer',
        joined: undefined
    }

    submitted = false;

    onSubmit() { this.submitted = true; }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}