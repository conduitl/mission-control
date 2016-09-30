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
var personnel_service_1 = require('./personnel.service');
var PersonDetailComponent = (function () {
    function PersonDetailComponent(route, router, personnelService) {
        this.route = route;
        this.router = router;
        this.personnelService = personnelService;
    }
    PersonDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.personnelService.getPerson(id)
                .then(function (person) { return _this.person = person; });
            _this.personnelService.getBio(id)
                .then(function (bio) { return _this.bio = bio; });
        });
    };
    PersonDetailComponent.prototype.gotoStakeholders = function () {
        var personId = this.person ? this.person.id : null;
        this.router.navigate(['/stakeholders', { id: personId }]);
    };
    PersonDetailComponent = __decorate([
        core_1.Component({
            selector: 'person-detail',
            templateUrl: 'app/personnel/person-detail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, personnel_service_1.PersonnelService])
    ], PersonDetailComponent);
    return PersonDetailComponent;
}());
exports.PersonDetailComponent = PersonDetailComponent;
//# sourceMappingURL=person-detail.component.js.map