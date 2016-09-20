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
var Person = (function () {
    function Person() {
    }
    return Person;
}());
exports.Person = Person;
var PERSONNEL = [
    { name: 'Alan B. Shepard, Jr.', job: 'astronaut' },
    { name: 'Virgil I. Grissom', job: 'astronaut' },
    { name: 'John H. Glenn, Jr.', job: 'astronaut' },
    { name: 'M. Scott Carpenter', job: 'astronaut' },
    { name: 'Walter M. Schirra, Jr.', job: 'astronaut' },
    { name: 'L. Gordon Cooper, Jr.', job: 'astronaut' },
    { name: 'Walter M. Schirra, Jr.', job: 'astronaut' },
    { name: 'Neil A. Armstrong', job: 'astronaut' },
    { name: 'Frank Borman', job: 'astronaut' },
    { name: 'Charles "Pete" Conrad', job: 'astronaut' },
    { name: 'James A. Lovell', job: 'astronaut' },
    { name: 'James A. McDivitt', job: 'astronaut' },
    { name: 'Thomas P. Stafford', job: 'astronaut' }
];
var StakeholderListComponent = (function () {
    function StakeholderListComponent() {
        this.personnel = PERSONNEL;
    }
    StakeholderListComponent.prototype.onViewDetails = function (person) {
        this.selectedPerson = person;
    };
    StakeholderListComponent = __decorate([
        core_1.Component({
            selector: 'stakeholder-list',
            templateUrl: 'app/stakeholder/stakeholder-list.component.html',
            styles: ["\n        .selected {\n            background-color: #CFD8DC !important;\n            color: white;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], StakeholderListComponent);
    return StakeholderListComponent;
}());
exports.StakeholderListComponent = StakeholderListComponent;
//# sourceMappingURL=stakeholder-list.component.js.map