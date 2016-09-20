import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StakeholderListComponent } from './stakeholder-list.component';
import { PersonDetailComponent } from './person-detail.component';

import { stakeholderRouting } from './stakeholder.routing';

@NgModule({
    imports: [
        CommonModule,
        stakeholderRouting
    ],
    declarations: [
        StakeholderListComponent,
        PersonDetailComponent
    ]
})
export class StakeholderModule { }