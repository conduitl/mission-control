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
var ProjectListComponent = (function () {
    function ProjectListComponent() {
    }
    ProjectListComponent.prototype.ngOnChanges = function () {
        // while were at it with config, we should make it so the config identifies the right keys rather than pulling from the first index which may not contain all optional properties
        this.listObjKeys = Object.keys(this.list[0]);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ProjectListComponent.prototype, "list", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ProjectListComponent.prototype, "config", void 0);
    ProjectListComponent = __decorate([
        core_1.Component({
            selector: 'ct7-project-list',
            templateUrl: 'app/projects/project-list.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectListComponent);
    return ProjectListComponent;
}());
exports.ProjectListComponent = ProjectListComponent;
//# sourceMappingURL=project-list.component.js.map