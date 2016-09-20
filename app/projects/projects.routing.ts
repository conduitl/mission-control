import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProjectCenterComponent } from './project-center.component';
import { ProjectListComponent } from './project-list.component';
import { ProjectDashboardComponent } from './project-dashboard.component';

const projectRoutes: Routes = [
    { path: 'projects', component: ProjectCenterComponent }
];

export const projectRouting: ModuleWithProviders = RouterModule.forChild(projectRoutes);