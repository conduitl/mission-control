import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'grouping-control',
    template: `
        <div class="form-group">
            <label for="group-by">Group by:</label>
            <select #grouping name="group-by" id="group-by" class="form-control"
                [ngModel]="grouping.value"
                (ngModelChange)="groupBy(grouping.value)">
                <option>(none)</option>
                <option>Job type</option>
                <option>Year joined</option>
                <option>Programs</option>
                <option>Missions</option>
            </select>
        </div>
    `
})
export class GroupingControlComponent {
    @Output() group = new EventEmitter<string>();

    groupBy(group: string) {
        this.group.emit(group);
    }
}