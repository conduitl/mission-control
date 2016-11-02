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
        this.listObjKeys = Object.keys(this.config);
    }
}