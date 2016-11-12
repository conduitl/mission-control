import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ProjectCenterComponent } from './project-center.component';
import { ProjectListComponent } from './project-list.component';
import { ProjectToolbarComponent } from './project-toolbar.component';

import { StyleByTypeDirective } from './directives/style-by-type.directive';

import { KeyHeaderPipe } from './pipes/key-header.pipe';
import { FormatByTypePipe } from './pipes/format-by-type.pipe';

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
        ProjectListComponent,
        ProjectToolbarComponent,
        KeyHeaderPipe,
        FormatByTypePipe,
        StyleByTypeDirective
    ],
    providers: [
        DatePipe, CurrencyPipe, ProjectService
    ]
})
export class ProjectsModule { }