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
var common_1 = require('@angular/common');
var stakeholder_list_component_1 = require('./stakeholder-list.component');
var person_detail_component_1 = require('./person-detail.component');
var personnel_service_1 = require('./personnel.service');
var stakeholder_routing_1 = require('./stakeholder.routing');
var PersonnelModule = (function () {
    function PersonnelModule() {
    }
    PersonnelModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                stakeholder_routing_1.stakeholderRouting
            ],
            declarations: [
                stakeholder_list_component_1.StakeholderListComponent,
                person_detail_component_1.PersonDetailComponent
            ],
            providers: [
                personnel_service_1.PersonnelService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PersonnelModule);
    return PersonnelModule;
}());
exports.PersonnelModule = PersonnelModule;
//# sourceMappingURL=personnel.module.js.map