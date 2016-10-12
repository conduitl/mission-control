import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Feature root
import { ProjectCenterComponent } from './project-center.component';

//Project Center children
import { ProjectDashboardComponent } from './project-dashboard.component';
import { ProjectListComponent } from './project-list.component';

//Project List children
import { SummaryComponent } from './summary.component';
import { ProjectDetailComponent } from './project-detail.component';

const projectRoutes: Routes = [
    { 
        path: 'projects', 
        component: ProjectCenterComponent
        // children: [
        //     {
        //         path: '',
        //         component: ProjectListComponent,
        //         children: [
        //             {
        //                 path: ':id',
        //                 component: ProjectDetailComponent
        //             },
        //             {
        //                 path: '',
        //                 component: SummaryComponent
        //             }
        //         ]
        //     }
        // ]
    }
];

export const projectRouting: ModuleWithProviders = RouterModule.forChild(projectRoutes);