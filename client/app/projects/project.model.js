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
//# sourceMappingURL=project.model.js.map