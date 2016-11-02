import { Component } from '@angular/core';
import { Project, FilterEvent } from './project.model';
import { Projects } from './project.mockdata';

// Project Center will actually call the service rather than allow the list to
// this is because project center needs to verify that the projects are projects
// the list needs to be a shared template that will display any kind of list.

@Component({
    selector: 'project-center',
    template:`
        <div class="container-fluid">
            <div class="page-header">
                <h1>Project Center - Coming soon</h1>
                <hr>
                <ct7-project-toolbar (onFilter)="displayAlert($event)"></ct7-project-toolbar>
                <div *ngIf="alert" class="alert alert-info">Filter term is '{{alert}}'. Number of events fired so far: {{totalEvents}}</div>
                <ct7-project-list [list]="projects" [config]="projectColFormat"></ct7-project-list>
            </div>
        </div>
    `
})
export class ProjectCenterComponent {
    // Add a few mock projects
    projects: Project[] = Projects;
    // project column formatting info
    projectColFormat = {
        id: null,
        name: null,
        launch_date: 'date:MMM y',
        project_manager: null,
        budget: 'currency:USD:true'
    }
    // Temporary prop to store output values from toolbar
    alert: string;
    totalEvents: number;

    displayAlert(event: FilterEvent) {
        if (event && event.currentEvent !== undefined) {
            this.alert = event.currentEvent;
            this.totalEvents = event.totalEventsFired;
        } 
    }
 }