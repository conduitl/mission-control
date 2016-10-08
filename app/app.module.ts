import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// root
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { HttpModule, JsonpModule } from '@angular/http';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

// features
import { ProjectsModule } from './projects/projects.module';
import { PersonnelModule } from './personnel/personnel.module';
import { AdminModule } from './admin/admin.module';
import { AssetsModule } from './assets/assets.module';

import { NavbarModule } from './navbar/navbar.module';

// authorization
import { LoginComponent } from './login.component';

@NgModule({
    imports: [ 
        BrowserModule,
        HttpModule,
        JsonpModule, 
        NavbarModule,
        routing,
        PersonnelModule,
        ProjectsModule,
        AssetsModule,
        AdminModule
    ],
    declarations: [ 
        AppComponent,
        LoginComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [ AppComponent ] 
})
export class AppModule { }