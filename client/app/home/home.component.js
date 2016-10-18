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
var router_1 = require('@angular/router');
var personnel_service_1 = require('../personnel/personnel.service'); // TODO: Decouple
var HomeComponent = (function () {
    function HomeComponent(router, personnelService) {
        this.router = router;
        this.personnelService = personnelService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getPersonnel();
    };
    // Retrieve data via service
    HomeComponent.prototype.getPersonnel = function () {
        var _this = this;
        this.personnelService.filterResults('group 1')
            .then(function (personnel) { return _this.personnel = personnel; });
    };
    // Navigate to collection (via query) in personnel list
    HomeComponent.prototype.gotoCollection = function (query) {
        var link = ['/personnel', 151, {
                query: query,
                layout: 'list'
            }];
        this.router.navigate(link);
    };
    HomeComponent = __decorate([
        // TODO: Decouple
        core_1.Component({
            selector: 'home-page',
            templateUrl: 'app/home/home.component.html',
            styleUrls: ['app/home/home.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, personnel_service_1.PersonnelService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map