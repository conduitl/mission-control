"use strict";
var router_1 = require('@angular/router');
var appRoutes = [
    { path: '', redirectTo: 'projects', pathMatch: 'full' }
];
// simplifies registration of router dependencies; will make use of later
exports.appRoutingProviders = [];
// export the router
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map