import { Component, OnInit } from '@angular/core';
import { Project, ProjectFormat, FilterEvent } from '../fake-data-gen/project.model';
import { ProjectService } from './project.service';
import { ColumnSetting } from '../shared/table/layout.model';

// Project Center will actually call the service rather than allow the list to
// this is because project center needs to verify that the projects are projects
// the list needs to be a shared template that will display any kind of list.

@Component({
    selector: 'project-center',
    templateUrl: 'app/projects/project-center.component.html'
})
export class ProjectCenterComponent implements OnInit {
    /* Settings for table */
    projectSettings: ColumnSetting[] = 
      [
          {
              primaryKey: 'name'
          },
          {
              primaryKey: 'first_launch',
              header: 'First Launch',
              alternativeKeys: ['launch_date', 'first_flight']
          },
          {
              primaryKey: 'budget',
              format: 'currency'
          },
          {
              primaryKey: 'spend',
              format: 'currency'
          },
          {
              primaryKey: 'percent_budget_spent',
              header: 'Spend %'
          }
      ];

    // Project data
    projects: Project[];
    // project column formatting info
    projectColFormat: ProjectFormat;
    /* Search filter settings */
    filterConfig = {
        exclude_keys: ['launch_date', 'budget']
    };

    /* Alert for invalid toolbar entries */
    alert: string;

    /* Service injection */
    constructor(private projectService: ProjectService){}


    /* Initialization */
    ngOnInit() {
        this.projects = this.projectService.getProjects();
    }

    /* Component class methods */
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