import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StakeholderListComponent } from './stakeholder-list.component';
import { PersonDetailComponent } from './person-detail.component';

const stakeholderRoutes: Routes = [
    { path: 'stakeholders', component: StakeholderListComponent },
    { path: 'person/:id', component: PersonDetailComponent }
];

export const stakeholderRouting: ModuleWithProviders = RouterModule.forChild(stakeholderRoutes);