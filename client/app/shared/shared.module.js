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
/* Pipes */
var page_list_pipe_1 = require('./list-manipulation/page-list.pipe');
/* Directives */
var iterator_directive_1 = require('./iterator.directive');
/* Components */
var list_layout_component_1 = require('./list-layout.component');
var grid_layout_component_1 = require('./grid-layout.component');
/* Modules */
var table_module_1 = require('./table/table.module');
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                table_module_1.TableModule
            ],
            declarations: [
                list_layout_component_1.ListLayoutComponent,
                grid_layout_component_1.GridLayoutComponent,
                page_list_pipe_1.PageListPipe,
                iterator_directive_1.IteratorDirective
            ],
            exports: [
                common_1.CommonModule,
                list_layout_component_1.ListLayoutComponent,
                grid_layout_component_1.GridLayoutComponent,
                table_module_1.TableModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map