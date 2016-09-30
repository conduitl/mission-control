"use strict";
var router_1 = require('@angular/router');
var stakeholder_list_component_1 = require('./stakeholder-list.component');
var person_detail_component_1 = require('./person-detail.component');
var stakeholderRoutes = [
    { path: 'stakeholders', component: stakeholder_list_component_1.StakeholderListComponent },
    { path: 'person/:id', component: person_detail_component_1.PersonDetailComponent }
];
exports.stakeholderRouting = router_1.RouterModule.forChild(stakeholderRoutes);
//# sourceMappingURL=stakeholder.routing.js.map