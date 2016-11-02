import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Pipes */
import { PageListPipe } from './list-manipulation/page-list.pipe';

/* Directives */
import { IteratorDirective } from './iterator.directive';

/* Components */
import { ListLayoutComponent } from './list-layout.component';
import { GridLayoutComponent } from './grid-layout.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ListLayoutComponent,
        GridLayoutComponent,
        PageListPipe,
        IteratorDirective
    ],
    exports: [
        CommonModule,
        ListLayoutComponent,
        GridLayoutComponent
    ]
})
export class SharedModule { }
