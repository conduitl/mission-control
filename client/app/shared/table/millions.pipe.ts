import { Pipe, PipeTransform } from '@angular/core';
export class MillionsPipe implements PipeTransform {
    transform(value: number, format: string) {
        return value / 1000000 + 'M';
    }
}