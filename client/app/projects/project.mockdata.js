"use strict";
var project_model_1 = require('./project.model');
// export const Projects: Project[] = [
//     new Project(151, 'Alpha Centauri Probe', new Date(2030, 2), 'Tom Rundle', 20000000000),
//     new Project(152, 'Neptune Colonization', new Date(2040, 5), 'Abi Gaurav', 5000000000000),
//     new Project(153, 'Orbital Power Plant', new Date(2035, 11), 'Danny Marquez', 100000000000),
//     new Project(154, 'Interstellar Gateway', new Date(2090, 0), 'Lana Plotkin', 70000000000000)
// ];
exports.ExampleProjects = (function () {
    var projects = [];
    for (var i = 0; i < 100; i++) {
        projects.push(new project_model_1.ExampleProject());
    }
    return projects;
}());
// export const Projects: Project[] = [
//     {
//         id: 151,
//         name: 'Alpha Centauri Probe',
//         launch_date: new Date(2030, 2),
//         project_manager: 'Tom Rundle',
//         budget: 20000000000
//     }
// ]; 
//# sourceMappingURL=project.mockdata.js.map