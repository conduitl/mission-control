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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var toolbar_component_1 = require('./toolbar.component');
/* Filter, Group & Layout toolbar */
var toggle_layout_component_1 = require('./toggle-layout.component');
var grouping_control_component_1 = require('./grouping-control.component');
var filter_control_component_1 = require('./filter-control.component');
var ToolbarModule = (function () {
    function ToolbarModule() {
    }
    ToolbarModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule
            ],
            declarations: [
                toolbar_component_1.ToolbarComponent,
                toggle_layout_component_1.ToggleLayoutComponent,
                grouping_control_component_1.GroupingControlComponent,
                filter_control_component_1.FilterControlComponent
            ],
            exports: [
                toolbar_component_1.ToolbarComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ToolbarModule);
    return ToolbarModule;
}());
exports.ToolbarModule = ToolbarModule;
//# sourceMappingURL=toolbar.module.js.map