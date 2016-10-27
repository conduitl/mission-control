import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'toolbar',
    template: `                    
        <div class="col-sm-6 col-md-6 form-inline">
            <filter-control 
                [query]="listParams.query"
                (pushQuery)="propagateQuery($event)"></filter-control>
        </div>
        <div class="col-sm-6 col-md-4 form-inline">
            <grouping-control (group)="propagateGroup($event)"></grouping-control>
        </div>
        <div class="col-md-2 hidden-sm hidden-xs">
            <toggle-layout 
                [layout]="listParams.layout"
                (toggle)="propagateLayout($event)"></toggle-layout>
            
            <!-- Quick add button -->
            <!--TODO: Implement functionality-->
            <!--<button *ngIf="!modeMap.add" class="btn btn-primary pull-right" title="Add someone to the list"
                    (click)="toggleMode('add')">
                <span class="glyphicon glyphicon-plus"></span>
            </button>
            <button *ngIf="modeMap.add" class="btn btn-danger pull-right" title="Add someone to the list"
                    (click)="toggleMode('add')">
                <span class="glyphicon glyphicon-remove"></span>
            </button>-->
        </div>
    `
})
export class ToolbarComponent {
    @Input() listParams;
    @Output() layout = new EventEmitter();
    @Output() query = new EventEmitter();
    @Output() group = new EventEmitter();

    propagateLayout(event) {
        this.layout.emit(event);
    }
    propagateQuery(event) {
        this.query.emit(event);
    }
    propagateGroup(event) {
        this.group.emit(event);
    }
}