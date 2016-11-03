"use strict";
;
var Project = (function () {
    function Project(id, name, launch_date, project_manager, budget) {
        this.id = id;
        this.name = name;
        this.launch_date = launch_date;
        this.project_manager = project_manager;
        this.budget = budget;
        this.spend = this.budget * .0004;
    }
    return Project;
}());
exports.Project = Project;
var ProjectFormat = (function () {
    function ProjectFormat(id, name, launch_date, project_manager, budget, spend, progress) {
        if (id === void 0) { id = null; }
        if (name === void 0) { name = null; }
        if (launch_date === void 0) { launch_date = null; }
        if (project_manager === void 0) { project_manager = null; }
        if (budget === void 0) { budget = null; }
        if (spend === void 0) { spend = null; }
        if (progress === void 0) { progress = null; }
        this.id = id;
        this.name = name;
        this.launch_date = launch_date;
        this.project_manager = project_manager;
        this.budget = budget;
        this.spend = spend;
        this.progress = progress;
    }
    return ProjectFormat;
}());
exports.ProjectFormat = ProjectFormat;
//# sourceMappingURL=project.model.js.map