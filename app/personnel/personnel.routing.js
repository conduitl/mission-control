"use strict";
var router_1 = require('@angular/router');
var personnel_manager_component_1 = require('./personnel-manager.component');
var personnel_list_component_1 = require('./personnel-list.component');
var profile_preview_component_1 = require('./profile-preview.component');
var person_detail_component_1 = require('./person-detail.component');
var personnelRoutes = [
    { path: 'personnel', component: personnel_manager_component_1.PersonnelManagerComponent, children: [
            { path: '', component: personnel_list_component_1.PersonnelListComponent },
            { path: 'preview', component: profile_preview_component_1.ProfilePreviewComponent, outlet: "aux" }
        ]
    },
    { path: 'person/:id', component: person_detail_component_1.PersonDetailComponent }
];
exports.personnelRouting = router_1.RouterModule.forChild(personnelRoutes);
//# sourceMappingURL=personnel.routing.js.map