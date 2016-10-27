"use strict";
var router_1 = require('@angular/router');
var add_project_component_1 = require('./add-project.component');
//Feature root
var project_center_component_1 = require('./project-center.component');
var projectRoutes = [
    {
        path: 'projects',
        children: [
            { path: '', component: project_center_component_1.ProjectCenterComponent },
            { path: 'add', component: add_project_component_1.AddProjectComponent }
        ]
    }
];
exports.projectRouting = router_1.RouterModule.forChild(projectRoutes);
//# sourceMappingURL=projects.routing.js.map