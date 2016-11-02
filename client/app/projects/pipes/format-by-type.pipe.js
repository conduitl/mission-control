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
var FormatByTypePipe = (function () {
    function FormatByTypePipe(datePipe, currencyPipe) {
        this.datePipe = datePipe;
        this.currencyPipe = currencyPipe;
    }
    FormatByTypePipe.prototype.transform = function (value, config_format) {
        if (config_format === undefined || config_format === null) {
            return value;
        }
        if (config_format.slice(0, 4) === 'date') {
            var arg = config_format.split(':')[1];
            if (arg) {
                return this.datePipe.transform(value, arg);
            }
            return this.datePipe.transform(value, 'fullDate');
        }
        if (config_format.slice(0, 8) === 'currency') {
            var args = config_format.split(':').slice(1);
            return this.currencyPipe.transform(value, args[0], isTrue(args[1]));
        }
        function isTrue(val) {
            if (val === 'true') {
                return true;
            }
            return false;
        }
    };
    FormatByTypePipe = __decorate([
        core_1.Pipe({ name: 'formatByType' }), 
        __metadata('design:paramtypes', [common_1.DatePipe, common_1.CurrencyPipe])
    ], FormatByTypePipe);
    return FormatByTypePipe;
}());
exports.FormatByTypePipe = FormatByTypePipe;
//# sourceMappingURL=format-by-type.pipe.js.map