"use strict";
var MillionsPipe = (function () {
    function MillionsPipe() {
    }
    MillionsPipe.prototype.transform = function (value, format) {
        return value / 1000000 + 'M';
    };
    return MillionsPipe;
}());
exports.MillionsPipe = MillionsPipe;
//# sourceMappingURL=millions.pipe.js.map