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
var Subject_1 = require('rxjs/Subject');
var ProjectToolbarComponent = (function () {
    function ProjectToolbarComponent() {
        this.onFilter = new core_1.EventEmitter();
        this.filterTerms = new Subject_1.Subject();
    }
    ProjectToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.passedTerms = this.filterTerms
            .debounceTime(300)
            .distinctUntilChanged();
        this.filter = this.passedTerms.subscribe(function (filter) {
            _this.propagateFilter(filter);
        }, function (err) {
            // implement error handling here
            console.log(err);
        });
    };
    // push term onto Observable stream
    ProjectToolbarComponent.prototype.addTerm = function (term) {
        this.filterTerms.next(term);
    };
    ProjectToolbarComponent.prototype.propagateFilter = function (filter) {
        this.onFilter.emit(filter);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ProjectToolbarComponent.prototype, "onFilter", void 0);
    ProjectToolbarComponent = __decorate([
        core_1.Component({
            selector: 'ct7-project-toolbar',
            templateUrl: 'app/projects/project-toolbar.component.html',
            styles: ["\n        @media (min-width: 768px) {\n            #filter-input {\n                width: 690px;\n            }\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectToolbarComponent);
    return ProjectToolbarComponent;
}());
exports.ProjectToolbarComponent = ProjectToolbarComponent;
//# sourceMappingURL=project-toolbar.component.js.map