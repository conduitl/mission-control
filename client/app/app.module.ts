import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// root
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { HttpModule, JsonpModule } from '@angular/http';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

// features
import { HomeModule } from './home/home.module';
import { ProjectsModule } from './projects/projects.module';
import { PersonnelModule } from './personnel/personnel.module';

import { NavbarModule } from './navbar/navbar.module';

// services
import { PersonnelService } from './personnel/personnel.service';

@NgModule({
    imports: [ 
        BrowserModule,
        HttpModule,
        JsonpModule,
        HomeModule, 
        NavbarModule,
        PersonnelModule,
        ProjectsModule,
        routing
    ],
    declarations: [ 
        AppComponent
    ],
    providers: [
        appRoutingProviders, PersonnelService
    ],
    bootstrap: [ AppComponent ] 
})
export class AppModule { }