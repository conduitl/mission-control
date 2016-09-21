"use strict";
var router_1 = require('@angular/router');
var login_routing_1 = require('./login.routing');
var appRoutes = login_routing_1.loginRoutes.slice();
// simplifies registration of router dependencies; will make use of later
exports.appRoutingProviders = [
    login_routing_1.authProviders
];
// export the router
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map