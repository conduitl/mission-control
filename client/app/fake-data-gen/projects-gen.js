"use strict";
var project_model_1 = require('./project.model');
exports.ExampleProjects = (function () {
    var projects = [];
    for (var i = 0; i < 100; i++) {
        projects.push(new project_model_1.ExampleProject());
    }
    return projects;
}());
//# sourceMappingURL=projects-gen.js.map