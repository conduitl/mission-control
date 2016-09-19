import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// root
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

// features
import { ProjectSummaryComponent } from './project-summary.component';
import { StakeholderManagementComponent } from './stakeholder.component';

import { NavbarModule } from './navbar/navbar.module';

@NgModule({
    imports: [ 
        BrowserModule, 
        NavbarModule,
        routing
    ],
    declarations: [ 
        AppComponent, 
        ProjectSummaryComponent, 
        StakeholderManagementComponent 
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [ AppComponent ] 
})
export class AppModule { }