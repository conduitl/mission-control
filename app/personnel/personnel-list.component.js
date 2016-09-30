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
var PersonnelListComponent = (function () {
    function PersonnelListComponent(route, router, personnelService) {
        this.route = route;
        this.router = router;
        this.personnelService = personnelService;
        //constructor
    }
    PersonnelListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('NgOnInit');
        console.log('value of selectedId = ' + this.selectedId);
        this.route.params.forEach(function (params) {
            _this.selectedId = +params['id'];
            _this.getPersonnel();
        });
    };
    PersonnelListComponent.prototype.getPersonnel = function () {
        var _this = this;
        this.personnelService.getPersonnel()
            .then(function (personnel) {
            console.log('Promise => then');
            console.log('value of selectedId = ' + _this.selectedId);
            _this.personnel = personnel;
            11;
            if (_this.selectedId) {
                var id = _this.selectedId;
                _this.selectPerson(id);
            }
        });
    };
    PersonnelListComponent.prototype.onSelect = function (person) {
        var id = person.id;
        this.selectedId = id;
        this.selectPerson(id);
    };
    PersonnelListComponent.prototype.isSelected = function (person) {
        return person.id === this.selectedId;
    };
    PersonnelListComponent.prototype.selectPerson = function (id) {
        this.selectedPerson = this.personnel.find(function (person) {
            return person.id === id;
        });
    };
    PersonnelListComponent.prototype.gotoDetail = function (person) {
        var link = ['/person', person.id];
        this.router.navigate(link);
    };
    // Preview 
    PersonnelListComponent.prototype.checkImg = function (person) {
        if (person.img) {
            return person.img;
        }
        else {
            return 'http://placehold.it/300x300';
        }
    };
    // List operations for views
    PersonnelListComponent.prototype.makeCSList = function (arr) {
        return arr.reduce(function (pre, cur) {
            return pre + ', ' + cur;
        });
    };
    PersonnelListComponent = __decorate([
        core_1.Component({
            selector: 'personnel-list',
            templateUrl: 'app/personnel/personnel-list.component.html',
            styleUrls: ['app/personnel/personnel-list.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, personnel_service_1.PersonnelService])
    ], PersonnelListComponent);
    return PersonnelListComponent;
}());
exports.PersonnelListComponent = PersonnelListComponent;
//# sourceMappingURL=personnel-list.component.js.map