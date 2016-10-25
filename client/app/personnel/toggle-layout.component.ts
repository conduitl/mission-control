import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
    selector: 'toggle-layout',
    template: `
        <div class="btn-group pull-right" role="group" aria-label="...">
            <button type="button" class="btn btn-default"
                    [class.selected]="isLayoutSelected('list')"
                    (click)="selectLayout('list')"
                    title="Table view">
                <span class="glyphicon glyphicon-list-alt">
                </span>
            </button>
            <button type="button" class="btn btn-default"
                    [class.selected]="isLayoutSelected('grid')"
                    (click)="selectLayout('grid')"
                    title="Thumbnail view">
                <span class="glyphicon glyphicon-th"></span>
            </button>
        </div>
    `,
    styles: [`
        .glyphicon {
            font-size: 16px;
            margin-top: 2px;
            margin-bottom: 2px;
        }
        .selected {
            background-color: #333;
            color: #eee;
        }
    `]
})
export class ToggleLayoutComponent {
    @Input() layout: string; 
    @Output() toggle = new EventEmitter<string>();

    isLayoutSelected(layout_type: string) {
        return layout_type === this.layout;
    }

    selectLayout(layout_type: string) {
        this.toggle.emit(layout_type);
    }
 }