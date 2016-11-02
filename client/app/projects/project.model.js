"use strict";
;
var Project = (function () {
    function Project(id, name, launch_date, project_manager, budget) {
        this.id = id;
        this.name = name;
        this.launch_date = launch_date;
        this.project_manager = project_manager;
        this.budget = budget;
    }
    return Project;
}());
exports.Project = Project;
var ProjectFormat = (function () {
    function ProjectFormat(id, name, launch_date, project_manager, budget) {
        if (id === void 0) { id = null; }
        if (name === void 0) { name = null; }
        if (launch_date === void 0) { launch_date = null; }
        if (project_manager === void 0) { project_manager = null; }
        if (budget === void 0) { budget = null; }
        this.id = id;
        this.name = name;
        this.launch_date = launch_date;
        this.project_manager = project_manager;
        this.budget = budget;
    }
    return ProjectFormat;
}());
exports.ProjectFormat = ProjectFormat;
//# sourceMappingURL=project.model.js.map