import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { loginRoutes,
         authProviders } from './login.routing';

const appRoutes: Routes = [
    ...loginRoutes
];

// simplifies registration of router dependencies; will make use of later
export const appRoutingProviders: any[] = [
    authProviders
];

// export the router
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);