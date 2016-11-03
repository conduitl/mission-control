import { Component, OnInit } from '@angular/core';
import { Project, ProjectFormat, FilterEvent } from './project.model';
import { ProjectService } from './project.service';

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
                <ct7-project-toolbar (onFilter)="applyFilter($event, filterConfig)"></ct7-project-toolbar>
                <div *ngIf="alert" class="alert alert-info">Filter term is '{{alert}}'. Number of events fired so far: {{totalEvents}}</div>
                <ct7-project-list [list]="projects" [config]="projectColFormat"></ct7-project-list>
            </div>
        </div>
    `
})
export class ProjectCenterComponent implements OnInit {
    // Project data
    projects: Project[];
    // project column formatting info
    projectColFormat: ProjectFormat;
    // filter settings
    filterConfig = {
        exclude_keys: ['launch_date', 'budget']
    };
    // Temporary prop to store output values from toolbar
    alert: string;
    totalEvents: number;

    constructor(private projectService: ProjectService){}

    ngOnInit() {
        this.projects = this.projectService.getProjects();
        this.projectColFormat = this.projectService.defineValueFormats(
            {
                launch_date: 'date:MMM y',
                budget: 'currency:USD:true:1.0-0'
            }
        );
    }

    applyFilter(filter: string, settings?: { exclude_keys: string[] }) {
        this.projects = this.projectService.filterProjects(filter, settings);
    }

    displayAlert(event: FilterEvent) {
        if (event && event.currentEvent !== undefined) {
            this.alert = event.currentEvent;
            this.totalEvents = event.totalEventsFired;
        } 
    }
 }