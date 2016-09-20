import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// root
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

// features
import { ProjectsModule } from './projects/projects.module';
import { StakeholderModule } from './stakeholder/stakeholder.module';
import { AdminModule } from './admin/admin.module';
import { AssetsModule } from './assets/assets.module';

import { NavbarModule } from './navbar/navbar.module';

@NgModule({
    imports: [ 
        BrowserModule, 
        NavbarModule,
        routing,
        StakeholderModule,
        ProjectsModule,
        AssetsModule,
        AdminModule
    ],
    declarations: [ 
        AppComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [ AppComponent ] 
})
export class AppModule { }