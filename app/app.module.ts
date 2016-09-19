import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectSummaryComponent } from './project-summary.component';
import { StakeholderManagementComponent } from './stakeholder.component';

import { NavbarModule } from './navbar/navbar.module';

@NgModule({
    imports: [ BrowserModule, NavbarModule ],
    declarations: [ AppComponent, ProjectSummaryComponent, StakeholderManagementComponent ],
    bootstrap: [ AppComponent ] 
})
export class AppModule { }