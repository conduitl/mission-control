import { Component, OnInit } from '@angular/core';
import { Project, ProjectFormat, FilterEvent } from '../fake-data-gen/project.model';
import { ProjectService } from './project.service';

// Project Center will actually call the service rather than allow the list to
// this is because project center needs to verify that the projects are projects
// the list needs to be a shared template that will display any kind of list.

@Component({
    selector: 'project-center',
    templateUrl: 'app/projects/project-center.component.html'
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
                budget: 'currency:USD:true:1.0-0',
                spend: 'currency:USD:true:1.0-0'
            }
        );
    }

    applyFilter(filter: string, settings?: { exclude_keys: string[] }) {
        this.projects = this.projectService.filterProjects(filter, settings);
        this.clearAlert();
    }

    displayAlert(message: string) {
        this.alert = message;
    }
    clearAlert() {
        this.alert = null;
    }
 }