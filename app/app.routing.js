"use strict";
var router_1 = require('@angular/router');
var project_summary_component_1 = require('./project-summary.component');
var stakeholder_component_1 = require('./stakeholder.component');
var appRoutes = [
    { path: 'project-summary', component: project_summary_component_1.ProjectSummaryComponent },
    { path: 'stakeholder-management', component: stakeholder_component_1.StakeholderManagementComponent },
    { path: '', redirectTo: 'project-summary', pathMatch: 'full' }
];
// simplifies registration of router dependencies; will make use of later
exports.appRoutingProviders = [];
// export the router
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map