"use strict";
var router_1 = require('@angular/router');
var project_center_component_1 = require('./project-center.component');
var project_list_component_1 = require('./project-list.component');
var project_dashboard_component_1 = require('./project-dashboard.component');
var summary_component_1 = require('./summary.component');
var projectRoutes = [
    {
        path: 'projects',
        component: project_center_component_1.ProjectCenterComponent,
        children: [
            {
                path: '',
                component: project_list_component_1.ProjectListComponent,
                children: [
                    {
                        path: ':id',
                        component: project_dashboard_component_1.ProjectDashboardComponent
                    },
                    {
                        path: '',
                        component: summary_component_1.SummaryComponent
                    }
                ]
            }
        ]
    }
];
exports.projectRouting = router_1.RouterModule.forChild(projectRoutes);
//# sourceMappingURL=projects.routing.js.map