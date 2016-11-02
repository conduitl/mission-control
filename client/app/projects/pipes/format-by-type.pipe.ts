import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';

@Pipe({ name: 'formatByType'})
export class FormatByTypePipe implements PipeTransform {
    constructor (
        private datePipe: DatePipe,
        private currencyPipe: CurrencyPipe 
    ) {}
    transform(value: any, config_format: string) {
        if (config_format === undefined || config_format === null) {
            return value;
        }
        // date
        if (config_format.slice(0, 4) === 'date') {
            let arg = config_format.split(':')[1];
            if (arg) {
                return this.datePipe.transform(value, arg);
            }
            return this.datePipe.transform(value, 'fullDate');
        }
        // currency
        if (config_format.slice(0, 8) === 'currency') {
            let args = config_format.split(':').slice(1);
            return this.currencyPipe.transform(value, args[0], isTrue(args[1]), args[2] );
        }
        // helper function
        function isTrue(val: string) {
            if (val === 'true') {
                return true;
            }
            return false;
        }
    }
}