import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StakeholderManagementComponent } from './stakeholder.component';

const stakeholderRoutes: Routes = [
    { path: 'stakeholders', component: StakeholderManagementComponent }
];

export const stakeholderRouting: ModuleWithProviders = RouterModule.forChild(stakeholderRoutes);