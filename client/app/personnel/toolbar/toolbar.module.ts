import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ToolbarComponent } from './toolbar.component';

/* Filter, Group & Layout toolbar */
import { ToggleLayoutComponent } from './toggle-layout.component';
import { GroupingControlComponent } from './grouping-control.component';
import { FilterControlComponent } from './filter-control.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ToolbarComponent,
        ToggleLayoutComponent,
        GroupingControlComponent,
        FilterControlComponent
    ],
    exports: [
        ToolbarComponent
    ]
})
export class ToolbarModule { }