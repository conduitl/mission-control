import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AddProjectComponent } from './add-project.component';
//Feature root
import { ProjectCenterComponent } from './project-center.component';

const projectRoutes: Routes = [
    { 
        path: 'projects', 
        children: [
            { path: '', component: ProjectCenterComponent },
            { path: 'add', component: AddProjectComponent }
        ]
        
    }
];

export const projectRouting: ModuleWithProviders = RouterModule.forChild(projectRoutes);