import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// root
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

// features
import { ProjectsModule } from './projects/projects.module';
import { StakeholderModule } from './stakeholder/stakeholder.module';

import { NavbarModule } from './navbar/navbar.module';

@NgModule({
    imports: [ 
        BrowserModule, 
        NavbarModule,
        routing,
        StakeholderModule,
        ProjectsModule
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