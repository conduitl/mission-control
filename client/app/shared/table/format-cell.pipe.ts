import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
@Pipe({ name: 'formatCell' })
export class FormatCellPipe implements PipeTransform {
    constructor (
        private currencyPipe: CurrencyPipe,
        private datePipe: DatePipe
    ) { }
    transform(value: any, format: string) {
        if ( value === undefined ) {
            return 'not available';
        }
        if ( format === 'default' || format === null) {
            if ( Array.isArray(value) ) {
                if ( typeof value[0] !== 'object' ) {
                    return value.join(', ');
                } else {
                    return value.map( obj => {
                        return obj.name
                    }).join(', ');
                }
            }
            // TODO: Allow config for handling nested objects
            if ( typeof value === "object") {
                return value.name
            }
        }
        
        if (format === 'currency') {
            return this.currencyPipe.transform(value, 'USD', true);
        }
        
        return value;

        // helper function
        function isTrue(val: string) {
            if (val === 'true') {
                return true;
            }
            return false;
        }
    }
}