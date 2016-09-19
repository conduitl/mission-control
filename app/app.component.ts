import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <h1>{{title}}</h1>
        <project-summary></project-summary>
        <stakeholder-management></stakeholder-management>
    `
})
export class AppComponent {
    title = 'Project Dashboard';
 }