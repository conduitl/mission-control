import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ProjectCenterComponent } from './project-center.component';
import { ProjectToolbarComponent } from './project-toolbar.component';

import { DatePipe, CurrencyPipe } from '@angular/common';

import { ProjectService } from './project.service';

import { projectRouting } from './projects.routing';

@NgModule({
    imports: [ 
        SharedModule,
        projectRouting 
    ],
    declarations: [
        ProjectCenterComponent,
        ProjectToolbarComponent
    ],
    providers: [
        DatePipe, CurrencyPipe, ProjectService
    ]
})
export class ProjectsModule { }