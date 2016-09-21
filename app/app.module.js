"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
// root
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
// features
var projects_module_1 = require('./projects/projects.module');
var stakeholder_module_1 = require('./stakeholder/stakeholder.module');
var admin_module_1 = require('./admin/admin.module');
var assets_module_1 = require('./assets/assets.module');
var navbar_module_1 = require('./navbar/navbar.module');
// authorization
var auth_guard_service_1 = require('./auth-guard.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                navbar_module_1.NavbarModule,
                app_routing_1.routing,
                stakeholder_module_1.StakeholderModule,
                projects_module_1.ProjectsModule,
                assets_module_1.AssetsModule,
                admin_module_1.AdminModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            providers: [
                app_routing_1.appRoutingProviders,
                auth_guard_service_1.AuthGuard
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map