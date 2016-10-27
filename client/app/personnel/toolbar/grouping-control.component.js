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
var GroupingControlComponent = (function () {
    function GroupingControlComponent() {
        this.group = new core_1.EventEmitter();
    }
    GroupingControlComponent.prototype.groupBy = function (group) {
        this.group.emit(group);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], GroupingControlComponent.prototype, "group", void 0);
    GroupingControlComponent = __decorate([
        core_1.Component({
            selector: 'grouping-control',
            template: "\n        <div class=\"form-group\">\n            <label for=\"group-by\">Group by:</label>\n            <select #grouping name=\"group-by\" id=\"group-by\" class=\"form-control\"\n                [ngModel]=\"grouping.value\"\n                (ngModelChange)=\"groupBy(grouping.value)\">\n                <option>(none)</option>\n                <option>Job type</option>\n                <option>Year joined</option>\n                <option>Programs</option>\n                <option>Missions</option>\n            </select>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], GroupingControlComponent);
    return GroupingControlComponent;
}());
exports.GroupingControlComponent = GroupingControlComponent;
//# sourceMappingURL=grouping-control.component.js.map