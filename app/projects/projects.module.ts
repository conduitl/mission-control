import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectCenterComponent } from './project-center.component';
import { ProjectListComponent } from './project-list.component';
import { ProjectDashboardComponent } from './project-dashboard.component';
import { SummaryComponent } from './summary.component';
import { ProjectDetailComponent } from './project-detail.component';

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
        SummaryComponent,
        ProjectDetailComponent
    ],
    providers: [
        ProjectService
    ]
})
export class ProjectsModule { }