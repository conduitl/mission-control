// TODO - 
// * make helper functions & import from util file
// * config for percent pipe args
// * custom pipe for rounding millions
// * service that handles injection of all pipes

import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe, DatePipe, PercentPipe } from '@angular/common';
import { util as _ } from './util/util';
@Pipe({ name: 'formatCell' })
export class FormatCellPipe implements PipeTransform {
    constructor (
        private currencyPipe: CurrencyPipe,
        private datePipe: DatePipe,
        private percentPipe: PercentPipe
    ) { }
    transform(value: any, format: string) {
        if ( value === undefined ) {
            return 'not available';
        }
        if ( format === 'default' || format === null) {
            // TODO: Allow config for handling nested objects
            // TODO: ID instance of Date
            if ( typeof value === "object") {
                return _.parseStructure(value);
            }
            // If default & not other cond, return value with no transform
            return value;
        }

        /* Percent */
        if ( _.isPipe('percent', format ) ) {
            let arg: any = _.extractPipeParams(format);
            return this.percentPipe.transform(value, arg);
        }

        /* Dates */
        if ( _.isPipe('date', format) ) {
            let arg: any = _.extractPipeParams(format);
            if (arg) {
                return this.datePipe.transform(value, arg);
            }
            return this.datePipe.transform(value, 'fullDate');
        }
        
        /* Currency */
        if ( _.isPipe('currency', format) ) {
            let args: any = _.extractPipeParams(format);
            args[1] = _.isTrue(args[1]);
            return this.currencyPipe.transform(value, args[0], args[1], args[2] );
        }

        // If no cond met, simply return value
        return value;
        
    }
}