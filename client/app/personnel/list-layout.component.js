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
    }
    ListLayoutComponent.prototype.onSelect = function (person) {
        var id = person.id;
        this.router.navigate(['/personnel', id, {
                query: this.listParams.query,
                layout: this.listParams.layout
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
            templateUrl: 'app/personnel/list-layout.component.html',
            styleUrls: ['app/personnel/list-layout.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ListLayoutComponent);
    return ListLayoutComponent;
}());
exports.ListLayoutComponent = ListLayoutComponent;
//# sourceMappingURL=list-layout.component.js.map