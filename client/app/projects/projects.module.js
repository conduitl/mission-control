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
var shared_module_1 = require('../shared/shared.module');
var project_center_component_1 = require('./project-center.component');
var project_list_component_1 = require('./project-list.component');
var project_toolbar_component_1 = require('./project-toolbar.component');
var style_by_type_directive_1 = require('./directives/style-by-type.directive');
var key_header_pipe_1 = require('./pipes/key-header.pipe');
var format_by_type_pipe_1 = require('./pipes/format-by-type.pipe');
var common_1 = require('@angular/common');
var project_service_1 = require('./project.service');
var projects_routing_1 = require('./projects.routing');
var ProjectsModule = (function () {
    function ProjectsModule() {
    }
    ProjectsModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                projects_routing_1.projectRouting
            ],
            declarations: [
                project_center_component_1.ProjectCenterComponent,
                project_list_component_1.ProjectListComponent,
                project_toolbar_component_1.ProjectToolbarComponent,
                key_header_pipe_1.KeyHeaderPipe,
                format_by_type_pipe_1.FormatByTypePipe,
                style_by_type_directive_1.StyleByTypeDirective
            ],
            providers: [
                common_1.DatePipe, common_1.CurrencyPipe, project_service_1.ProjectService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectsModule);
    return ProjectsModule;
}());
exports.ProjectsModule = ProjectsModule;
//# sourceMappingURL=projects.module.js.map