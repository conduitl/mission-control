import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonnelListComponent } from './personnel-list.component';
import { PersonDetailComponent } from './person-detail.component';

const personnelRoutes: Routes = [
    { path: 'personnel', component: PersonnelListComponent },
    { path: 'person/:id', component: PersonDetailComponent }
];

export const personnelRouting: ModuleWithProviders = RouterModule.forChild(personnelRoutes);