import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProjectService } from './project.service';
import { Project } from './project';

@Component({
    selector: 'project-detail',
    templateUrl: 'app/projects/project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {
    project: Project;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private projectService: ProjectService
    ) { }

    ngOnInit(): void {
        this.route.params.forEach( (params: Params) => {
            let id = +params['id'];
            this.projectService.getProject(id)
                .then( (project) => this.project = project );
        });
    }
 }