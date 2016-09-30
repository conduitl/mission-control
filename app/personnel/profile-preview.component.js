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
var person_1 = require('./person');
var ProfilePreviewComponent = (function () {
    function ProfilePreviewComponent(router) {
        this.router = router;
    }
    ProfilePreviewComponent.prototype.gotoDetail = function (person) {
        var link = ['/personnel', person.id];
        this.router.navigate(link);
    };
    ProfilePreviewComponent.prototype.closeDetail = function (person) {
        var link = ['/personnel'];
        this.router.navigate(link);
    };
    // Preview 
    ProfilePreviewComponent.prototype.checkImg = function (person) {
        if (person.img) {
            return person.img;
        }
        else {
            return 'http://placehold.it/300x300';
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', person_1.Person)
    ], ProfilePreviewComponent.prototype, "person", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ProfilePreviewComponent.prototype, "isDetail", void 0);
    ProfilePreviewComponent = __decorate([
        core_1.Component({
            selector: 'profile-preview',
            templateUrl: 'app/personnel/profile-preview.component.html',
            styles: ["\n        .preview-controls {\n            text-align: center;\n        }\n        .caption h4 {\n            margin-bottom: 3px;\n        }\n        ul {\n            padding-left: 16px;\n            margin-left: 0;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ProfilePreviewComponent);
    return ProfilePreviewComponent;
}());
exports.ProfilePreviewComponent = ProfilePreviewComponent;
//# sourceMappingURL=profile-preview.component.js.map