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
        this.extractRouteParams();
    };
    // Extract and evaluate the route parameters
    PersonnelListComponent.prototype.extractRouteParams = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.listParams = {
                id: +params['id'],
                layout: params['layout'],
                query: params['query'],
                perPage: +params['perPage']
            };
            _this.evalParams();
        });
    };
    PersonnelListComponent.prototype.evalParams = function () {
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
        console.log('Eval params: perPage = ' + this.listParams.perPage);
        if (isNaN(this.listParams.perPage)) {
            this.listParams.perPage = 10;
        }
        // Apply filter if query; otherwise return entire data array
        if (this.listParams.query) {
            this.filterResults(this.listParams.query);
        }
        else {
            this.getPersonnel();
        }
    };
    // Page results
    PersonnelListComponent.prototype.defineResultsPerPage = function (per) {
        var link = ['/personnel', this.listParams.id, {
                query: this.listParams.query,
                layout: this.listParams.layout,
                perPage: per
            }];
        this.router.navigate(link);
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
    PersonnelListComponent.prototype.selectLayout = function (layout) {
        this.listParams.layout = layout;
        var link = ['/personnel', this.listParams.id, {
                query: this.listParams.query,
                layout: this.listParams.layout,
                perPage: this.listParams.perPage
            }];
        this.router.navigate(link);
    };
    // Select person clicked on in layout; called by evalParams()
    PersonnelListComponent.prototype.selectPerson = function (id) {
        var _this = this;
        this.personnelService.getPerson(id)
            .then(function (person) {
            _this.selectedPerson = person;
        });
    };
    // Filter results
    PersonnelListComponent.prototype.setQuery = function (query) {
        console.log(query);
        var link;
        this.listParams.query = query;
        link = ['/personnel', this.listParams.id, {
                query: this.listParams.query,
                layout: this.listParams.layout,
                perPage: this.listParams.perPage
            }];
        this.router.navigate(link);
    };
    PersonnelListComponent.prototype.filterResults = function (query) {
        var _this = this;
        this.personnelService.filterResults(query).then(function (personnel) {
            _this.personnel = personnel;
            if (_this.grouping) {
                _this.groupBy(_this.grouping);
            }
        });
    };
    // Group results
    PersonnelListComponent.prototype.groupBy = function (col) {
        var controlMap = {
            '(none)': undefined,
            'Year joined': 'joined',
            'Job type': 'job',
            'Programs': 'programs',
            'Missions': 'missions'
        };
        col = controlMap[col];
        if (col === undefined) {
            this.groups = undefined;
            return;
        }
        // Refactor - Better, scalable handing of keys referencing Arrays
        var groups = {};
        this.personnel.forEach(function (person, idx, arr) {
            if (Array.isArray(person[col])) {
                person[col].forEach(function (mission, idx, arr) {
                    group(person, groups, col, idx);
                });
            }
            else {
                group(person, groups, col, null);
            }
        });
        function group(person, groups, column, nested_idx) {
            if (nested_idx === null) {
                if (!groups[person[column]]) {
                    groups[person[column]] = [];
                }
                // Push person to the appropriate group based on supplied column
                // e.g. Job type
                groups[person[column]].push(person);
            }
            else {
                if (!groups[person[column][nested_idx]]) {
                    groups[person[column][nested_idx]] = [];
                }
                groups[person[column][nested_idx]].push(person);
            }
        }
        this.grouping = col; // Stores the column value by which list is grouped
        this.groups = groups; // Personnel list stored in column list groups
        this.keys = Object.keys(groups); // Keys of all groups
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