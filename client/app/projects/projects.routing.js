"use strict";
var router_1 = require('@angular/router');
//Feature root
var project_center_component_1 = require('./project-center.component');
var projectRoutes = [
    {
        path: 'projects', component: project_center_component_1.ProjectCenterComponent
    }
];
exports.projectRouting = router_1.RouterModule.forChild(projectRoutes);
//# sourceMappingURL=projects.routing.js.map