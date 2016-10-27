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
var ToggleLayoutComponent = (function () {
    function ToggleLayoutComponent() {
        this.toggle = new core_1.EventEmitter();
    }
    ToggleLayoutComponent.prototype.isLayoutSelected = function (layout_type) {
        return layout_type === this.layout;
    };
    ToggleLayoutComponent.prototype.selectLayout = function (layout_type) {
        this.toggle.emit(layout_type);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ToggleLayoutComponent.prototype, "layout", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ToggleLayoutComponent.prototype, "toggle", void 0);
    ToggleLayoutComponent = __decorate([
        core_1.Component({
            selector: 'toggle-layout',
            template: "\n        <div class=\"btn-group pull-right\" role=\"group\" aria-label=\"...\">\n            <button type=\"button\" class=\"btn btn-default\"\n                    [class.selected]=\"isLayoutSelected('list')\"\n                    (click)=\"selectLayout('list')\"\n                    title=\"Table view\">\n                <span class=\"glyphicon glyphicon-list-alt\">\n                </span>\n            </button>\n            <button type=\"button\" class=\"btn btn-default\"\n                    [class.selected]=\"isLayoutSelected('grid')\"\n                    (click)=\"selectLayout('grid')\"\n                    title=\"Thumbnail view\">\n                <span class=\"glyphicon glyphicon-th\"></span>\n            </button>\n        </div>\n    ",
            styles: ["\n        .glyphicon {\n            font-size: 16px;\n            margin-top: 2px;\n            margin-bottom: 2px;\n        }\n        .selected {\n            background-color: #333;\n            color: #eee;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], ToggleLayoutComponent);
    return ToggleLayoutComponent;
}());
exports.ToggleLayoutComponent = ToggleLayoutComponent;
//# sourceMappingURL=toggle-layout.component.js.map