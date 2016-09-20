import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container-fluid">
            <h1>{{title}}</h1>
            <hr />
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent {
    title = 'Eating the world';
 }