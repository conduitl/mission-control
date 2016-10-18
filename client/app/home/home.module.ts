import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';

import { homeRouting } from './home.routing';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        homeRouting
    ],
    declarations: [
        HomeComponent
    ],
    providers: []
})
export class HomeModule { }