import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'keyHeader'})
export class KeyHeaderPipe implements PipeTransform {
    transform(value: string) {
        return value.toUpperCase().replace('_', ' ');
    }
}