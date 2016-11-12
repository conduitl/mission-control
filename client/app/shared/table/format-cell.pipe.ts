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
            // TODO: ID instance of Date
            if ( typeof value === "object") {
                return value.name ? value.name : 'Unknown object';
            }
            // If default & not other cond, return value with no transform
            return value;
        }

        /* Dates */
        if (format.slice(0, 4) === 'date') {
            let arg = format.split(':')[1];
            if (arg) {
                return this.datePipe.transform(value, arg);
            }
            return this.datePipe.transform(value, 'fullDate');
        }
        
        /* Currency */
        if (format.slice(0, 8) === 'currency') {
            let args = format.split(':').slice(1);
            return this.currencyPipe.transform(value, args[0], isTrue(args[1]), args[2] );
        }

        // If no cond met, simply return value
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