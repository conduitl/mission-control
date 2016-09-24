import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
    selector: 'project-list',
    templateUrl: 'app/projects/project-list.component.html',
    styles: [`
        .selected {
            background-color: #CFD8DC;
            color: white;
        }
    `]
})
export class ProjectListComponent implements OnInit { 
    // Issues
    // #initSelection
    // * when ':id' route param navigated to via url, corresponding project should be highlighted in table oninit
    private selectedId: number;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private projectService: ProjectService
    ) { }
    projects: Project[];
    programs; // Need to setup type w/ class model
    ngOnInit(): void {
        this.route.params.forEach( (params: Params) => {
            this.selectedId = +params['id'];
            this.getProjects();
        })
        
    }
    getPrograms(): void {
        this.projectService.getPrograms()
            .then( (programs) => {
                this.programs = programs;
            });
    }
    getProjects(): void {
        this.projectService.getProjects()
            .then( (projects) => {
                this.projects = projects;
            });
    }
    onSelect(project: Project): void {
        // Navigate with relative link | see commented out code below showing alternative absolute path nav
        this.router.navigate([project.id], { relativeTo: this.route });
        //this.router.navigate(['/projects', project.id]);
        this.selectedId = project.id; // successfully driving row highlights on click
    }
    isSelected(project: Project) {
        return project.id === this.selectedId;
    }
}