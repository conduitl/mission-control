import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectDashboardComponent } from './project-dashboard.component';
import { ProjectListComponent } from './project-list.component';
import { projectRouting } from './projects.routing';

@NgModule({
    imports: [ 
        CommonModule,
        projectRouting 
    ],
    declarations: [
        ProjectDashboardComponent,
        ProjectListComponent
    ]
})
export class ProjectsModule { }