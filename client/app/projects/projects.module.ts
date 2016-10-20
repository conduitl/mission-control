import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectCenterComponent } from './project-center.component';

import { projectRouting } from './projects.routing';

@NgModule({
    imports: [ 
        CommonModule,
        projectRouting 
    ],
    declarations: [
        ProjectCenterComponent
    ],
    providers: [
    ]
})
export class ProjectsModule { }