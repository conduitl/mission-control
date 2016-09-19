import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StakeholderManagementComponent } from './stakeholder.component';

import { stakeholderRouting } from './stakeholder.routing';

@NgModule({
    imports: [
        CommonModule,
        stakeholderRouting
    ],
    declarations: [
        StakeholderManagementComponent
    ]
})
export class StakeholderModule { }