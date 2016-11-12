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
var project_model_1 = require('../fake-data-gen/project.model');
var projects_gen_1 = require('../fake-data-gen/projects-gen');
var ProjectService = (function () {
    function ProjectService() {
    }
    ProjectService.prototype.getProjects = function () {
        return projects_gen_1.ExampleProjects;
    };
    ProjectService.prototype.defineValueFormats = function (definition) {
        var format = new project_model_1.ProjectFormat();
        for (var prop in definition) {
            format[prop] = definition[prop];
        }
        return format;
    };
    ProjectService.prototype.filterProjects = function (term, settings) {
        var regexp = new RegExp(term, 'i');
        return projects_gen_1.ExampleProjects.filter(function (project) {
            var _loop_1 = function(prop) {
                var excluded = false, match = void 0;
                if (settings && settings.exclude_keys) {
                    excluded = settings.exclude_keys.some(function (val) {
                        return val === prop;
                    });
                }
                if (!excluded) {
                    match = regexp.test(project[prop]);
                    if (match) {
                        return { value: true };
                    }
                }
            };
            for (var prop in project) {
                var state_1 = _loop_1(prop);
                if (typeof state_1 === "object") return state_1.value;
            }
            return false;
        });
    };
    ProjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map