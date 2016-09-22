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
var project_service_1 = require('./project.service');
var ProjectListComponent = (function () {
    function ProjectListComponent(route, router, projectService) {
        this.route = route;
        this.router = router;
        this.projectService = projectService;
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.selectedId = +params['id'];
            _this.getProjects();
        });
    };
    ProjectListComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects()
            .then(function (projects) {
            _this.projects = projects;
        });
    };
    ProjectListComponent.prototype.onSelect = function (project) {
        // Navigate with relative link | see commented out code below showing alternative absolute path nav
        this.router.navigate([project.id], { relativeTo: this.route });
        //this.router.navigate(['/projects', project.id]);
        this.selectedId = project.id; // successfully driving row highlights on click
    };
    ProjectListComponent.prototype.isSelected = function (project) {
        return project.id === this.selectedId;
    };
    ProjectListComponent = __decorate([
        core_1.Component({
            selector: 'project-list',
            template: "\n        <router-outlet></router-outlet>\n        <h3>All Projects</h3>\n        <hr />\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Date</th>\n                    <th>Astronauts</th>\n                    <th>...</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let project of projects\"\n                    [class.selected]=\"isSelected(project)\"\n                    (click)=\"onSelect(project)\">\n                    <td>{{project.name}}</td>\n                    <td>{{project.mission_date}}</td>\n                    <td>{{project.personnel[0]}}</td>\n                    <td>\n                        <button class=\"btn btn-default\">view details</button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    ",
            styles: ["\n        .selected {\n            background-color: #CFD8DC;\n            color: white;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, project_service_1.ProjectService])
    ], ProjectListComponent);
    return ProjectListComponent;
}());
exports.ProjectListComponent = ProjectListComponent;
//# sourceMappingURL=project-list.component.js.map