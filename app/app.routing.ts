import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectSummaryComponent } from './project-summary.component';
import { StakeholderManagementComponent } from './stakeholder.component';

const appRoutes: Routes = [
    { path: 'project-summary', component: ProjectSummaryComponent },
    { path: 'stakeholder-management', component: StakeholderManagementComponent },
    { path: '', redirectTo: 'project-summary', pathMatch: 'full' }
];

// simplifies registration of router dependencies; will make use of later
export const appRoutingProviders: any[] = [];

// export the router
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);