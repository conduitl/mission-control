import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Feature root
import { ProjectCenterComponent } from './project-center.component';

const projectRoutes: Routes = [
    { 
        path: 'projects', component: ProjectCenterComponent
    }
];

export const projectRouting: ModuleWithProviders = RouterModule.forChild(projectRoutes);