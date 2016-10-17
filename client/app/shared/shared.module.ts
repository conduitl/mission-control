import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListLayoutComponent } from './list-layout.component';
import { GridLayoutComponent } from './grid-layout.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ListLayoutComponent,
        GridLayoutComponent
    ],
    exports: [
        CommonModule,
        ListLayoutComponent,
        GridLayoutComponent
    ]
})
export class SharedModule { }
