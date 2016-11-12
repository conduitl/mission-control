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
var FormatCellPipe = (function () {
    function FormatCellPipe(currencyPipe, datePipe) {
        this.currencyPipe = currencyPipe;
        this.datePipe = datePipe;
    }
    FormatCellPipe.prototype.transform = function (value, format) {
        if (value === undefined) {
            return 'not available';
        }
        if (format === 'default' || format === null) {
            if (Array.isArray(value)) {
                if (typeof value[0] !== 'object') {
                    return value.join(', ');
                }
                else {
                    return value.map(function (obj) {
                        return obj.name;
                    }).join(', ');
                }
            }
            // TODO: Allow config for handling nested objects
            // TODO: ID instance of Date
            if (typeof value === "object") {
                return value.name ? value.name : 'Unknown object';
            }
            // If default & not other cond, return value with no transform
            return value;
        }
        /* Dates */
        if (format.slice(0, 4) === 'date') {
            var arg = format.split(':')[1];
            if (arg) {
                return this.datePipe.transform(value, arg);
            }
            return this.datePipe.transform(value, 'fullDate');
        }
        /* Currency */
        if (format.slice(0, 8) === 'currency') {
            var args = format.split(':').slice(1);
            return this.currencyPipe.transform(value, args[0], isTrue(args[1]), args[2]);
        }
        // If no cond met, simply return value
        return value;
        // helper function
        function isTrue(val) {
            if (val === 'true') {
                return true;
            }
            return false;
        }
    };
    FormatCellPipe = __decorate([
        core_1.Pipe({ name: 'formatCell' }), 
        __metadata('design:paramtypes', [common_1.CurrencyPipe, common_1.DatePipe])
    ], FormatCellPipe);
    return FormatCellPipe;
}());
exports.FormatCellPipe = FormatCellPipe;
//# sourceMappingURL=format-cell.pipe.js.map