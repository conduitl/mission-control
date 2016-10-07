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
        // state of view mode
        this.modeMap = {
            add: false,
            edit: false
        };
        //constructor
    }
    PersonnelListComponent.prototype.ngOnInit = function () {
        console.log('Personnel List - Initialized');
        this.extractRouteParams();
    };
    // Extract and evaluate the route parameters
    PersonnelListComponent.prototype.extractRouteParams = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.listParams = {
                id: +params['id'],
                layout: params['layout'],
                query: params['query']
            };
            _this.evalParams();
        });
    };
    PersonnelListComponent.prototype.evalParams = function () {
        console.log('Params evaluated');
        if (this.listParams.id) {
            this.selectPerson(this.listParams.id);
        }
        // Set defaults if no matching params found
        if (this.listParams.query == undefined) {
            this.listParams.query = '';
        }
        if (this.listParams.layout == undefined) {
            this.listParams.layout = 'list';
        }
        // Apply filter if query; otherwise return entire data array
        if (this.listParams.query) {
            this.filterResults(this.listParams.query);
        }
        else {
            this.getPersonnel();
        }
    };
    // Retrieve data via service 
    PersonnelListComponent.prototype.getPersonnel = function () {
        var _this = this;
        this.personnelService.getPersonnel()
            .then(function (personnel) {
            _this.personnel = personnel;
        });
    };
    // Toggle add, edit or other modes
    PersonnelListComponent.prototype.toggleMode = function (mode) {
        this.modeMap[mode] = this.toggle(this.modeMap[mode]);
    };
    PersonnelListComponent.prototype.toggle = function (bool) {
        if (bool) {
            return false;
        }
        return true;
    };
    // Determine layout
    PersonnelListComponent.prototype.isLayoutSelected = function (layout) {
        return layout === this.listParams.layout;
    };
    PersonnelListComponent.prototype.selectLayout = function (layout) {
        this.listParams.layout = layout;
        var link = ['/personnel', this.listParams.id, {
                query: this.listParams.query,
                layout: this.listParams.layout
            }];
        this.router.navigate(link);
    };
    // Select person clicked on in layout; called by evalParams()
    PersonnelListComponent.prototype.selectPerson = function (id) {
        var _this = this;
        this.personnelService.getPerson(id)
            .then(function (person) {
            _this.selectedPerson = person;
            console.log(_this.selectedPerson);
        });
    };
    // Filter results
    PersonnelListComponent.prototype.setQuery = function (query) {
        var link;
        this.listParams.query = query;
        link = ['/personnel', this.listParams.id, {
                query: this.listParams.query,
                layout: this.listParams.layout
            }];
        this.router.navigate(link);
    };
    PersonnelListComponent.prototype.filterResults = function (query) {
        var _this = this;
        this.personnelService.filterResults(query).then(function (personnel) {
            return _this.personnel = personnel;
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