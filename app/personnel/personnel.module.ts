import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonnelManagerComponent } from './personnel-manager.component';
import { PersonnelListComponent } from './personnel-list.component';
import { PersonDetailComponent } from './person-detail.component';

import { PersonnelService } from './personnel.service';

import { personnelRouting } from './personnel.routing';

@NgModule({
    imports: [
        CommonModule,
        personnelRouting
    ],
    declarations: [
        PersonnelManagerComponent,
        PersonnelListComponent,
        PersonDetailComponent
    ],
    providers: [
        PersonnelService
    ]
})
export class PersonnelModule { }