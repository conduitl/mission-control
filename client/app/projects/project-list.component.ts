import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'ct7-project-list',
    templateUrl: 'app/projects/project-list.component.html'
})
export class ProjectListComponent implements OnChanges { 
    @Input() list: any[];
    @Input() config: {};
    listObjKeys: string[];

    ngOnChanges() {
        // while were at it with config, we should make it so the config identifies the right keys rather than pulling from the first index which may not contain all optional properties
        this.listObjKeys = Object.keys(this.list[0]);
    }
}