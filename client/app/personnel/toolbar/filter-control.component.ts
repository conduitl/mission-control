import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'filter-control',
    template: `
    <span class="form-group">
        <label for="filter">Filter by:</label>
        <input #search name="filter" id="filter" type="text" class="form-control" placeholder="Input text to filter the list"
        [value]="query" (keyup)="setQuery(search.value)" name="filter">
    </span>
    `
})
export class FilterControlComponent { 
    // listParams
    @Input() query: string;
    // setQuery
    @Output() pushQuery = new EventEmitter<string>();

    setQuery(query: string) {
        this.pushQuery.emit(query);
    }
}