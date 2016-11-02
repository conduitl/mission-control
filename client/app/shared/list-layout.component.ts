import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { Pagination } from './list-manipulation/lists.model';

import { Person } from '../personnel/person'; // TODO: Remove this coupling to the personnel folder

interface indexedPerson {
    idx: number;
    value: Person;
}

@Component({
    selector: 'list-layout',
    templateUrl: 'app/shared/list-layout.component.html',
    styleUrls: ['app/shared/list-layout.component.css']
})
export class ListLayoutComponent implements OnChanges {
    @Input() personnel: Person[];
    @Input() listParams: {
        id: number,
        query: string,
        layout: string,
        perPage: number
    };
    sortMap = {
        name: false,
        joined: false,
        year: false
    };
    // paging
    pages: indexedPerson[][];
    pageCount: number;
    currentPage: number;
    fwd: number = 0;
    back: number = 0;
    constructor(
        private router: Router
    ) { }

    ngOnChanges() {
        this.pages = this.pageList(this.personnel, this.listParams.perPage);
    }
    pageList(personnel: Person[], perPage:number): indexedPerson[][] {
        const len = personnel.length;
        let pageList:indexedPerson[] = [], pages: indexedPerson[][] = [], lastItemIdx: number;
        let matchedPageNum: number;
        for (let i = 0; i < len; i++) {
            if (i === 0) {
                lastItemIdx = setLastIndex( 0, perPage, len);
                console.log('Last Item Index = ' + lastItemIdx);
            }
            let obj = {
                idx: i,
                value: personnel[i]
            };
            pageList.push(obj);
            if (this.currentPage == undefined && this.listParams.id) { // handle case for nav by deep link to id or nav from details view
                if (this.listParams.id === personnel[i].id) {
                    matchedPageNum = pages.length + 1;
                }
            }
            if ( i >= lastItemIdx - 1 ) {
                pages.push(pageList.slice());
                pageList = [];
                lastItemIdx = setLastIndex( lastItemIdx, perPage, len);
                console.log('Last Item Index = ' + lastItemIdx);
            }
        }
        if (matchedPageNum) { // if theres an id in the routeParams, need to show page containing person selected by id
            this.updatePageNav(matchedPageNum, pages.length);
        }
        else if (this.currentPage == undefined || this.pageCount !== pages.length) { // reset to page 1 if initializing cmp or if personnel data has updated changing the num of pages
            this.updatePageNav(1, pages.length);
        }
        
        return pages;

        function setLastIndex( cur: number, per: number, len: number ) {
            if ( cur + per < len ) {
                return cur + per;
            } 
            return len;
        }
    }
    nextPage() {
        let cur = this.currentPage;
        if (cur + 1 <= this.pageCount) {
            this.updatePageNav(cur + 1, this.pageCount);
        }
    }
    prevPage() {
        let cur = this.currentPage;
        if (cur > 1) {
            this.updatePageNav(cur - 1, this.pageCount); 
        }
    }
    updatePageNav(currentPage: number, pageCount: number){
        if (currentPage < pageCount) {
            this.fwd = 1;
        } else {
            this.fwd = 0;
        }
        if (currentPage > 1) {
            this.back = 1;
        } else {
            this.back = 0;
        }
        this.currentPage = currentPage;
        this.pageCount = pageCount;
    }
    
    onSelect(person: Person): void {
        let id = person.id;
        this.router.navigate(['/personnel', id, {
            query: this.listParams.query,
            layout: this.listParams.layout,
            perPage: this.listParams.perPage
        }]);
    }
    isSelected(person: Person) {
        return person.id === this.listParams.id;
    }
    // List operations for views
    makeCSList(arr: [string]) {
        return arr.reduce( (pre, cur) => {
            return pre + ', ' + cur;
        });
    }

    // Sorting methods
    switch(obj, key): boolean {
        if (obj[key]) {
            obj[key] = false;
            return false;
        }
        obj[key] = true;
        return true;
    }
    sort(personnel: Person[], column) {
        let ascend: boolean = this.switch(this.sortMap, column);
        if (ascend) {
            this.sortAscending(personnel, column);
        } else {
            this.sortDescending(personnel, column);
        }
        this.pages = this.pageList(personnel, this.listParams.perPage);
        this.updatePageNav(1, this.pages.length);
    }
    sortAscending(personnel: Person[], column) {
        return personnel.sort( (a, b) => {
            let col_a = a[column], col_b = b[column];
            if (col_a == undefined) col_a = 9999;
            if (col_b == undefined) col_b = 9999;
            if ( col_a > col_b ) {
                return 1;
            }
            if ( col_a < col_b ) {
                return -1;
            }
            return 0;
        });
    }
    sortDescending(personnel: Person[], column) {
        return personnel.sort( (a, b) => {
            let col_a = a[column], col_b = b[column];
            if (col_a == undefined) col_a = -9999;
            if (col_b == undefined) col_b = -9999;
            if ( col_b > col_a ) {
                return 1;
            }
            if ( col_b < col_a ) {
                return -1;
            }
            return 0;
        }); 
    }
 }