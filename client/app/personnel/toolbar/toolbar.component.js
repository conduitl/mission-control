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
var ToolbarComponent = (function () {
    function ToolbarComponent() {
        this.layout = new core_1.EventEmitter();
        this.query = new core_1.EventEmitter();
        this.group = new core_1.EventEmitter();
    }
    ToolbarComponent.prototype.propagateLayout = function (event) {
        this.layout.emit(event);
    };
    ToolbarComponent.prototype.propagateQuery = function (event) {
        this.query.emit(event);
    };
    ToolbarComponent.prototype.propagateGroup = function (event) {
        this.group.emit(event);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ToolbarComponent.prototype, "listParams", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ToolbarComponent.prototype, "layout", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ToolbarComponent.prototype, "query", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ToolbarComponent.prototype, "group", void 0);
    ToolbarComponent = __decorate([
        core_1.Component({
            selector: 'toolbar',
            template: "                    \n        <div class=\"col-sm-6 col-md-6 form-inline\">\n            <filter-control \n                [query]=\"listParams.query\"\n                (pushQuery)=\"propagateQuery($event)\"></filter-control>\n        </div>\n        <div class=\"col-sm-6 col-md-4 form-inline\">\n            <grouping-control (group)=\"propagateGroup($event)\"></grouping-control>\n        </div>\n        <div class=\"col-md-2 hidden-sm hidden-xs\">\n            <toggle-layout \n                [layout]=\"listParams.layout\"\n                (toggle)=\"propagateLayout($event)\"></toggle-layout>\n            \n            <!-- Quick add button -->\n            <!--TODO: Implement functionality-->\n            <!--<button *ngIf=\"!modeMap.add\" class=\"btn btn-primary pull-right\" title=\"Add someone to the list\"\n                    (click)=\"toggleMode('add')\">\n                <span class=\"glyphicon glyphicon-plus\"></span>\n            </button>\n            <button *ngIf=\"modeMap.add\" class=\"btn btn-danger pull-right\" title=\"Add someone to the list\"\n                    (click)=\"toggleMode('add')\">\n                <span class=\"glyphicon glyphicon-remove\"></span>\n            </button>-->\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
exports.ToolbarComponent = ToolbarComponent;
//# sourceMappingURL=toolbar.component.js.map