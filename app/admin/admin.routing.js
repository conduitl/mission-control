"use strict";
var router_1 = require('@angular/router');
var admin_component_1 = require('./admin.component');
var admin_dashboard_component_1 = require('./admin-dashboard.component');
var manage_projects_component_1 = require('./manage-projects.component');
var manage_personnel_component_1 = require('./manage-personnel.component');
var adminRoutes = [
    {
        path: 'admin',
        component: admin_component_1.AdminComponent,
        children: [
            {
                path: '',
                children: [
                    {
                        path: 'projects',
                        component: manage_projects_component_1.ManageProjectsComponent
                    },
                    {
                        path: 'personnel',
                        component: manage_personnel_component_1.ManagePersonnelComponent
                    },
                    {
                        path: '',
                        component: admin_dashboard_component_1.AdminDashboardComponent
                    }
                ]
            }
        ]
    }
];
exports.adminRouting = router_1.RouterModule.forChild(adminRoutes);
//# sourceMappingURL=admin.routing.js.map