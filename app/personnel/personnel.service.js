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
var mock_personnel_1 = require('./mock-personnel');
var PersonnelService = (function () {
    function PersonnelService() {
    }
    PersonnelService.prototype.getPersonnel = function () {
        return Promise.resolve(mock_personnel_1.PERSONNEL);
    };
    PersonnelService.prototype.getPerson = function (id) {
        return this.getPersonnel()
            .then(function (personnel) { return personnel.find(function (person) { return person.id === id; }); });
    };
    PersonnelService.prototype.getBios = function () {
        return Promise.resolve(mock_personnel_1.BIOS);
    };
    PersonnelService.prototype.getBio = function (id) {
        return this.getBios()
            .then(function (bios) {
            return bios.find(function (bio) {
                return bio.id === id;
            });
        });
    };
    PersonnelService.prototype.filterResults = function (query) {
        var _this = this;
        // TODO: Check for bad queries with invalid chars
        // ISSUE: Query does not return missions when matched
        //        works when if (person.missions) is the only if block
        var rx = new RegExp(query, 'i');
        return this.getPersonnel()
            .then(function (personnel) {
            if (query == '') {
                return personnel;
            }
            return _this.search(query, personnel);
        });
    };
    PersonnelService.prototype.search = function (query, data) {
        var rx = new RegExp(query, 'i');
        return data.filter(function (element) {
            if (rx.test(element.name)) {
                return true;
            }
            if (rx.test(element.job)) {
                return true;
            }
            if (element.joined) {
                var year = element.joined.toString();
                if (rx.test(year)) {
                    return true;
                }
            }
            if (element.missions) {
                var missions = element.missions;
                for (var i = 0; i < missions.length; i++) {
                    if (rx.test(missions[i])) {
                        return true;
                    }
                }
            }
            return false;
        });
    };
    PersonnelService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PersonnelService);
    return PersonnelService;
}());
exports.PersonnelService = PersonnelService;
//# sourceMappingURL=personnel.service.js.map