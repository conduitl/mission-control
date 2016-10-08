import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import { PersonnelManagerComponent } from './personnel-manager.component';
import { PersonnelListComponent } from './personnel-list.component';
import { ProfilePreviewComponent } from './profile-preview.component';
import { PersonDetailComponent } from './person-detail.component';

import { ListLayoutComponent } from './list-layout.component';
import { GridLayoutComponent } from './grid-layout.component';

import { PersonnelService } from './personnel.service';

import { personnelRouting } from './personnel.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        personnelRouting
    ],
    declarations: [
        PersonnelManagerComponent,
        PersonnelListComponent,
        ProfilePreviewComponent,
        PersonDetailComponent,
        ListLayoutComponent,
        GridLayoutComponent
    ],
    providers: [
        PersonnelService
    ]
})
export class PersonnelModule { }