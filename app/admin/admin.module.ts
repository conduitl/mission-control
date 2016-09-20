import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent  } from './admin-dashboard.component';
import { ManageProjectsComponent  } from './manage-projects.component';
import { ManagePersonnelComponent } from './manage-personnel.component';

import { adminRouting } from './admin.routing';

@NgModule({
    imports: [
        CommonModule,
        adminRouting
    ],
    declarations: [
        AdminComponent,
        AdminDashboardComponent,
        ManageProjectsComponent,
        ManagePersonnelComponent
    ]
})
export class AdminModule { }