"use strict";
;
exports.util = {
    isTrue: function (val) {
        if (val === 'true') {
            return true;
        }
        return false;
    },
    parseStructure: function (data) {
        if (Array.isArray(data)) {
            var hasObjects = data
                .every(function (elem) { return elem !== typeof 'object'; });
            if (!hasObjects) {
                return data.join(', ');
            }
            return data.map(function (obj) {
                return obj.name ? obj.name : 'Unknown object';
            }).join(', ');
        }
        return data.name ? data.name : 'Unknown object';
    },
    extractPipeParams: function (val) {
        var params = val.split(':').slice(1);
        return params.length > 1 ? params : params[0];
    },
    isPipe: function (name, params) {
        var len = name.length;
        return params.slice(0, len) === name;
    }
};
//# sourceMappingURL=util.js.map