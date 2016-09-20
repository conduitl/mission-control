import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsComponent } from './assets.component';
import { assetsRouting } from './assets.routing';
@NgModule({
    imports: [
        CommonModule,
        assetsRouting
    ],
    declarations: [
        AssetsComponent
    ]
})
export class AssetsModule { }