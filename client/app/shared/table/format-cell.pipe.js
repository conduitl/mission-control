// TODO - 
// * make helper functions & import from util file
// * config for percent pipe args
// * custom pipe for rounding millions
// * service that handles injection of all pipes
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
var util_1 = require('./util/util');
var FormatCellPipe = (function () {
    function FormatCellPipe(currencyPipe, datePipe, percentPipe) {
        this.currencyPipe = currencyPipe;
        this.datePipe = datePipe;
        this.percentPipe = percentPipe;
    }
    FormatCellPipe.prototype.transform = function (value, format) {
        if (value === undefined) {
            return 'not available';
        }
        if (format === 'default' || format === null) {
            // TODO: Allow config for handling nested objects
            // TODO: ID instance of Date
            if (typeof value === "object") {
                return util_1.util.parseStructure(value);
            }
            // If default & not other cond, return value with no transform
            return value;
        }
        /* Percent */
        if (util_1.util.isPipe('percent', format)) {
            var arg = util_1.util.extractPipeParams(format);
            return this.percentPipe.transform(value, arg);
        }
        /* Dates */
        if (util_1.util.isPipe('date', format)) {
            var arg = util_1.util.extractPipeParams(format);
            if (arg) {
                return this.datePipe.transform(value, arg);
            }
            return this.datePipe.transform(value, 'fullDate');
        }
        /* Currency */
        if (util_1.util.isPipe('currency', format)) {
            var args = util_1.util.extractPipeParams(format);
            args[1] = util_1.util.isTrue(args[1]);
            return this.currencyPipe.transform(value, args[0], args[1], args[2]);
        }
        // If no cond met, simply return value
        return value;
    };
    FormatCellPipe = __decorate([
        core_1.Pipe({ name: 'formatCell' }), 
        __metadata('design:paramtypes', [common_1.CurrencyPipe, common_1.DatePipe, common_1.PercentPipe])
    ], FormatCellPipe);
    return FormatCellPipe;
}());
exports.FormatCellPipe = FormatCellPipe;
//# sourceMappingURL=format-cell.pipe.js.map