import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProjectCenterComponent } from './project-center.component';
import { ProjectListComponent } from './project-list.component';
import { ProjectDashboardComponent } from './project-dashboard.component';
import { SummaryComponent } from './summary.component';

const projectRoutes: Routes = [
    { 
        path: 'projects', 
        component: ProjectCenterComponent,
        children: [
            {
                path: '',
                component: ProjectListComponent,
                children: [
                    {
                        path: ':id',
                        component: ProjectDashboardComponent
                    },
                    {
                        path: '',
                        component: SummaryComponent
                    }
                ]
            }
        ]
    }
];

export const projectRouting: ModuleWithProviders = RouterModule.forChild(projectRoutes);