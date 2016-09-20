import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StakeholderListComponent } from './stakeholder-list.component';

const stakeholderRoutes: Routes = [
    { path: 'stakeholders', component: StakeholderListComponent }
];

export const stakeholderRouting: ModuleWithProviders = RouterModule.forChild(stakeholderRoutes);