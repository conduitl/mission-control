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
var project_center_component_1 = require('./project-center.component');
var project_list_component_1 = require('./project-list.component');
var project_dashboard_component_1 = require('./project-dashboard.component');
var summary_component_1 = require('./summary.component');
var project_service_1 = require('./project.service');
var projects_routing_1 = require('./projects.routing');
var ProjectsModule = (function () {
    function ProjectsModule() {
    }
    ProjectsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                projects_routing_1.projectRouting
            ],
            declarations: [
                project_center_component_1.ProjectCenterComponent,
                project_list_component_1.ProjectListComponent,
                project_dashboard_component_1.ProjectDashboardComponent,
                summary_component_1.SummaryComponent
            ],
            providers: [
                project_service_1.ProjectService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectsModule);
    return ProjectsModule;
}());
exports.ProjectsModule = ProjectsModule;
//# sourceMappingURL=projects.module.js.map