import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ToolbarModule } from './toolbar/toolbar.module';
import { SharedModule } from '../shared/shared.module';

import { PersonnelManagerComponent } from './personnel-manager.component';
import { PersonnelListComponent } from './personnel-list.component';
import { ProfilePreviewComponent } from './profile-preview.component';
import { PersonDetailComponent } from './person-detail.component';

import { QuickAddComponent } from './quick-add.component';

import { personnelRouting } from './personnel.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ToolbarModule,
        SharedModule,
        personnelRouting
    ],
    declarations: [
        PersonnelManagerComponent,
        PersonnelListComponent,
        ProfilePreviewComponent,
        PersonDetailComponent,
        QuickAddComponent
    ],
    providers: [

    ]
})
export class PersonnelModule { }