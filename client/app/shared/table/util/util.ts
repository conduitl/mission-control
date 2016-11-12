export const util = { 
    isTrue: function (val: string) {
        if (val === 'true') {
            return true;
        }
        return false;
    },
    parseStructure: function (data: any): string {
        if ( Array.isArray(data) ) {
            let hasObjects = data
                .every( elem => elem !== typeof 'object');
            if (!hasObjects) {
                return data.join(', ');
            }
            return data.map( obj => {
                return obj.name ? obj.name : 'Unknown object';
            }).join(', ');
        }
        return data.name ? data.name : 'Unknown object';
    },
    extractPipeParams: function (val: string) {
        let params = val.split(':').slice(1);
        return params.length > 1 ? params : params[0];
    }
}