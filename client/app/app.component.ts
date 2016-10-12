import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container-fluid">
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent {
    
 }