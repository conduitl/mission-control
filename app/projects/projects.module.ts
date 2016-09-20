import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectCenterComponent } from './project-center.component';
import { ProjectListComponent } from './project-list.component';
import { ProjectDashboardComponent } from './project-dashboard.component';
import { SummaryComponent } from './summary.component';

import { ProjectService } from './project.service';

import { projectRouting } from './projects.routing';

@NgModule({
    imports: [ 
        CommonModule,
        projectRouting 
    ],
    declarations: [
        ProjectCenterComponent,
        ProjectListComponent,
        ProjectDashboardComponent,
        SummaryComponent
    ],
    providers: [
        ProjectService
    ]
})
export class ProjectsModule { }