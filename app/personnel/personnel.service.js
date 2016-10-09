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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var mock_personnel_1 = require('./mock-personnel');
var PersonnelService = (function () {
    function PersonnelService(http) {
        this.http = http;
        this.personnelUrl = 'app/personnel'; // URL to web api
    }
    // Calls to server
    PersonnelService.prototype.getPersonnel = function () {
        return this.http.get(this.personnelUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    // Utilities for server calls
    PersonnelService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    PersonnelService.prototype.handleError = function (error) {
        // TODO: Better error handling
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log error to console
        return Observable_1.Observable.throw(errMsg);
    };
    // Rely on getPersonnel() method
    PersonnelService.prototype.getPerson = function (id) {
        return this.getPersonnel().toPromise()
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
    // Filtering methods
    PersonnelService.prototype.filterResults = function (query) {
        var _this = this;
        // TODO: Check for bad queries with invalid chars
        // TODO: Subscribe to Observable rather than rely on Promise conversion
        var rx = new RegExp(query, 'i');
        return this.getPersonnel().toPromise()
            .then(function (personnel) {
            if (query === '' || query === 'undefined') {
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
        __metadata('design:paramtypes', [http_1.Http])
    ], PersonnelService);
    return PersonnelService;
}());
exports.PersonnelService = PersonnelService;
//# sourceMappingURL=personnel.service.js.map