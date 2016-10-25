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
        this.personnelService.getPersonnel()
            .then(function (personnel) {
            _this.personnel = personnel;
            _this.prepareDataSummary(personnel);
        });
        this.personnelService.filterResults('group 1')
            .then(function (personnel) { return _this.mercury = personnel; });
        this.personnelService.filterResults('first women')
            .then(function (personnel) {
            _this.women = personnel;
        });
    };
    // Summarize data collection
    HomeComponent.prototype.prepareDataSummary = function (personnel) {
        // group by job and return length of each category
        var cats = personnel.map(function (person) { return person.job; });
        var reduced = cats.reduce(function (pre, cur) {
            var obj = pre;
            if (obj[cur]) {
                obj[cur]++;
            }
            else {
                obj[cur] = 1;
            }
            return obj;
        }, {});
        this.stats = reduced;
    };
    // Navigate to collection (via query) in personnel list
    HomeComponent.prototype.gotoCollection = function (query, id) {
        var link = ['/personnel', id, {
                query: query,
                layout: 'list'
            }];
        this.router.navigate(link);
    };
    HomeComponent.prototype.gotoPersonnel = function () {
        this.router.navigate(['/personnel']);
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