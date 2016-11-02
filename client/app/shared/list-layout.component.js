"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var ListLayoutComponent = (function () {
    function ListLayoutComponent(router) {
        this.router = router;
        this.sortMap = {
            name: false,
            joined: false,
            year: false
        };
        this.fwd = 0;
        this.back = 0;
    }
    ListLayoutComponent.prototype.ngOnChanges = function () {
        this.pages = this.pageList(this.personnel, this.listParams.perPage);
    };
    ListLayoutComponent.prototype.pageList = function (personnel, perPage) {
        var len = personnel.length;
        var pageList = [], pages = [], lastItemIdx;
        var matchedPageNum;
        for (var i = 0; i < len; i++) {
            if (i === 0) {
                lastItemIdx = setLastIndex(0, perPage, len);
                console.log('Last Item Index = ' + lastItemIdx);
            }
            var obj = {
                idx: i,
                value: personnel[i]
            };
            pageList.push(obj);
            if (this.currentPage == undefined && this.listParams.id) {
                if (this.listParams.id === personnel[i].id) {
                    matchedPageNum = pages.length + 1;
                }
            }
            if (i >= lastItemIdx - 1) {
                pages.push(pageList.slice());
                pageList = [];
                lastItemIdx = setLastIndex(lastItemIdx, perPage, len);
                console.log('Last Item Index = ' + lastItemIdx);
            }
        }
        if (matchedPageNum) {
            this.updatePageNav(matchedPageNum, pages.length);
        }
        else if (this.currentPage == undefined || this.pageCount !== pages.length) {
            this.updatePageNav(1, pages.length);
        }
        return pages;
        function setLastIndex(cur, per, len) {
            if (cur + per < len) {
                return cur + per;
            }
            return len;
        }
    };
    ListLayoutComponent.prototype.nextPage = function () {
        var cur = this.currentPage;
        if (cur + 1 <= this.pageCount) {
            this.updatePageNav(cur + 1, this.pageCount);
        }
    };
    ListLayoutComponent.prototype.prevPage = function () {
        var cur = this.currentPage;
        if (cur > 1) {
            this.updatePageNav(cur - 1, this.pageCount);
        }
    };
    ListLayoutComponent.prototype.updatePageNav = function (currentPage, pageCount) {
        if (currentPage < pageCount) {
            this.fwd = 1;
        }
        else {
            this.fwd = 0;
        }
        if (currentPage > 1) {
            this.back = 1;
        }
        else {
            this.back = 0;
        }
        this.currentPage = currentPage;
        this.pageCount = pageCount;
    };
    ListLayoutComponent.prototype.onSelect = function (person) {
        var id = person.id;
        this.router.navigate(['/personnel', id, {
                query: this.listParams.query,
                layout: this.listParams.layout,
                perPage: this.listParams.perPage
            }]);
    };
    ListLayoutComponent.prototype.isSelected = function (person) {
        return person.id === this.listParams.id;
    };
    // List operations for views
    ListLayoutComponent.prototype.makeCSList = function (arr) {
        return arr.reduce(function (pre, cur) {
            return pre + ', ' + cur;
        });
    };
    // Sorting methods
    ListLayoutComponent.prototype.switch = function (obj, key) {
        if (obj[key]) {
            obj[key] = false;
            return false;
        }
        obj[key] = true;
        return true;
    };
    ListLayoutComponent.prototype.sort = function (personnel, column) {
        var ascend = this.switch(this.sortMap, column);
        if (ascend) {
            this.sortAscending(personnel, column);
        }
        else {
            this.sortDescending(personnel, column);
        }
        this.pages = this.pageList(personnel, this.listParams.perPage);
        this.updatePageNav(1, this.pages.length);
    };
    ListLayoutComponent.prototype.sortAscending = function (personnel, column) {
        return personnel.sort(function (a, b) {
            var col_a = a[column], col_b = b[column];
            if (col_a == undefined)
                col_a = 9999;
            if (col_b == undefined)
                col_b = 9999;
            if (col_a > col_b) {
                return 1;
            }
            if (col_a < col_b) {
                return -1;
            }
            return 0;
        });
    };
    ListLayoutComponent.prototype.sortDescending = function (personnel, column) {
        return personnel.sort(function (a, b) {
            var col_a = a[column], col_b = b[column];
            if (col_a == undefined)
                col_a = -9999;
            if (col_b == undefined)
                col_b = -9999;
            if (col_b > col_a) {
                return 1;
            }
            if (col_b < col_a) {
                return -1;
            }
            return 0;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ListLayoutComponent.prototype, "personnel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ListLayoutComponent.prototype, "listParams", void 0);
    ListLayoutComponent = __decorate([
        core_1.Component({
            selector: 'list-layout',
            templateUrl: 'app/shared/list-layout.component.html',
            styleUrls: ['app/shared/list-layout.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ListLayoutComponent);
    return ListLayoutComponent;
}());
exports.ListLayoutComponent = ListLayoutComponent;
//# sourceMappingURL=list-layout.component.js.map