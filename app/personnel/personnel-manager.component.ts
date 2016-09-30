import { Component } from '@angular/core';

@Component({
    selector: 'personnel-manager',
    template: `
        <div class="page-header">
            <h1>Personnel <small>| The people who make up our organization</small></h1>
        </div>
        <router-outlet></router-outlet>
    `
})
export class PersonnelManagerComponent { }