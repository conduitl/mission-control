import { Component, OnInit } from '@angular/core';

import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
    selector: 'project-list',
    template: `
        <h2>Projects Overview</h2>
        <p>Summary of projects here</p>
        <router-outlet></router-outlet>
        <h3>LIST OF PROJECTS</h3>
        <p>Table listing all the projects</p>
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Astronauts</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let project of projects">
                    <td>{{project.name}}</td>
                    <td>{{project.mission_date}}</td>
                    <td>{{project.personnel[0]}}</td>
                    <td>
                    
                    </td>
                </tr>
            </tbody>
        </table>
    `
})
export class ProjectListComponent implements OnInit { 
    constructor(
        private projectService: ProjectService
    ) { }
    projects: Project[];
    ngOnInit(): void {
        this.getProjects();
    }
    getProjects(): void {
        this.projectService.getProjects()
            .then ( (projects) => {
                this.projects = projects;
            });
    }
}