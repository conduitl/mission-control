import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
        PersonnelListComponent,
        PersonDetailComponent
    ],
    providers: [
        PersonnelService
    ]
})
export class PersonnelModule { }