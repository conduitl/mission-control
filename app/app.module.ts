import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NavbarModule } from './navbar/navbar.module';

@NgModule({
    imports: [ BrowserModule, NavbarModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ] 
})
export class AppModule { }