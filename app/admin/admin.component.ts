import { Component } from '@angular/core';

@Component({
    template: `
        <h3>ADMIN</h3>
        <nav>
            <a routerLink="./" routerLinkActive="active"
               [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
            <a routerLink="./projects" routerLinkActive="active">Manage Projects</a>
            <a routerLink="./personnel" routerLinkActive="active">Manage Personnel</a>
        </nav>
        <router-outlet></router-outlet>
    `
})
export class AdminComponent { }