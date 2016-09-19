import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectListComponent } from './project-list.component';

const projectRoutes: Routes = [
    { path: 'projects', component: ProjectListComponent }
];

export const projectRouting: ModuleWithProviders = RouterModule.forChild(projectRoutes);