import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonnelManagerComponent } from './personnel-manager.component';
import { PersonnelListComponent } from './personnel-list.component';
import { PersonDetailComponent } from './person-detail.component';

const personnelRoutes: Routes = [
    { path: 'personnel', component: PersonnelManagerComponent, children: 
        [
            { path: '', component: PersonnelListComponent }
        ]
    },
    { path: 'person/:id', component: PersonDetailComponent }
];

export const personnelRouting: ModuleWithProviders = RouterModule.forChild(personnelRoutes);