import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProjectDashboardComponent } from './project-dashboard.component';
import { ProjectListComponent } from './project-list.component';

const projectRoutes: Routes = [
    { path: 'projects', component: ProjectDashboardComponent }
];

export const projectRouting: ModuleWithProviders = RouterModule.forChild(projectRoutes);