import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// root
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { HttpModule, JsonpModule } from '@angular/http';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

// features
import { HomeModule } from './home/home.module';
import { ProjectsModule } from './projects/projects.module';
import { PersonnelModule } from './personnel/personnel.module';
import { AdminModule } from './admin/admin.module';
import { AssetsModule } from './assets/assets.module';

import { NavbarModule } from './navbar/navbar.module';

// authorization
import { LoginComponent } from './login.component';

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
        AssetsModule,
        AdminModule,
        routing
    ],
    declarations: [ 
        AppComponent,
        LoginComponent
    ],
    providers: [
        appRoutingProviders, PersonnelService
    ],
    bootstrap: [ AppComponent ] 
})
export class AppModule { }