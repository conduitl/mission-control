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
var personnel_service_1 = require('./personnel.service');
var StakeholderListComponent = (function () {
    function StakeholderListComponent(personnelService) {
        this.personnelService = personnelService;
        //constructor
    }
    StakeholderListComponent.prototype.ngOnInit = function () {
        this.getPersonnel();
    };
    StakeholderListComponent.prototype.getPersonnel = function () {
        this.personnel = this.personnelService.getPersonnel();
    };
    StakeholderListComponent.prototype.onViewDetails = function (person) {
        this.selectedPerson = person;
    };
    StakeholderListComponent = __decorate([
        core_1.Component({
            selector: 'stakeholder-list',
            templateUrl: 'app/stakeholder/stakeholder-list.component.html',
            styles: ["\n        .selected {\n            background-color: #CFD8DC !important;\n            color: white;\n        }\n    "],
            providers: [personnel_service_1.PersonnelService]
        }), 
        __metadata('design:paramtypes', [personnel_service_1.PersonnelService])
    ], StakeholderListComponent);
    return StakeholderListComponent;
}());
exports.StakeholderListComponent = StakeholderListComponent;
//# sourceMappingURL=stakeholder-list.component.js.map