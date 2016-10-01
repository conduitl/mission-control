import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonnelManagerComponent } from './personnel-manager.component';
import { PersonnelListComponent } from './personnel-list.component';
import { ProfilePreviewComponent } from './profile-preview.component';
import { PersonDetailComponent } from './person-detail.component';

const personnelRoutes: Routes = [
    { path: 'personnel', component: PersonnelManagerComponent, children: 
        [
            { path: ':id', component: PersonnelListComponent },
            { path: ':id/details', component: PersonDetailComponent },
            { path: '', component: PersonnelListComponent },
            { path: 'preview', component: ProfilePreviewComponent, outlet: "aux"}
        ]
    },
    { path: 'person/:id', component: PersonDetailComponent }
];

export const personnelRouting: ModuleWithProviders = RouterModule.forChild(personnelRoutes);