import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssetsComponent } from './assets.component';
const assetsRoutes: Routes = [
    {
        path: 'assets',
        component: AssetsComponent
    }
];
export const assetsRouting: ModuleWithProviders = RouterModule.forChild(assetsRoutes);
